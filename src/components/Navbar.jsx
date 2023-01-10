import React, { useEffect } from 'react';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBBtn,
} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getCartTotal } from '../features/cartSlice';

export default function App() {

  const dispatch = useDispatch()
  const {totalQuantity, cart} = useSelector(state => state.allCart)


  useEffect(() => {
    dispatch(getCartTotal())
  }, [cart])
  

  return (
    <MDBNavbar light bgColor='light'>
      <MDBContainer fluid>
            <MDBNavbarBrand>Navbar</MDBNavbarBrand>
            <span>
              <Link to='/shoppingcart_redux'>All Product</Link>
            </span>
            <MDBBtn color='dark'>
            <Link to='/shoppingcart_redux/cart'>Cart ({totalQuantity})</Link>
            </MDBBtn>
      </MDBContainer>
    </MDBNavbar>
  );
}
