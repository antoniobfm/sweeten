import Axios from "axios";

let urls = {
    test: `https://api.copyfunnels.app`,
    development: 'http://localhost:3333',
    production: 'https://api.copyfunnels.app'
}
const api = Axios.create({
    baseURL: urls[process.env.NODE_ENV],
    headers: {
        'Content-Type': 'application/json'
		},
    withCredentials: true,
});

export default api;
