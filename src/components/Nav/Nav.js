import React from 'react'
import classes from './Nav.module.css'
import {connect} from 'react-redux'


const Nav = props => {
    return (
        <nav className={classes.Nav}>
            <div className={classes.totalPrice}>
                ${props.totalPrice}
            </div>
        </nav>
    )
}

function mapStateToProps(state) {
    return {
        totalPrice: state.totalPrice
        }
  }

export default connect(mapStateToProps)(Nav)