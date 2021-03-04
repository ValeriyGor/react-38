import './Products.scss'
import {useParams} from 'react-router-dom'

function ProductItem() {
  let { id } = useParams()
  return (
    <div className="ProductItem">
      Это страница продукта c ID: {id}
    </div>
  )
}

export default ProductItem