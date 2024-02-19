// import axios from "axios";

// const api = axios.create({
//     baseURL: 'https://f163-223-123-2-206.ngrok-free.app'
// })
// export default api;

import { create } from "apisauce";

let api = create({
    baseURL: 'https://notepad-project-663dc-default-rtdb.firebaseio.com/'
})

export default api;