// SPDX-License-Identifier: MIT

pragma solidity ^0.8.9;

interface IFVMMedicareNFT {
    function createData(address addr, string calldata tokenURI) external returns (uint256);

    function isTokenHolder(address addr) external view returns (bool);

    function deleteData(uint256 tokenId) external;

    function getTokenId(address addr) external view returns (uint256);
}
