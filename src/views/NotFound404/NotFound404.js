import './NotFound404.scss';
import {Link} from "react-router-dom"

function NotFound404() {
  return (
    <div className="NotFound404">
      <h1>404</h1>
      <p>Страница не найдена <Link to='/'>Вернуться на главную</Link></p>
    </div>
  );
}

export default NotFound404;
