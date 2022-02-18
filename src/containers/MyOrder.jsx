import React, {useContext} from 'react';
import OrderItem from '../components/OrderItem';
// import '../styles/MyOrder.module.scss';


import flechita from '../assets/icons/flechita.svg'
import AppContext from "../context/AppContext";

import styles from '../styles/MyOrder.module.scss'


const MyOrder = () => {
  const {state} = useContext(AppContext)

  const sumTotal = () => {
    const total = state.cart.reduce((a,cv) => a +cv.price, 0)
    return total
  }


  return (
    <aside className={styles.MyOrder}>
      <div className={styles['title-container']}>
        <img src={flechita} alt="arrow"/>
        <p className="title">My order</p>
      </div>
      <div className={styles['my-order-content']}>
        {state.cart.map(product => (
          <OrderItem product={product} key={`productCart-${product.id}`}/>
        ))}
        <div className={styles['order']}>
          <p>
            <span>Total</span>
          </p>
          <p>${sumTotal()}</p>
        </div>
        <button className={styles['primary-button']}>
          Checkout
        </button>
      </div>
    </aside>
  );
}

export default MyOrder;
