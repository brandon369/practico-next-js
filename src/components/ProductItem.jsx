import React, {useContext} from 'react';
import addToCartImage from "@icons/bt_add_to_cart.svg"
import AppContext from "../context/AppContext";
import Image from "next/image";
import styles from '../styles/ProductItem.module.scss'


const ProductItem = ({product}) => {

  const {addToCart} = useContext(AppContext)

  // const [cart, setCart] = useState([]);
  //
  const handleCart = productAdd => {
    addToCart(productAdd)
  }


  return (
    <div className={styles.ProductItem}>
      <Image src={product.images[0]} alt="" width={240} height={240}/>
      <div className={styles['product-info']}>
        <div>
          <p>${product.price}</p>
          <p>{product.title}</p>
        </div>
        <figure onClick={() => handleCart(product)}>
          <Image src={addToCartImage} alt="" width={50} height={50}/>
        </figure>
      </div>
    </div>
  );
}

export default ProductItem;
