const HDWalletProvider = require('truffle-hdwallet-provider');

const mnemonic = 'merit grace initial ankle apology talent vague cheese suggest coast gap lottery';
module.exports = {
  networks: {
    development: {      
      host: 'localhost',
      port: 7545,
      network_id: '*',
      gas: 5000000
    },
    rinkeby: {
      provider: () => new HDWalletProvider(mnemonic, "https://rinkeby.infura.io/v3/b1ec901ed087419fa0fe23b68a8bed73"),
      network_id: 4
    }
  }
}