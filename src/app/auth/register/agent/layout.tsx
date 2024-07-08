'use client'
import React, { Suspense } from "react";

const Layout = ({ children }: any) => {

    return (
        <Suspense>
            {children}
        </Suspense>
    );
};

export default Layout;