require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'kidney arena oxygen food shoulder raise stick smile gloom dose army ghost'; 
let testAccounts = [
"0xbea01a9e89e8e1f85107705f7d9c4c109ca4269305de286d6f35976f03c80b4a",
"0x496200ac79745ba893a23af568b0e5977275af78d5cdd90fe1c8f8a48c97bdee",
"0x80878bb2838f0baaf891d7c522c558982badef01a187a486babe45df9927cb6f",
"0x2492bf047fc119eabe4d60d3cd0cc6216e07b92f32b88b3c164de458e551a896",
"0x27486eba83dd534dcd3c244d958cd481e9d2ac85742de1676daafffedc98c6da",
"0xa9953763bc0a69d93c78b93e539ef51c6f090862ccdd06fafa7dab0bd49ba1ea",
"0x272322d618e3af053c1d7349363a4829f085a98921eeb0901f71224e09b1803d",
"0x45a882d0bc5b6cf2344aec04a688fba57f6d1eb3a85d29db23ae7832be86e34d",
"0xd09c74d9eaf591d0771e5665706ebb11475054d6d1f01e63522952aa227fe6dd",
"0x4358ac8edfdda45a344420c15639e4867445822bebf7c7fa88d32edd0433ff15"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
