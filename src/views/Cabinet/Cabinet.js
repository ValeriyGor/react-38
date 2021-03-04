import './Cabinet.scss';
import Requests from "../../components/Cabinet/Requests/Requests";

function Cabinet() {
  let requests = [
    {
      product: {
        name: 'iPhone',
        price: '1000$',
        comment: 'only black',
      },
      customer: {
        firstName: 'Valeriy',
        lastName: 'Gor',
        isRegister: false
      }
    },
    {
      product: {
        name: 'Samsung',
        price: '1000$',
        comment: 'only white',
      },
      customer: {
        firstName: 'Valeriy',
        lastName: 'Gor',
        isRegister: true
      }
    }
  ]
  return (
    <div className="Cabinet">
      <h1>Кабинет пользователя!!!</h1>
      {requests.map(request => <Requests request={request}/>)}
    </div>
  );
}

export default Cabinet;
