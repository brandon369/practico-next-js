import React, {useContext} from 'react';
import '../styles/ProductItem.scss';

import addToCartImage from "@icons/bt_add_to_cart.svg"
import AppContext from "../context/AppContext";

const ProductItem = ({product}) => {

  const {addToCart} = useContext(AppContext)

  // const [cart, setCart] = useState([]);
  //
  const handleCart = productAdd => {
    addToCart(productAdd)
  }


  return (
    <div className="ProductItem">
      <img src={product.images[0]} alt=""/>
      <div className="product-info">
        <div>
          <p>${product.price}</p>
          <p>{product.title}</p>
        </div>
        <figure onClick={() => handleCart(product)}>
          <img src={addToCartImage} alt=""/>
        </figure>
      </div>
    </div>
  );
}

export default ProductItem;
