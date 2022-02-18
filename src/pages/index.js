import Head from 'next/head'
// import Layout from "../containers/Layout";
// import Header from '../components/Header';
import ProductList from '@containers/ProductList';

export default function Home() {
  return (
    <>
      <Head>
        <title>React Shop</title>
      </Head>
      <ProductList />
    </>
  );
}
