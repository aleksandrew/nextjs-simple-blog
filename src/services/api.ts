// outsource dependencies
import axios from 'axios';

// local dependencies
import { IBaseApiResponse } from '../constants/types';

const instance = axios.create({
    baseURL: 'https://simple-blog-api.crew.red',
});

export const getData = () => {
    return instance({
        method: 'get',
        url: '/posts',
    }).then((response) => response.data) as Promise<IBaseApiResponse>;
};
