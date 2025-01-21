import React from "react";
import PropTypes from "prop-types";
import Button from "../Button/Button";
import styles from "./Card.module.css";

const Card = ({ category, price, imgSrc, title, onButtonClick }) => {
  return (
    <div className={styles.divContainer}>
      <div className={styles.imgDiv}>
        <img className={styles.img} src={imgSrc} alt={title} />
      </div>
      <p style={{ marginTop: "10px", marginBottom: '10px' }}>{title}</p>
      {/* <div className={styles.priceAndCategory}>
        <h4>${price}</h4>
        <h4>{category}</h4>
      </div> */}
      <div>
        <Button onClick={onButtonClick} name="Buy Now" />
      </div>
    </div>
  );
};

// Define PropTypes for type checking
Card.propTypes = {
  counts: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  category: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  imgSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
};

export default Card;
