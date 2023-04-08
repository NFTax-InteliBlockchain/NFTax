const PrivateKeyProvider = require("@truffle/hdwallet-provider");
const privateKeyProvider = new PrivateKeyProvider(
  "ae6ae8e5ccbfb04590405997ee2d52d2b330726137b875053c36d94e974d162f",
  "http://localhost:8545"
);

module.exports = {
  compilers: {
    solc: {
      version: "^0.8.9",
    },
  },
  networks: {
    besuWallet: {
      provider: privateKeyProvider,
      network_id: "*",
    },
  },
};
