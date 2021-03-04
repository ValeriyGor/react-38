function RequestsCustomer(props){

  let {firstName, lastName, isRegister} = props.customer

  return (
    <div className="RequestsCustomer">
      <h3>Инфо о покупателе</h3>
      <p>Имя: {firstName}</p>
      <p>Фамилия: {lastName}</p>
      <p>Регистрация: {isRegister ? 'Да' : 'Нет'}</p>
    </div>
  )
}

export default RequestsCustomer