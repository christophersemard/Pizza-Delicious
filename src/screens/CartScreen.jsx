import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button, Alert } from "react-bootstrap";
import Product from "../components/Product";
import { LinkContainer } from "react-router-bootstrap";
import axios from "axios";

const Cart = () => {
    const [infosPizzas, setInfosPizzas] = useState([]);
    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState(0);
    const [bidon, setBidon] = useState(0);

    const handleClick = (newLocalCart) => {
        setCart(newLocalCart);
    };
    const trigger = () => {
        setBidon(bidon + 1);
    };

    useEffect(() => {
        let actualCart = JSON.parse(localStorage.getItem("cart"));
        setCart(actualCart);
    }, []);

    useEffect(() => {
        const getPizza = async () => {
            const getPizzaData = await axios("http://localhost:8080/pizzas/");
            setInfosPizzas(getPizzaData.data);
            setBidon(bidon + 1);
        };
        getPizza();
    }, [cart]);

    useEffect(() => {
        let actualCart = JSON.parse(localStorage.getItem("cart"));
        let totalAPayer = 0;
        if (infosPizzas.length > 0) {
            for (const product of actualCart) {
                const productDatas = infosPizzas.find(
                    (pizza) => pizza.name == product.name
                );
                totalAPayer +=
                    productDatas.prices[0][product.varient] *
                    parseInt(product.quantity);
            }
            setTotal(totalAPayer);
        }
    }, [bidon]);

    return (
        <>
            <Container style={{ marginTop: "50px", marginBottom: "50px" }}>
                <h1>Panier</h1>
                {cart.length > 0 ? (
                    <>
                        <Row>
                            {cart.map((product, i) => (
                                <Product
                                    key={i}
                                    className="mt-2"
                                    handleClick={handleClick}
                                    trigger={trigger}
                                    product={product}
                                />
                            ))}
                        </Row>
                        <Row className="display-flex">
                            <Col className="mt-4 d-flex align-items-center justify-content-end gap-4">
                                <h3 className="fw-bold mb-0">
                                    Total à payer : {total} €
                                </h3>
                                <LinkContainer to="/order">
                                    <Button className="bg-primary text-light ">
                                        Commander
                                    </Button>
                                </LinkContainer>
                            </Col>
                        </Row>
                    </>
                ) : (
                    <Alert
                        variant="primary"
                        className="text-center"
                        style={{ marginTop: "20px" }}
                    >
                        Votre panier est vide
                    </Alert>
                )}
            </Container>
        </>
    );
};

export default Cart;
