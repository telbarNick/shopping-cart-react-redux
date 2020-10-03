import React from 'react'
import classes from './Products.module.css'
import {connect} from 'react-redux'
import {NavLink} from 'react-router-dom'
import Item from '../../components/Item/Item'
import Button from '../../components/UI/Button/Button' 



const Products = props => {

    return (
        <div className={classes.Products}>
            {
            props.state.products.map(item => {
                return (
                    <Item 
                        checkbox={true} 
                        selectedItems={props.state.selectedItems}
                        key={item._id}
                        id={item._id}
                        name={item.name}
                        date={item.date}
                        price={item.price}
                        quantity={item.quantity}
                        shouldAdditional={false}
                    />
                )
            })
            }
            <NavLink exact to='/cart'>
                <Button 
                    text="Buy"
                />
            </NavLink>
            
        </div>
    )
}

function mapStateToProps(state) {
    return {state: state}
  }

export default connect(mapStateToProps)(Products)