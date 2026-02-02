// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract CertificateVerification {

    mapping(string => string) private certificates;

    function issueCertificate(string memory certId, string memory certHash) public {
        certificates[certId] = certHash;
    }

    function verifyCertificate(string memory certId, string memory certHash) public view returns (bool) {
        return keccak256(abi.encodePacked(certificates[certId])) ==
               keccak256(abi.encodePacked(certHash));
    }
}
