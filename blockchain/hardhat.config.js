require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-web3");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async () => {
  const accounts = await ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});


// task action function receives the Hardhat Runtime Environment as second argument
task("accountsWeb3", "Prints accounts", async (_, { web3 }) => {
  
  console.log(await web3.eth.getAccounts());
  
});

module.exports = {};

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  networks: {
    hardhat: {
      chainId: 1337,
      gas: 12000000,
      blockGasLimit: 0x1fffffffffffff,
      allowUnlimitedContractSize: true,
      timeout: 1800000,
      accounts: [
        {
          privateKey: process.env.ACCOUNT_1_PRIVATE_KEY,
          balance: '10000000000000000000000',
        },
        {
          privateKey: process.env.ACCOUNT_2_PRIVATE_KEY,
          balance: '10000000000000000000000',
        }
      ]
    },
  },
  solidity: "0.5.0",
};

