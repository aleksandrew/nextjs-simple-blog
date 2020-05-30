import React from "react";
import { Provider } from "react-redux";
import { initializeStore } from "../store";
import App from "next/app";

export const withRedux = (PageComponent: any) => {
    const WithRedux = ({ initialReduxState, ...props }: any) => {
        const store = initializeClientSideStore(initialReduxState);
        return (
            <Provider store={store}>
                <PageComponent {...props} />
            </Provider>
        );
    };

    if (process.env.NODE_ENV !== "production") {
        const isAppHoc =
            PageComponent === App || PageComponent.prototype instanceof App;
        if (isAppHoc) {
            throw new Error("The withRedux HOC only works with PageComponents");
        }
    }

    if (process.env.NODE_ENV !== "production") {
        const displayName =
            PageComponent.displayName || PageComponent.name || "Component";

        WithRedux.displayName = `withRedux(${displayName})`;
    }

    return WithRedux;
};

let reduxStore: any;
const getOrInitializeStore: any = (initialState: any) => {
    if (typeof window === "undefined") {
        return initializeStore(initialState);
    }

    if (!reduxStore) {
        reduxStore = initializeStore(initialState);
    }

    return reduxStore;
};

export const initializeServerSideStore = (initialState: any) => {
    return initializeStore(initialState)
}

export const initializeClientSideStore = (initialState: any) => {
    if (!reduxStore) {
        reduxStore = initializeStore(initialState)
    }
    return reduxStore
}