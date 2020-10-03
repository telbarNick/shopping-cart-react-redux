import React from 'react'
import Nav from '../../components/Nav/Nav'
import classes from './Layout.module.css'

const Layout = props => {

    return (
        <div className={classes.Layout}>
            <Nav />
            <main>
                {props.children}
            </main>
        </div>
    )
}

export default Layout