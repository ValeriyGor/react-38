function RequestsProduct (props){
  let {name, price, comment} = props.product
  let {isPayed} = props

  return (
    <div className="RequestsProduct">
      <h3>Инфо о товаре</h3>
      <p>Продукт: {name}</p>
      <p>Цена: {price}</p>
      <p>Комментарий: {comment}</p>
      <p>Оплачено: {isPayed ? 'Да' : 'Нет'}</p>
    </div>
  )
}

export default RequestsProduct