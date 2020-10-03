import React from 'react'
import classes from './DateNameWrapper.module.css'

const DateNameWrapper = props => {
    return (
        <div className={classes.DateNameWrapper}>
            <div className={classes.Name}>
                <span>name: &nbsp;</span>
                <span>{props.name}</span>
            </div>
            <div className={classes.Date}>
                {props.date}
            </div>
        </div>
    )
}

export default DateNameWrapper