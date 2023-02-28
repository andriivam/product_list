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

axios.defaults.baseURL = "https://product-list-backend.herokuapp.com/";

// Add new product to the list
export const addProduct = async (data) => {
    try {
        const response = await axios.post('/addProduct', data, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const resData = await response.data;
        return resData;
    }
    catch (error) {
        console.log(error);
    }
};

// Delete products
export const deleteProducts = async (id) => {

    console.log(id, 'id from axios func');
    const requestBody = { ids: id };
    console.log(requestBody, 'requestBody')
    try {
        const response = await axios.delete(`/productsList`, {
            // headers: {
            //     'Content-Type': 'application/json'
            // },
            data: { id }
        });
        console.log(response.data, "DeleteResponse");
    } catch (err) {
        console.log(err, "DeleteError");
    }
};


export default axiosGlobal;
