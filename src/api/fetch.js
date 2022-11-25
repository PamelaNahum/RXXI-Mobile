import axios from 'axios';
const baseUrl = 'http://192.168.1.87:8081/api/obtener/productos';

export function  FetchProducto() {
  axios.get('http://192.168.1.87:8081/api/obtener/productos')
			.then(res => {console.log(res.data); return res.data })
			.catch(err => console.log('err', err));
    //const inte = axios.get('http://192.168.1.87:8081/api/obtener/productos')
    //console.log(res.data)
    //return inte.data
  }
