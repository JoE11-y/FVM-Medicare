// SPDX-License-Identifier: MIT

pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract FVMMedicareNFT is ERC721URIStorage {
    using Counters for Counters.Counter;

    Counters.Counter private _tokenIdCounter;

    mapping(address => uint256) private tokenIdPointer;

    constructor(string memory _name, string memory _symbol) ERC721(_name, _symbol) {
        _tokenIdCounter.increment();
    }

    function createData(address addr, string calldata uri) public {
        require(balanceOf(addr) == 0, "you already have a minted NFT");
        uint256 tokenId = _tokenIdCounter.current();
        _safeMint(addr, tokenId);
        _setTokenURI(tokenId, uri);
        tokenIdPointer[addr] = tokenId;
        _tokenIdCounter.increment();
    }

    function totalSupply() public view returns (uint256) {
        return _tokenIdCounter.current() - 1;
    }

    function getTokenId(address addr) public view returns (uint256) {
        return tokenIdPointer[addr];
    }

    function deleteData(uint256 tokenId) public {
        require(_isApprovedOrOwner(_msgSender(), tokenId), "not token owner or approved");
        _burn(tokenId);
    }

    function _beforeTokenTransfer(
        address from,
        address to,
        uint256 tokenId,
        uint256 batchSize
    ) internal virtual override(ERC721) {
        require(from == address(0), "token transfer not allowed");
        super._beforeTokenTransfer(from, to, tokenId, batchSize);
    }

    function tokenURI(uint256 tokenId)
        public
        view
        override(ERC721URIStorage)
        returns (string memory)
    {
        return super.tokenURI(tokenId);
    }

    function supportsInterface(bytes4 interfaceId) public view override(ERC721) returns (bool) {
        return super.supportsInterface(interfaceId);
    }
}
