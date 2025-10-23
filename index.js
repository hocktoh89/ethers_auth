const express = require('express')
const { ethers } = require("ethers");
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/provider', async (req, res) => {

    const provider = new ethers.providers.JsonRpcProvider();

    // The provider also allows signing transactions to
    // send ether and pay to change state within the blockchain.
    // For this, we need the account signer...
    const signer = provider.getSigner();
    console.log(".  signer ", signer);
    res.send('pro')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})