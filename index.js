const express = require('express');
const path = require('path');
const app = require('express')();
const http = require('http').Server(app);
const port = process.env.PORT || 3000;
const api = require('etherscan-api').init('GIK1W1GEVUIKAQPKD1YBP2J7RQ3DWDUKEX','ropsten', 3000);

app.use(express.static(path.join(__dirname, './public/')));
app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

http.listen(port, function () {
    console.log(`visit http://localhost:${port}`);
});

const account = '0xC2F32842D33C5274467fBCdaF68061eC86EeDaF2'
const balance = api.account.balance(account);

app.get('/getbal', function(req, res){
    balance.then(function(balanceData){
        res.send(balanceData); 
        } )
})
