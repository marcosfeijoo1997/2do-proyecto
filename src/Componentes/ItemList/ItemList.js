import React from "react";
import Item from '../Item/Item'


const ItemList = ({ data = [] }) => {

	  
	if (!data) 
	return (<div>cargando...</div>)

	if (data){
	return data.map((productos) => <Item key={productos.id} info={productos}  />);
}};

export default ItemList;
