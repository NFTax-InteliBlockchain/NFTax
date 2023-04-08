// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract Google is ERC1155, Ownable {
    constructor()
        ERC1155("https://ipfs.io/ipfs/Qma99wLFyKBdC8ScQqje89zkasRU9K5eDejM8iSCdhU15D/Google.json")
    {}

    function mint(address account, uint256 amount)
        public
        onlyOwner
    {
        _mint(account, 0, amount, "");
    }

}