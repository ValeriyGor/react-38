import './Product.scss';
import { Link } from 'react-router-dom'

function Product(props) {
  let {product} = props
  return (
    <div className="Product">
      <div className="Product__img">
        <img src={product.imgSrc} alt=""/>
      </div>
      <div className="Product__title">{product.title}</div>
      <div className="Product__description">{product.description}</div>
      <div className="Product__price">{product.price}</div>
      <Link to={'/products/' + product.id} className="Product__button">Подробнее</Link>
    </div>
  );
}

export default Product;
