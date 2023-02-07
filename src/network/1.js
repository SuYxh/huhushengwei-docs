const axios = require('axios');

async function handlePsot() {
  // const res = await axios.post('http://127.0.0.1:7001', {data: '1'})
  const res = await axios.post('http://127.0.0.1:7001/api/login/account', {
    userName: 'isadmin',
    password: '123456'
  })
  console.log(res.data)
}

handlePsot()