import React, { useEffect, useCallback, useState } from "react";
import { useAccount, useProvider, useSigner } from "wagmi";
import { DesktopNav } from "../components/DesktopNav";
import { Logo } from "../components/Logo";
import { UserIcon } from "../components/UserIcon";
import { PatientSummary } from "../components/PatientSummary";
import { AppointmentList } from "../components/AppointmentList";
import { DoctorPendingAppointment } from "../components/DoctorPendingAppointment";
import { AppointmentSummaryProvider } from "../context";
import { useFVMMedicareContract, useDoctorNFTContract } from "../hooks";
import { getInformation, loadAppointments } from "../apis/FVMMedicare";
import { downloadNDecryptData } from "../apis/Lighthouse";
import { Loader } from "../components/Loader";

export const DoctorDashboard = () => {
  const [loading, setLoading] = useState(false);
  const [doctorData, setDoctorData] = useState({});
  const { address } = useAccount();
  const provider = useProvider();
  const { data: signer, isFetched } = useSigner();
  const [data, setData] = useState({});
  const [acceptedAppointments, setAcceptedAppointments] = useState([]);
  const [pendingAppointments, setPendingAppointments] = useState([]);
  const contract = useFVMMedicareContract(provider);
  const nftContract = useDoctorNFTContract(provider);

  const getDoctorData = useCallback(async () => {
    setLoading(true);
    try {
      if (isFetched) {
        const nftContractLinked = nftContract.connect(signer);
        const tokenId = nftContractLinked.getTokenId(address);
        const doctorCID = nftContractLinked.tokenURI(tokenId);
        const data = downloadNDecryptData(doctorCID, signer);
        setDoctorData(data);
        console.log(data);
      }
    } catch (e) {
      console.log(e.message);
    } finally {
      setLoading(false);
    }
  }, [isFetched]);

  const loadData = useCallback(async () => {
    const data = await getInformation(contract, address);
    setData(data);
  }, [address, contract]);

  const getAppointments = useCallback(async () => {
    const appointments = await loadAppointments(contract, address);
    if (appointments.acceptedAppointments)
      setAcceptedAppointments(appointments.rejectedAppointments);
    if (appointments.pendingAppointments)
      setPendingAppointments(appointments.pendingAppointments);
  }, [address, contract]);

  useEffect(() => {
    if (contract & !data) {
      loadData();
      getAppointments();
    }
  }, [contract, loadData, data, getAppointments]);

  return (
    <AppointmentSummaryProvider>
      <div className="doctor-dashboard">
        <header className="landingHeader">
          <div style={{ display: "flex", alignItems: "center" }}>
            <Logo colorTop={"#272F3F"} colorBottom={"#272F3F"} />
            <DesktopNav style={{ borderColor: "#272F3F", color: "#272F3F" }} />
          </div>
          <UserIcon />
        </header>

        {loading ? (
          <Loader />
        ) : (
          <section style={{ padding: "1rem 2rem 2rem" }}>
            <div>
              <p>
                Good Morning <b>Dr. {data.surname}</b>{" "}
              </p>
              <p>
                <small style={{ opacity: 0.5 }}>
                  Happiness is the highest form of health.
                </small>
              </p>
            </div>
            <div className="doctor-view">
              <AppointmentList acceptedAppointments={acceptedAppointments} />
              <PatientSummary />
              <DoctorPendingAppointment
                pendingAppointments={pendingAppointments}
              />
            </div>
          </section>
        )}
      </div>
    </AppointmentSummaryProvider>
  );
};
