import React, { Component } from 'react'; 

import Auxiliary from '../../../hoc/Auxiliary/Auxiliary';
import Button from '../../UI/Button/Button';

class OrderSummary extends Component{

    // This could be the Functional component, doesn't have to be a Class-based Component.

    componentWillUpdate(){
        console.log('[OrderSummary] WillUpdate');        
    }

    render(){

        const ingredientsSummary = Object.keys(this.props.ingredients)
        .map(igKey => {
            return (
                <li key={igKey}>
                    <span style={{textTransform: 'capitalize'}}>{igKey}</span>: {this.props.ingredients[igKey]}
                </li>
            );
        });

        return (
            <Auxiliary>
                <h3>Your Order</h3>
                <p>A Delicious Burger with following Ingredients...!</p>
                <ul>
                    {ingredientsSummary}
                </ul>
                <p><strong>Total Price: {this.props.price}</strong></p>
                <p>Continue to Checkout...?</p>
                <Button btnType="Danger" clicked={this.props.purchaseCancelled}>CANCEL</Button>
                <Button btnType="Success" clicked={this.props.purchaseContinued}>CONTINUE</Button>
            </Auxiliary>            
        );
    }
} 

export default OrderSummary;