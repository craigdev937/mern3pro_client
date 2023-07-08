import React from "react";
import { createBrowserRouter, createRoutesFromElements, 
    Route, RouterProvider } from "react-router-dom";
import { HomeScreen } from "../screens/HomeScreen";

const Router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<HomeScreen />}>
            <Route index={true} path="/" element={<HomeScreen />} />
        </Route>
    )
);

export const Main = () => {
    return (
        <React.Fragment>
            <RouterProvider router={Router} />
        </React.Fragment>
    );
};


