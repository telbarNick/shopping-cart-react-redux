import React, {useState, useEffect} from 'react'
import classes from './Shopping-cart.module.css'
import {connect} from 'react-redux'
import {useHistory} from 'react-router-dom'
import {sendData} from '../../redux/actions/actions'
import Item from '../../components/Item/Item'
import Button from '../../components/UI/Button/Button'
import Loader from '../../components/UI/Loader/Loader'


const ShoppingCart = props => {

const [loader, setLoader] = useState(false)

const history = useHistory();
const autoRedirect = () => history.push('/confirm')
const navigate = () => {
    autoRedirect()
    props.onDataSent()
}

useEffect(() => {
    return () => setLoader(false)
}, [])

// Server immitation
const sendDataToServer = () => {
    setLoader(true)
    let data = {
        selectedItems: props.state.selectedItems,
        selectedAdditional: props.state.additional,
        totalPrice: props.state.totalPrice
    }
    console.log('data', data)
    setTimeout(() => navigate(), 2000) 
}

    return (
        <div className={classes.ShoppingCart}>
            {
            loader
            ? <Loader />
            : props.state.selectedItems.length
                ? props.state.selectedItems.map(item => {
                    return (
                        <Item
                            checkbox={false} 
                            key={item._id}
                            id={item._id}
                            name={item.name}
                            date={item.date}
                            price={item.price}
                            quantity={item.quantity}
                            shouldAdditional={true}
                            additional={item.additional}
                            selectedAdditional={props.state.additional}
                        />
                    )
                })
                : <h1 className={classes.Empty}>Cart is empty</h1>
            }
            {
                props.state.selectedItems.length
                ? <Button text="Confirm" onClick={sendDataToServer} />
                : null
            }
        </div>
    )
}

function mapStateToProps(state) {
    return {state: state}
  }

function mapDispatchToProps(dispatch) {
    return {
        onDataSent: () => dispatch(sendData())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart)