const blnc = document.getElementById('blnc')
const getbtn = document.getElementById('check')


const getBalance = () => {
axios.get('http://localhost:3000/getbal').then(response =>{

    let balance = "Your Balance is " + ((response.data.result)/10000000000)/100000000 + " Ether"

    blnc.innerHTML= balance
})
}

getbtn.addEventListener('click', getBalance)