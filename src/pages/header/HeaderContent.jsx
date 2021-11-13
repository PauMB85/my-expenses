import React from 'react';
import { getMonthAndYearByMilisecond } from './../../utils/fechas';

export const HeaderContent = ({fecha, total}) => {
  return (
    <div className="Header">
      <div className="header__titulo">Gastos de {getMonthAndYearByMilisecond(fecha)} </div>
      <div className="header__gasto">total: {total} €</div>
    </div>
  )
}

