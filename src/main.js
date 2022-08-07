const {Blockchain,Transaction} = require('./blockchain');
const EC = require('elliptic').ec;
const ec = new EC('secp256k1');

const myKey = ec.keyFromPrivate('4debe34e529c299b283bfba59ad5fab9393c1fd68769d9be1b1531e92b3b9f12');
const myWalletAddress = myKey.getPublic('hex');


let CyberCoin = new Blockchain();

const tx1 = new Transaction(myWalletAddress,'public key goes here',10);
tx1.signTransaction(myKey);
CyberCoin.addTransaction(tx1);

console.log('\n Starting the miner....');
CyberCoin.minePendingTransactions(myWalletAddress);

console.log('\n Balance of Amar is', CyberCoin.getBalanceofAddress(myWalletAddress));
