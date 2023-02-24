import axios from "axios";

// Default setup
axios.defaults.headers.post["Content-Type"] =
    "application/x-www-form-urlencoded";
// response.data.headers['Content-Type'];
const axiosGlobal = axios.create({
    // baseURL: ' https://0095-84-199-109-84.eu.ngrok.io',
    headers: {
        Accept: "application/json",
        'Content-Type': 'multipart/form-data'
    },
});

axios.defaults.baseURL = "http://localhost:3001";

// Add new product to the list
export const addProduct = async (data) => {
    try {
        const response = await axios.post('/addProduct', data, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        console.log(response, 'response from axios');
        const resData = await response.data;
        console.log(resData, 'res data from axios');
    }
    catch (error) {
        console.log(error);
    }
};

// Delete products
export const deleteProducts = async (id) => {
    console.log(id, 'id from axios func');
    const {requestBody} = id;
    // data: { ids: id }
    try {
        const response = await axios.delete(`http://localhost:3001/productsList`, {
            headers: {
                'Content-Type': 'application/json'
            },
            data: requestBody
        });
        console.log(response.data, "DeleteResponse");
    } catch (err) {
        console.log(err, "DeleteError");
    }
};


export default axiosGlobal;
