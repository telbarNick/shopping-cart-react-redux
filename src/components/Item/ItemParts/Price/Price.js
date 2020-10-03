import React from 'react'
import classes from './Price.module.css'

const Price = props => {
    return (
        <div className={classes.Price}>
            {props.price}
        </div>
    )
}
export default Price