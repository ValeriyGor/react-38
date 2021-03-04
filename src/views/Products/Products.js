import './Products.scss';
import Product from "../../components/Product/Product";

function Products() {
  let phones = [
    {
      id: 0,
      title: 'iPhone 12',
      price: '$1000',
      imgSrc: 'https://www.ixbt.com/img/n1/news/2020/11/6/iPhone-12-Zach-Griff-8_large.jpeg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam deserunt, laborum nihil obcaecati officia quibusdam veritatis. Commodi ipsum iste iure laudantium quaerat quisquam, reiciendis veniam? Aliquam id placeat sequi sit.'
    },
    {
      id: 1,
      title: 'iPhone 8',
      price: '$1000',
      imgSrc: 'https://www.ixbt.com/img/n1/news/2020/11/6/iPhone-12-Zach-Griff-8_large.jpeg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam deserunt, laborum nihil obcaecati officia quibusdam veritatis. Commodi ipsum iste iure laudantium quaerat quisquam, reiciendis veniam? Aliquam id placeat sequi sit.'
    },
    {
      id: 2,
      title: 'iPhone 10',
      price: '$1000',
      imgSrc: 'https://www.ixbt.com/img/n1/news/2020/11/6/iPhone-12-Zach-Griff-8_large.jpeg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam deserunt, laborum nihil obcaecati officia quibusdam veritatis. Commodi ipsum iste iure laudantium quaerat quisquam, reiciendis veniam? Aliquam id placeat sequi sit.'
    },
    {
      id: 3,
      title: 'Remi Note 4',
      price: '$1000',
      imgSrc: 'https://www.ixbt.com/img/n1/news/2020/11/6/iPhone-12-Zach-Griff-8_large.jpeg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam deserunt, laborum nihil obcaecati officia quibusdam veritatis. Commodi ipsum iste iure laudantium quaerat quisquam, reiciendis veniam? Aliquam id placeat sequi sit.'
    },
    {
      id: 4,
      title: 'iPhone 12',
      price: '$1000',
      imgSrc: 'https://www.ixbt.com/img/n1/news/2020/11/6/iPhone-12-Zach-Griff-8_large.jpeg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam deserunt, laborum nihil obcaecati officia quibusdam veritatis. Commodi ipsum iste iure laudantium quaerat quisquam, reiciendis veniam? Aliquam id placeat sequi sit.'
    },
    {
      id: 5,
      title: 'Samsung s20',
      price: '$1000',
      imgSrc: 'https://www.ixbt.com/img/n1/news/2020/11/6/iPhone-12-Zach-Griff-8_large.jpeg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam deserunt, laborum nihil obcaecati officia quibusdam veritatis. Commodi ipsum iste iure laudantium quaerat quisquam, reiciendis veniam? Aliquam id placeat sequi sit.'
    },
    {
      id: 6,
      title: 'Xiaomi mi 10',
      price: '$1000',
      imgSrc: 'https://www.ixbt.com/img/n1/news/2020/11/6/iPhone-12-Zach-Griff-8_large.jpeg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam deserunt, laborum nihil obcaecati officia quibusdam veritatis. Commodi ipsum iste iure laudantium quaerat quisquam, reiciendis veniam? Aliquam id placeat sequi sit.'
    },
  ]
  let phoneItems = phones.map((phone, index) => {
    return <Product product={phone} key={index}/>
  })
  return (
    <div className="Products">
      <h1>Это страница продуктов!!!</h1>
      <div className="products-container">
        {phoneItems}
      </div>
    </div>
  );
}

export default Products;
