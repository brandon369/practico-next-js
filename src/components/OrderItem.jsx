import React, {useContext} from 'react';
import Image from "next/image";
import close from '../assets/icons/icon_close.png'
import AppContext from "../context/AppContext";
import styles from '@styles/OrderItem.module.scss'


const OrderItem = ({product}) => {
  const {removeFromCart} = useContext(AppContext)

  const handleRemove = (remove) => {
    removeFromCart(remove)
  }
  return (
    <div className={styles.OrderItem}>
      <figure>
        <img src={product?.images[0]} alt=""/>
      </figure>
      <p>{product?.title}</p>
      <p>${product?.price}</p>
      <Image src={close} alt="close" onClick={() => handleRemove(product)}/>
    </div>
  );
}

export default OrderItem;
