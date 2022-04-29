import axios from "axios";
const url = process.env.BASE_URL || 'http://localhost/pixel-mutation/graphql';

const request = axios.create({
    baseURL: url,
  });

const methods = {
    get:request.get,
    post:request.post,
    put:request.put,
    put:request.put,
} 

export default methods;
