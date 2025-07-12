require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

module.exports = {
  solidity: "0.8.20",
  networks: {
    bnbTestnet: {
      url: "https://data-seed-prebsc-1-s1.binance.org:8545/", // BNB testnet RPC
      accounts: [process.env.PRIVATE_KEY],
      chainId: 97
    }
  }
};
