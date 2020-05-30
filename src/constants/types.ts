// outsource dependencies

// local dependencies
//body: "Statically generated and server-rendered React applications have never been easier."
// id: 1
// title: "Pre-Rendering"
//
//
export interface IData {
    body: string
    id: number
    title: string
}

export interface IBaseApiResponse {
    readonly data: Array<IData>;
}

export interface DataPayload {
    data: Array<IData>;
    currentPage: number;
}

export enum TYPES {
    DATA = 'DATA',
    GET_DATA = 'GET_DATA',
}
