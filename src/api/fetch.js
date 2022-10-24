import axios from 'axios';
const baseUrl = 'https://192.168.1.91:8081/api/obtener/productos';

export function  FetchProducto() {
    const inte = axios.get('http://192.168.1.91:8081/api/obtener/productos')
    console.log(inte)
    return inte
  }
