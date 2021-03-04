import React from 'react'
import './Requests.scss'
import RequestsProduct from "./RequestsProduct";
import RequestsCustomer from "./RequestsCustomer";

class Requests extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      status: 'В обработке',
      isPayed: false
    }
    this.cancelOrder = this.cancelOrder.bind(this)
    this.pay = this.pay.bind(this)
  }

  cancelOrder(){
    this.setState({status: 'Отменён'})
    console.log(this);
  }

  pay(){
    this.setState({isPayed: !this.state.isPayed})
  }

  takeToWork() {
    this.setState({status: 'В работе'})
    console.log(this);
  }

  render() {
    let {request} = this.props
    return (
      <div className='Requests'>
        <div className="Requests__status">{this.state.status}</div>
        <RequestsProduct product={request.product} isPayed={this.state.isPayed}/>
        <RequestsCustomer customer={request.customer}/>
        <div className="Requests__actions">
          <button type="button" onClick={this.pay}>Оплачено</button>
          <button type="button" onClick={() => this.takeToWork()}>Принять в работу</button>
          <button type="button" onClick={this.cancelOrder}>Отменить заказ</button>
        </div>
      </div>
    )
  }
}

export default Requests