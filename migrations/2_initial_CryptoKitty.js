const CryptoKitty = artifacts.require("CryptoKitty"); //需要部署的合约名称 
module.exports = function(deployer) {
      deployer.deploy(CryptoKitty);
};