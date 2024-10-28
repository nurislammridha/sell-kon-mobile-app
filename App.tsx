/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
// import Pages from './pages/pages';
import { Text, View } from 'react-native';
import Pages from './pages/Home';
import AllComponents from './pages/AllComponents';
import Details from './pages/Details';
import AllProductsPage from './pages/AllProductsPage';
import CheckoutPage from './pages/CheckoutPage';
import OrderPage from './pages/OrderPage';
import PaymentPage from './pages/PaymentPage';
import OrderListPage from './pages/OrderListPage';
const App = () => {

  return (
    <View>
      {/* <Pages /> */}
      {/* <AllComponents /> */}
      {/* <Details /> */}
      {/* <AllProductsPage /> */}
      <CheckoutPage />
      {/* <OrderPage /> */}
      {/* <PaymentPage /> */}
      {/* <OrderListPage /> */}
    </View>
  );
}
export default App;
