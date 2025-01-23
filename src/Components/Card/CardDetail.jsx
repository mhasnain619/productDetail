import React from 'react'
import { useParams } from 'react-router-dom'
import { Data } from '../../data'
import styles from "./Card.module.css";
import './CardDetail.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Form } from 'react-bootstrap';
import { FaStar } from 'react-icons/fa';
import Button from "../Button/Button";



const CardDetail = () => {
    let { id } = useParams()
    let details = Data.find(e => e.id == id)
    return (
        <>
            <Container fluid className="my-5">
                <Row>
                    <Col style={{ display: 'flex', justifyContent: 'center', }} md={6} className="text-center">
                        <div style={{ height: '500px', width: '500px' }}>
                            <img
                                src={details.image}
                                alt="Product"
                                style={{
                                    height: '100%',
                                    width: '100%',
                                    objectFit: 'contain', // Adjust to 'cover', 'fill', or 'contain' as needed
                                }}
                                className="img-fluid"
                            />
                        </div>
                    </Col>

                    <Col md={6} className="px-4">
                        <div className='cardDetail'>
                            <h3>{details.title}</h3>
                            <div className={styles.stars}>
                                {[...Array(5)].map((_, i) => (
                                    <FaStar
                                        key={i}
                                        style={{ fontSize: '20px', color: i < Math.floor(details.rating.rate) ? "#EABE12" : "#ccc" }}
                                    />
                                ))}
                                <div className="mt-2">
                                    <span>{details.rating.count} reviews</span>
                                </div>
                            </div>
                            <div>
                                <span className="text-danger fs-4 fw-bold">${details.price}</span>
                            </div>
                            <hr />
                            <div className="mt-4">
                                <span>
                                    <strong>Color:</strong>
                                </span>
                                <div>

                                    {["#000", "#FFF", "#BEE0A9", "#FFB6C1", "#34495E"].map(
                                        (color, index) => (
                                            <span
                                                key={index}
                                                style={{
                                                    background: color,
                                                    display: "inline-block",
                                                    width: "30px",
                                                    height: "30px",
                                                    borderRadius: "50%",
                                                    border: "1px solid #ccc",
                                                    margin: "0 5px",
                                                    cursor: "pointer",
                                                }}
                                            ></span>
                                        )
                                    )}
                                </div>
                            </div>
                            <hr />
                            <div className="mt-4">
                                <span>
                                    <strong>Size:</strong>
                                </span>
                                <div className="d-flex">
                                    {["XXS", "XS", "S", "M", "L", "XL"].map((size, index) => (
                                        <button className='sizeButton'
                                            key={index}
                                        >
                                            {size}
                                        </button>
                                    ))}
                                </div>
                            </div>
                            <hr />
                            <div className="mt-4 d-flex align-items-center">
                                <span>
                                    <strong>Quantity : </strong>
                                </span>
                                <Form.Select style={{ marginLeft: '10px', width: "100px", marginRight: "15px" }}>
                                    {[1, 2, 3, 4, 5].map((qty) => (
                                        <option key={qty} value={qty}>
                                            {qty}
                                        </option>
                                    ))}
                                </Form.Select>
                            </div>
                            <div className="mt-3 addtoCartBtn">
                                <Button className='mb-2' name='Add to Cart' />
                                {/* <Button name='Find in Store' /> */}

                                {/* <Button variant="danger" className="me-3">
                                    ADD TO CART
                                </Button>
                                <Button variant="secondary">FIND IN STORE</Button> */}
                            </div>

                            {/* Product Details */}
                            <div className="mt-3">
                                <span>
                                    <strong>Description:</strong>
                                </span>
                                <h6>{details.description}</h6>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>

        </>
    )
}

export default CardDetail
