import axios from "axios";

const instance = axios.create({
  baseURL: 'https://burger-builder-6a382-default-rtdb.europe-west1.firebasedatabase.app/'
});

export default instance;