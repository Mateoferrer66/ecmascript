import fetch from "node-fetch";

const response = await fetch ('https://api.escuelajs.co/api/v1/products');
const products = await response.json();//await Espera la respuesta y si fue correcta valida la promesa en el servidor

export {products};