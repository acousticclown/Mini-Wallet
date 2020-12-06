// Common Script to check for a decentralized browser environment and pay
// var act = document.getElementById('act').value;
// var amt = document.getElementById('amt').value;

window.addEventListener('load', async () => {
    if (window.ethereum) {
      window.web3 = new Web3(ethereum);
      try {
        await ethereum.enable();
        initPayButton()
      } catch (err) {
        $('#status').html('Status: User denied account access', err)
      }
    } 
    else if (window.web3) {
      window.web3 = new Web3(web3.currentProvider)
      initPayButton()
    } else {
      $('#status').html('Status: No Metamask (or other Web3 Provider) installed')
    }

    var account = web3.currentProvider.selectedAddress
      document.getElementById('address').innerHTML = `Your Account: ${account}`

  })