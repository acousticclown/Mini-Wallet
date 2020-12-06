const initPayButton = () => {
    $('.pay-button').click(() => {
      // paymentAddress is where funds will be send to
      const paymentAddress = document.getElementById('act').value;
      const amountEth = document.getElementById('amt').value;

      web3.eth.sendTransaction({
        to: paymentAddress,
        value: web3.toWei(amountEth, 'ether')
      }, (err, transactionId) => {
        if  (err) {
          console.log('Payment failed', err)
          $('#status').html('Status: Payment failed')
        } else {
          console.log('Payment successful', transactionId)
          $('#status').html('Status: Payment successful')
        }
      })
    })
  }

    