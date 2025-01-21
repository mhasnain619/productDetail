import React from 'react'
import styles from './Button.module.css'
const Button = ({ name, onClick }) => {
    return (
        <div>
            <button onClick={onClick} className={styles.buttonpo}>{name}</button>
        </div>
    )
}

export default Button
