import React from "react";
import Card from "./Card";
import { Data } from "../../data";
import { useNavigate } from "react-router-dom";

const CardList = () => {
    let navigate = useNavigate()
    const handleDatail = (id) => {
        navigate(`/detail/${id}`)
    }

    return (
        <div style={{ textAlign: 'center' }}>
            {Data ? (
                Data.map((item, index) => (
                    <Card
                        onButtonClick={() => handleDatail(item.id)}
                        key={index}
                        counts={item.rating.count}
                        rating={item.rating.rate}
                        category={item.category}
                        price={item.price}
                        imgSrc={item.image}
                        title={item.title}
                        desc={item.description}
                    />
                ))
            ) : (
                <h3>Data Not Found...!</h3>
            )}
        </div>
    );
};

export default CardList;
