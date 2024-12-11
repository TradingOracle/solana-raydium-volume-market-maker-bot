const RaydiumSwap = require('./RaydiumSwap');
const { Transaction, VersionedTransaction, Connection, PublicKey } = require('@solana/web3.js');
const dotenv = require('dotenv')
dotenv.config();
const { encode } = require("bs58");
const fetchPoolKeys = require('./poolkeys');
const axios = require('axios');

const getTokenBalance = async (connection, walletAddress, tokenMintAddress) => {
  const tokenAccounts = await connection.getParsedTokenAccountsByOwner(
    new PublicKey(walletAddress),
    { mint: new PublicKey(tokenMintAddress) }
  );

  if (tokenAccounts.value.length === 0) {
    return 0;
  }

  return parseFloat(tokenAccounts.value[0].account.data.parsed.info.tokenAmount.uiAmount);
};

const swap = async (raydiumSwap, swapConfig, poolAddress, amount) => {
  // please contact the admins via Telegram for more information: https://t.me/mytradingoracle
};

const swapConfigBuy = {

  executeSwap: true, // Send tx when true, simulate tx when false
  useVersionedTransaction: true,
  tokenAAddress: "So11111111111111111111111111111111111111112",
  tokenBAddress: "FkM8t33scbVf4z3UY58RZyhGci6W24HmSCUi98FSpump",
  maxLamports: 1500000, // Micro lamports for priority fee
  direction: "in", // Swap direction: 'in' or 'out'
  liquidityFile: "trimmed_mainnet.json",
  maxRetries: 20

};

const swapConfigSell = {

  executeSwap: true, // Send tx when true, simulate tx when false
  useVersionedTransaction: true,
  tokenAAddress: "FkM8t33scbVf4z3UY58RZyhGci6W24HmSCUi98FSpump",
  tokenBAddress: "So11111111111111111111111111111111111111112",
  maxLamports: 1500000, // Micro lamports for priority fee
  direction: "out", // Swap direction: 'in' or 'out'
  liquidityFile: "trimmed_mainnet.json",
  maxRetries: 20

};

(async () => {

let solToTrade = 0.01;
let tokensToTrade = 0.01;

 const config = {
    method: 'get',
    maxBodyLength: Infinity,
    url: `https://api.dexscreener.com/latest/dex/tokens/${swapConfigBuy.tokenBAddress}`,
    headers: {
        'Accept': 'application/json'
      }
  };

const response = await axios.request(config, { timeout: 300 });
 const priceSol = response.data.pairs[0].priceNative;

console.log("Price in SOL: " + priceSol);

// please contact the admins via Telegram for more information: https://t.me/mytradingoracle

swap(raydiumSwap, swapConfigBuy, "FjBYgE4uRwNUGmQ65CXYtErXq8o96JCc1aigaBjNwQJm", solToTrade);
swap(raydiumSwap, swapConfigSell, "FjBYgE4uRwNUGmQ65CXYtErXq8o96JCc1aigaBjNwQJm", balance);
})();
