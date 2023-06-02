//https://eth-sepolia.g.alchemy.com/v2/pWPvtuvGYR2TEhGAq4TiNzTXrvEieDTu
require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.18",
  networks: {
    sepolia: {
      url: "https://eth-sepolia.g.alchemy.com/v2/pWPvtuvGYR2TEhGAq4TiNzTXrvEieDTu",
      accounts: ['551fb7db8b781d7f79c67ad58b7b48633cc1890df8a3af6969e85e64675c8b38'],
    },
  },
};
