import React from 'react'
import {connect} from 'react-redux'
import {addToCart, removeFromCart, addQuantity, subQuantity} from '../../redux/actions/actions'
import classes from './Item.module.css'
import Checkbox from '../UI/Checkbox/Checkbox'
import Plus from '../UI/Quantity-buttons/Plus'
import Minus from '../UI/Quantity-buttons/Minus'
import Additional from '../Additional/Additional'
import Price from './ItemParts/Price/Price'
import DateNameWrapper from './ItemParts/DateNameWrapper/DateNameWrapper'

const Item = props => {

// Function that keeps checkboxes checked after switching the pages 
const isCheckedHandler = () => {
    let find = props.selectedItems.find(item => item._id === props.id)
    if (find) {
        return true
    } else return false
}
// Main handler that adds items to cart 
const isCheckbox = callback => {
        if (callback) {
            props.onAdd(props.id)
        } else {
            props.onSub(props.id)
        }
    }

const addQuantityHandler = () => {
        props.onAddQuantity(props.id)
    }

const subQuantityHandler = () => {
        props.onSubQuantity(props.id)
    }

    return (
        <div className={classes.ItemWrapper}>
            <div className={classes.Item}>
                {
                    props.checkbox
                    ? <Checkbox isChecked={isCheckedHandler()} onChange={isCheckbox} />
                    : null
                }

                <DateNameWrapper 
                    name={props.name}
                    date={props.date}
                />

                <div className={classes.Quantity}>
                    <div onClick={subQuantityHandler} className={classes.QuantityHandler}>
                        <Minus />
                    </div>
                        <span>
                            {props.quantity}
                        </span>
                    <div onClick={addQuantityHandler} className={classes.QuantityHandler}>
                        <Plus />
                    </div>
                </div>

                <Price 
                    price={props.price}
                />
        
            </div>
            {
                props.shouldAdditional
                ?   props.additional.length 
                    ?   props.additional.map(item => {
                        return (
                        <Additional 
                            parentId={props.id}
                            key={item._id}
                            date={item.date}
                            name={item.name}
                            price={item.price}
                            id={item._id}
                            selectedAdditional={props.selectedAdditional}
                        />
                        )
                    }) 
                    : null
                : null
            }
        </div>
    )
}

function mapDispatchToProps(dispatch) {
    return {
      onAdd: id => dispatch(addToCart(id)),
      onSub: id => dispatch(removeFromCart(id)),
      onAddQuantity: id => dispatch(addQuantity(id)),
      onSubQuantity: id => dispatch(subQuantity(id))
    }
  }


export default connect(null, mapDispatchToProps)(Item)