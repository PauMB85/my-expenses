import React, { useContext } from 'react';
import { ExpenseContext } from './../../context/ExpenseContext';
import './Header.css';
import { HeaderContent } from './HeaderContent';


export const  Header = () => {
  const [{fecha, total}] = useContext(ExpenseContext);
  return (
    <HeaderContent fecha={fecha} total={total}/>
  )
}

