const KittyCore = artifacts.require("KittyCore");
const GeneSimple = artifacts.require("GeneSimple");
const SaleClockAuction = artifacts.require("SaleClockAuction");
const SiringClockAuction = artifacts.require("SiringClockAuction");

const CUT = 5000;

module.exports = async function(deployer) {
      await deployer.deploy(KittyCore);
      console.log("KittyCore address: ", KittyCore.address);

      await deployer.deploy(GeneSimple);
      console.log("GeneSimple address: ", GeneSimple.address);

      await deployer.deploy(SaleClockAuction, KittyCore.address, CUT);
      console.log("SaleClockAuction address: ", SaleClockAuction.address);

      await deployer.deploy(SiringClockAuction, KittyCore.address, CUT);
      console.log("SiringClockAuction address: ", SiringClockAuction.address);
};