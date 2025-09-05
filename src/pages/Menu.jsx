import React from 'react'
import MenuNav from '../components/menu/MenuNav';
import MenuMain from '../components/menu/MenuMain';
import {useParams} from 'react-router-dom';
const Menu = () => {
  const { categories } = useParams();
  return (
    <>
        <MenuNav onPage = {categories}/>
        <MenuMain category ={categories}/>
    </>
  )
}

export default Menu