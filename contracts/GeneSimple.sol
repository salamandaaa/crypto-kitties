pragma solidity ^0.4.11;
import "./GeneScienceInterface.sol"

/// @title SEKRETOOOO
contract GeneSimple is GeneScienceInterface {
    /// @dev simply a boolean to indicate this is the contract we expect to be
    function isGeneScience() public pure returns (bool) {
        return true;
    }

    /// @dev given genes of kitten 1 & 2, return a genetic combination - may have a random factor
    /// @param genes1 genes of mom
    /// @param genes2 genes of sire
    /// @return the genes that are supposed to be passed down the child
    function mixGenes(uint256 genes1, uint256 genes2, uint256 targetBlock) public returns (uint256) {
        bytes32 hash = keccak256(targetBlock);
        uint256 hash256 = uint256(hash);
        uint256 ret = (genes1 ^ genes2) & hash256;
        return ret;
    }
}