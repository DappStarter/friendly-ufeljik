require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/lib/wallet-provider');


let mnemonic = 'grid nation flock system egg develop remind proud grace globe olympic stool'; 
let testAccounts = [
"0x6bc8fe3c6de180f033a1a0b33cc4a2cb1c3139c04383d2abe54af9e352613b32",
"0x3fd6b36e96244ce02ca8b0fb0c5978ce58ee5bf515d0d33f26ebebb223c68bea",
"0xf35d9718c9a2cb0a984c07a2c92923866d70715a5616be0edc637cb4ebbc9f66",
"0x3c58d797a18b28d6009d8f4f4254483d738192c0101f932c6c0149508972c39a",
"0x6a96b14c3e52125885a97a8aadb49b47229b9736863e43eb044d08bbef3a0789",
"0x12b20b9f2d8058b3b830c2b671bbd0eee80073722a388613fe7b119af4f30a4c",
"0x790b55817e627187421e5b18b277e2ad7699204a9f3d5a8cfd3fb99ba795e8f6",
"0x676d523af207cbb2afde75526ef43548b113fb9daa8d84b7d2705822df3fc376",
"0x22c00cbf8738d5175397ac044951ea2d01d645c87dd8bae1dd235d519594da4b",
"0x6d8b8bbc53c7fc3ff6be54b11dd68c422369763ce50aabef1c944d2bb12933f5"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

