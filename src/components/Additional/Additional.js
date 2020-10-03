import React from 'react'
import classes from './Additional.module.css'
import {connect} from 'react-redux'
import {addAdditional, removeAdditional} from '../../redux/actions/actions'
import Checkbox from '../UI/Checkbox/Checkbox'
import Price from '../Item/ItemParts/Price/Price'
import DateNameWrapper from '../Item/ItemParts/DateNameWrapper/DateNameWrapper'

const Additional = props => {

    const isCheckedHandler = () => {
        let find = props.selectedAdditional.find(item => item._id === props.id)
        if (find) {
            return true
        } else return false
    }


    const addAdditionalHandler = event => {
        if (event) {
            props.onAddAdditional({additional: props.id, item: props.parentId})
        } else {
            props.onSubAdditional({additional: props.id, item: props.parentId})
        }
    }

    return (
        <div className={classes.Additional}>
            <Checkbox 
                isChecked={isCheckedHandler()}
                onChange={addAdditionalHandler}
            />
            <DateNameWrapper 
                name={props.name}
                date={props.date}
            />
            <Price 
                price={props.price}
            />
        </div>
    )
}

function mapDispatchToProps(dispatch) {
    return {
      onAddAdditional: id => dispatch(addAdditional(id)),
      onSubAdditional: id => dispatch(removeAdditional(id)),
    }
  }

export default connect(null, mapDispatchToProps)(Additional)