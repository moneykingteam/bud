var bitcoinjs = require('bitcoinjs-lib');

var privKey = process.env.BIP32_PRIV || 'xprv9xAGxd9os3Kh1AtiK49GYbT661A7pSK8uLJ8WJ83NyJifJcbHpE2CjqMXiqu6xXo21NJFXU8QQCX4iZqcw9LG2RoS5rcAGgNZ7pyxC3X78R';
var hdNode = bitcoinjs.HDNode.fromBase58(privKey);

var count = process.env.GENERATE_ADDRESSES ? parseInt(process.env.GENERATE_ADDRESSES) : 200; // how many addresses to watch


var rescan = 'false';

for (var i = 1; i <= count; ++i) {
	console.log('bitcoin-cli -datadir=/mnt/volume-blr1-01-part1/.bitcoin importprivkey ' + hdNode.derive(i).keyPair.toWIF() + " '' " + rescan);
//  console.log('bitcoin-cli --rpcuser=mydo --rpcpassword=mydo1986 importprivkey ' +  hdNode.derive(i).keyPair.toWIF() + " '' " + rescan)
}
