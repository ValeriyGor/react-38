import {useParams} from 'react-router-dom'

function Review() {
  console.log(useParams())
  let {productId, reviewId} = useParams();
  return (
    <div className='Review'>
      <h1>Это комментарий продукта c ID: {productId}, reviewID: {reviewId} </h1>
    </div>
  )
}

export default Review