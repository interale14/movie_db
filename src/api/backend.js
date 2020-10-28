import axios from "axios";

//Crear una instancia de conexion
const instance = axios.create({
    baseURL: processColor.env.API
});

export default instance;