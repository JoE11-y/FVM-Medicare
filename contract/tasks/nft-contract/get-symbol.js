task("get-symbol", "Calls NFT Contract to get the symbol of the NFT token")
    .addParam("contract", "The address the NFT contract")
    .setAction(async (taskArgs) => {
        const contractAddr = taskArgs.contract
        const networkId = network.name
        console.log(
            "Reading NFT Contract symbol deployed to",
            contractAddr,
            " on network ",
            networkId
        )
        const NFTAddress = await ethers.getContractFactory("FVMMedicareNFT")

        console.log(NFTAddress)

        //Get signer information
        const accounts = await ethers.getSigners()
        const signer = accounts[0]

        const NFTContract = new ethers.Contract(contractAddr, NFTAddress.interface, signer)
        let result = await NFTContract.symbol()
        console.log("Data is:", result)
    })

module.exports = {}
