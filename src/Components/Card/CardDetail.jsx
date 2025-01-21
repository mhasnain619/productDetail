import React from 'react'
import { useParams } from 'react-router-dom'
import { Data } from '../../data'
import styles from "./Card.module.css";
import './CardDetail.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import { FaStar } from 'react-icons/fa';


const CardDetail = () => {
    let { id } = useParams()
    let details = Data.find(e => e.id == id)
    return (
        <Container fluid className="my-5">
            <Row>
                <Col style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} md={6} className="text-center">
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
                                    style={{ color: i < Math.floor(details.rating.rate) ? "#EABE12" : "#ccc" }}
                                />
                            ))}
                            {/* <span style={{ marginTop: '30px' }}>{details.rating.count}</span> */}
                        </div>
                        <div>
                            <span className="text-danger fs-4 fw-bold">${details.price}</span>
                        </div>
                        <hr />
                        <div className="mt-4">
                            <span>
                                <strong>Color:</strong> 51 GREEN
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
                                    <Button
                                        key={index}
                                        variant="outline-secondary"
                                        size="sm"
                                        className="me-2"
                                    >
                                        {size}
                                    </Button>
                                ))}
                            </div>
                        </div>

                        <div className="mt-4 d-flex align-items-center">
                            <Form.Select style={{ width: "100px", marginRight: "15px" }}>
                                {[1, 2, 3, 4, 5].map((qty) => (
                                    <option key={qty} value={qty}>
                                        {qty}
                                    </option>
                                ))}
                            </Form.Select>
                            <Button variant="danger" className="me-3">
                                ADD TO CART
                            </Button>
                            <Button variant="secondary">FIND IN STORE</Button>
                        </div>

                        {/* Product Details */}
                        <div className="mt-5">
                            <Button variant="link">Product Detail</Button>
                            <Button variant="link">Materials & Care</Button>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default CardDetail
