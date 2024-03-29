import React, { useState, useEffect } from "react";
import { Card, Button, Form } from "react-bootstrap";
import { BsFillTrashFill } from "react-icons/bs";
import axios from "axios";

function Product(props) {
    // console.log(props.product);

    const [infosPizza, setInfosPizza] = useState([]);
    const [quantity, setQuantity] = useState(props.product.quantity);

    const updateProduct = (selectedQuantity) => {
        setQuantity(parseInt(selectedQuantity));
        let actualCart = JSON.parse(localStorage.getItem("cart"));
        const alreadyIn = actualCart.find(
            (product) =>
                product.name === props.product.name &&
                product.varient === props.product.varient
        );
        alreadyIn.quantity = parseInt(selectedQuantity);
        localStorage.setItem("cart", JSON.stringify(actualCart));
        props.trigger();
    };

    const deleteProduct = () => {
        let actualCart = JSON.parse(localStorage.getItem("cart"));
        const productToDelete = actualCart.find(
            (product) =>
                product.name === props.product.name &&
                product.varient === props.product.varient
        );
        const newCart = actualCart.filter(
            (product) => product !== productToDelete
        );
        localStorage.setItem("cart", JSON.stringify(newCart));
        let newLocalCart = JSON.parse(localStorage.getItem("cart"));

        props.handleClick(newLocalCart);
    };

    useEffect(() => {
        const getPizza = async () => {
            const getPizzaData = await axios(
                "http://localhost:8080/pizzas/" + props.product.name
            );
            setInfosPizza(getPizzaData.data);
            setQuantity(props.product.quantity);
        };
        getPizza();
    }, [props]);

    return (
        <>
            <Card className="flex-row w-100 mt-2">
                <Card.Img
                    className="w-25"
                    variant="left"
                    src={infosPizza.image}
                    style={{ objectFit: "cover" }}
                />
                <Card.Body className="w-75 d-lg-flex flex-lg-row justify-content-lg-between">
                    <Card.Title className="mb-4">
                        {props.product.name + " - " + props.product.varient}
                    </Card.Title>

                    <div className="d-flex gap-2 align-items-center align-items-lg-end justify-content-between flex-md-column">
                        <div className="d-flex gap-2">
                            <Form.Select
                                aria-label="Default select example"
                                value={quantity}
                                onChange={(e) => updateProduct(e.target.value)}
                            >
                                {[...Array(10).keys()].map((v, i) => (
                                    <option key={i} value={i + 1}>
                                        {i + 1}
                                    </option>
                                ))}
                            </Form.Select>
                            <Button
                                variant="danger"
                                onClick={(event) => deleteProduct(event)}
                            >
                                <BsFillTrashFill />
                            </Button>
                        </div>
                        <Card.Text className=" d-flex justify-content-end fs-5">
                            {infosPizza.prices
                                ? "Prix : " +
                                  infosPizza.prices[0][props.product.varient] *
                                      quantity +
                                  " €"
                                : ""}
                        </Card.Text>
                    </div>
                </Card.Body>
            </Card>
        </>
    );
}

export default Product;
