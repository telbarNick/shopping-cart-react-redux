import React from 'react'
import classes from './Loader.module.css'

const Loader = props => {
    let cls1 = [classes.circle, classes.circle1];
    let cls2 = [classes.circle, classes.circle2];
    let cls3 = [classes.circle, classes.circle3];
    let cls4 = [classes.circle, classes.circle4];
    let cls5 = [classes.circle, classes.circle5];

return (
    <div className={classes.container}>
        <div className={cls1.join(' ')}></div>
        <div className={cls2.join(' ')}></div>
        <div className={cls3.join(' ')}></div>
        <div className={cls4.join(' ')}></div>
        <div className={cls5.join(' ')}></div>
    </div>
    )
}

export default Loader