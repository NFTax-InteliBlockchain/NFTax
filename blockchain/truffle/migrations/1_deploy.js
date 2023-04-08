const CdbBrb = artifacts.require("CdbBrb");
const Alpargatas = artifacts.require("Alpargatas");
const FiiBrb = artifacts.require("FiiBrb");
const Google = artifacts.require("Google");
const Klabin = artifacts.require("Klabin");
const LcaBrb = artifacts.require("LcaBrb");


module.exports = function (deployer) {
  // deployment steps
  deployer.deploy(CdbBrb);
  deployer.deploy(Alpargatas);
  deployer.deploy(FiiBrb);
  deployer.deploy(Google);
  deployer.deploy(Klabin);
  deployer.deploy(LcaBrb);
};
