import React from 'react'
import {useHistory} from 'react-router-dom'
import classes from './Confirm.module.css'
import Ellipse from './Ellipse/Ellipse'
import CheckMark from './CheckMark/CheckMark'

const Confirm = props => {

const history = useHistory();
const autoRedirect = () => history.push('/');

setTimeout(() => autoRedirect(), 2000)

    return (
        <div className={classes.Confirm}>
            <div className={classes.Wrapper}>
                <Ellipse />
                <CheckMark />
            </div>
            <h1 className={classes.Done}>Done</h1>
        </div>
    )
}

export default Confirm