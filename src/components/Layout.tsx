import React from "react";
import { withRedux } from "../lib";

function Layout({ children }: any) {
    return <div>{children}</div>;
}

export default withRedux(Layout);
