import { useEffect, useState } from 'react';
import '../App.css'
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { useSelector } from "react-redux";
import {add} from '../Redux/userLoginReducer'
import{userSelectors}from '../Redux/userLoginReducer'
import {cartSelectors} from '../Redux/cardReducer'
import { useNavigate} from 'react-router-dom';
function Cards({ name, price,id,img}) {
  const disptach=useDispatch()
  const {userId}=useSelector(userSelectors)

    const navigate = useNavigate();
  const test='download (6).jpg';
const handelclick= async (id)=>{

  console.log("hi",id); 
  if(userId){
    try {
      const response = await axios.post('http://localhost:8007/api/Login/cartItems', {
        productId: id,
        userId: userId
      });
      console.log('Response:', response.data.cartdata.carts);
      
      disptach(add(response.data.cartdata.carts))
      // Handle response as needed
  } catch (error) {
      console.error('Error:', error);
      // Handle error as needed
  }
  }  
else{
  navigate('/login')
}
}
    return (
        <div className="cards">
            <div className="images">
            <img src={`./Productimages/${img}`}  />
            </div>
            <div className="others">
                <h2>{name} ${price}</h2>
                
                <button onClick={()=>handelclick(id)} >ADD TO CART</button>
            </div>

        </div>
    )
  };
export default Cards