import axios from 'axios';

const URL = 'http://localhost:5000';

export const GetRandom = (arr, n) => {
    var result = new Array(n),
        len = arr.length,
        taken = new Array(len);
    if (n > len)
        throw new RangeError("getRandom: more elements taken than available");
    while (n--) {
        var x = Math.floor(Math.random() * len);
        result[n] = arr[x in taken ? taken[x] : x];
        taken[x] = --len in taken ? taken[len] : len;
    }
    return result;
}

export const fetchProducts = () => {
    return axios.get(`${URL}/api/v1/products`)
        // .then(function (response) {
        //     return response.data;
        // })
        // .catch(function (error) {
        //     console.log(error);
        //     return error;
        // })
};

export const fetchRecommend = () => {
    return axios.get(`${URL}/api/v1/products`)
        .then(function (response) {
            return GetRandom(response.data, 6);
        })
        .catch(function (error) {
            console.log(error);
            return error;
        })
};

export const fetchProductDetail = (slug) => {
    return axios.get(`${URL}/api/v1/products/${slug}`)
        .then(function (response) {
            return response.data;
        })
        .catch(function (error) {
            console.log(error);
            return error;
        })
};

export const fetchUsers = () => {
    return axios.get(`${URL}/api/v1/users`);
        // .then(function (response) {
        //     return response.data;
        // })
        // .catch(console.error());
};

export const createUser = function(data) {
    axios.post(`${URL}/api/v1/users/create`, data)
        .then((response) => {
            //console.log(response);
        })
        .catch(console.error());
}