import React, {useState, useContext} from 'react'
// import '@styles/Header.module.scss'
import Image from "next/image";
import Link from "next/link";
import Menu from "./Menu";
import menu from "@icons/icon_menu.svg";
import logo from "@logos/logo_yard_sale.svg";
import shoppingCar from "@icons/icon_shopping_cart.svg";
import AppContext from "../context/AppContext";
import MyOrder from "../containers/MyOrder";

import styles from '../styles/Header.module.scss'

const Header = () => {
  const {state} = useContext(AppContext)

  const [toggle, setToggle] = useState(false);
  const [toggleOrders, setToggleOrders] = useState(false);

  console.log(state)

  const handleToggle = () => {
    setToggle(!toggle)
  }
  const handleToggleOrders = () => {
    setToggleOrders(!toggleOrders)
  }


  return (
    <>
      <nav className={styles.Nav}>
        <img src={menu.src} alt="menu" className={styles.menu}/>

        <div className={styles['navbar-left']}>
          <Link href="/">
            <Image src={logo} alt="logo" className={styles['nav-logo']}/>
          </Link>

          <ul>
            <li>
              <a href="/">All</a>
            </li>
            <li>
              <a href="/">Clothes</a>
            </li>
            <li>
              <a href="/">Electronics</a>
            </li>
            <li>
              <a href="/">Furnitures</a>
            </li>
            <li>
              <a href="/">Toys</a>
            </li>
            <li>
              <a href="/">Others</a>
            </li>
          </ul>
        </div>

        <div className={styles['navbar-right']}>
          <ul>
            <li className={styles['navbar-email']} onClick={handleToggle}>platzi@example.com</li>
            <li className={styles['navbar-shopping-cart']} onClick={handleToggleOrders}>
              <Image src={shoppingCar} alt="shopping cart"/>
              {state.cart.length > 0 && (

                <div>{state.cart.length}</div>
              )}
            </li>
          </ul>
        </div>
        {toggle && <Menu/>}
        {toggleOrders && <MyOrder/>}

      </nav>
    </>


  )
}

export default Header
