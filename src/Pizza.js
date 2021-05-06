import React from 'react';
import styled from 'styled-components';
import PizzaImage from './pizza.png';

const Image = styled.img`
    width:350px;
    height:350px;
`;

const Counter = styled.h1`
    font-size:82px;
    background-color:#f4eee8;
    border-radius:20px;
    color:#687980;
`;

const OrderButton = styled.button`
    font-size:30px;
    padding:10px;
    background-color:#29bb89;
    border-radius:10px;
    margin:10px;
    width:250px;
`;

const CancelButton = styled.button`
    font-size:30px;
    padding:10px;
    background-color:#29bb89;   
    border-radius:10px;
    margin:10px;
    width:250px;
`;

class Pizza extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            Count: 0,
            Message: ''
        }
    }
    takeOrder() {
        this.setState({
            Count: this.state.Count + 1,
            Message: "",
        })
    }

    cancelOrder() {
        if (this.state.Count > 0) {
            this.setState({
                Count: this.state.Count - 1
               
            })
        } else {
            this.setState({
                Message: "Please Place the order"
            })
        }

    }


    render() {
        return <div style={{ alignItems: "center" }}>
            <Image src={PizzaImage} />
            <h1>Pizza Order Counter</h1>
            <Counter>{this.state.Count}</Counter>
            <p>{this.state.Message}</p>
            <OrderButton onClick={() => this.takeOrder()}>Place Order</OrderButton>
            <br />
            <CancelButton onClick={() => this.cancelOrder()}>Cancel Order</CancelButton>

        </div>
    }
}

export default Pizza;