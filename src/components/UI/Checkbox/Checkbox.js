import React from 'react'
import classes from './Checkbox.module.css'

const Checkbox = props => {
    return (
        <div className={classes.Checkbox}>
            <input 
                checked={props.isChecked} 
                onChange={ event => props.onChange(event.target.checked)} 
                type="checkbox"
            />
        </div>
    )
}

export default Checkbox