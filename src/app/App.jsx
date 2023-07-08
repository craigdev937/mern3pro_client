import React from "react";
import "./App.css";
import "../assets/styles/bootstrap.custom.css"
import "../assets/styles/index.css";
import { Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import { Reducer } from "../global/RootReducer";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Container } from "react-bootstrap";
import { Main } from "../routes/Main";

export const App = () => {
    return (
        <Provider store={Reducer}>
            <React.Fragment>
                <Header />
                <main className="py-3">
                    <Container>
                        <Main />
                    </Container>
                </main>
                <Footer />
            </React.Fragment>
            <Outlet />
        </Provider>
    );
};



