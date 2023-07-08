import React from "react";
import { Row, Col } from "react-bootstrap";
import { APISlice } from "../global/APISlice";
import { Product } from "../components/Product";

export const HomeScreen = () => {
    const { error, isLoading, data } = 
        APISlice.useGetProductsQuery();
    console.log(data);

    if (error) {
        if ("status" in error) {
            const errMSG = "error" in error ?
                error.error :
                JSON.stringify(error.data);
            return <h1>Error: {errMSG}</h1>
        } else {
            return <h1>Error: {error.message}</h1>
        }
    };

    if (isLoading) return <h1>Loading...</h1>

    return (
        <React.Fragment>
            <h1>Latest Products</h1>
            <Row>
                {data.map((product) => (
                    <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                        <Product product={product}  />
                    </Col>
                ))}
            </Row>
        </React.Fragment>
    );
};





