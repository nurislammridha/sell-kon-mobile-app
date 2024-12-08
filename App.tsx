/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import Pages from './pages/Home';
// import AllComponents from './pages/AllComponents';
import Details from './pages/Details';
import AllProductsPage from './pages/AllProductsPage';
import CheckoutPage from './pages/CheckoutPage';
import OrderPage from './pages/OrderPage';
import PaymentPage from './pages/PaymentPage';
import OrderListPage from './pages/OrderListPage';
import OrderDetails from './pages/OrderDetails';
import SignUpPage from './pages/SignUpPage';
import SignInPage from './pages/SignInPage';
import DeliveryAddress from './pages/DeliveryAddress';
import AddAddress from './pages/AddAddress';
import EditAddress from './pages/EditAddress';
import UserInfo from './pages/UserInfo';
import UserTab from './pages/UserTab';
import ShopPage from './pages/ShopPage';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux';
import store from './redux/store';
const Stack = createStackNavigator();
{/* <Pages /> */ }
{/* <AllComponents /> */ }
{/* <Details /> */ }
{/* <AllProductsPage /> */ }
{/* <CheckoutPage /> */ }
{/* <OrderPage /> */ }
{/* <PaymentPage /> */ }
{/* <OrderListPage /> */ }
{/* <OrderDetails /> */ }
{/* <SignUpPage /> */ }
{/* <SignInPage /> */ }
{/* <DeliveryAddress /> */ }
{/* <AddAddress /> */ }
{/* <EditAddress /> */ }
{/* <UserInfo /> */ }
{/* <UserTab /> */ }
{/* <ShopPage /> */ }
const App = () => {
  return (
    <>
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="Home"
            headerMode="none"
          >
            <Stack.Screen
              name="Home"
              component={Pages}
            />
            <Stack.Screen
              name="Details"
              component={Details}
            />
            <Stack.Screen
              name="AllProducts"
              component={AllProductsPage}
            />
            <Stack.Screen
              name="CheckOut"
              component={CheckoutPage}
            />
            <Stack.Screen
              name="Order"
              component={OrderPage}
            />
            <Stack.Screen
              name="Payment"
              component={PaymentPage}
            />
            <Stack.Screen
              name="OrderList"
              component={OrderListPage}
            />
            <Stack.Screen
              name="OrderDetails"
              component={OrderDetails}
            />
            <Stack.Screen
              name="SignUp"
              component={SignUpPage}
            />
            <Stack.Screen
              name="SignIn"
              component={SignInPage}
            />
            <Stack.Screen
              name="DeliveryAddress"
              component={DeliveryAddress}
            />
            <Stack.Screen
              name="AddAddress"
              component={AddAddress}
            />
            <Stack.Screen
              name="EditAddress"
              component={EditAddress}
            />
            <Stack.Screen
              name="UserInfo"
              component={UserInfo}
            />
            <Stack.Screen
              name="UserTab"
              component={UserTab}
            />
            <Stack.Screen
              name="Shop"
              component={ShopPage}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </>
  );
}
export default App;
