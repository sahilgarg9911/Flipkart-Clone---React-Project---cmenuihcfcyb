import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
// import { add, remove } from '../../store/cartSlice';
import { decreament, increment } from '../../store/quantitySlice';
import './Checkout.css';
import Product from '../Product';

function Checkout() {
   const dispatch = useDispatch();
   let id = window.location.pathname.split("/");
//  console.log(id[1])
 if(id[1] === "Checkout"){
    id = id[2];
  }else{
    id = id[3]
  }
    let [ itm, setitm] = useState({});
    
    const param = useParams();
    // console.log(param)

    let data = async() => {
      const datajson = await fetch('https://content.newtonschool.co/v1/pr/63b6c911af4f30335b4b3b89/products');

      const data = await datajson.json();
      // console.log(data)
      // console.log(data[id]);
      // console.log(data[id-1]);
      // console.log(data[id-1].title);
      setitm(data[id-1]);
     
      
  }
 // data();
 

  useEffect(() => {
      if(param?.id) {
          data();
      }
      // console.log(param?.id);
      // console.log(itm);
  }, [param?.id])
  // console.log(itm)

      // return (<div>{itm.title}</div>)   
    
      function handleAdd(product){
        // dispatch(add({product, count}))
        dispatch({type:'cart/add', payload: product})
        //  dispatch({type:'cart/add', payload: product})
        //  console.log(add(product))
     }
     const count = useSelector((state)=> state.counter)
 

     function handleIncrement(number){
      dispatch(increment(number));
      // console.log(number)
   }

   function handleDecrement(number){
       dispatch(decreament(number));
      //  console.log(number)
   }   

  return (
    <>
       <div className='Checkout' >
        <h1 className='CheckoutTag' >Checkout </h1>
        <div className='CheckoutContainer' >
          <img className='ImageContainer'src={itm.image} alt="" />
          <div className='ContentContainer' >
            <div className='ProductName' >
              <h1>{itm.title}</h1>
              <p>Visit to store</p>
              <h4>Rating 3.6/5.0</h4>
            </div>

            <div className='ProductPrice'>
              <p>Special Sale</p>
              <h1><span>$</span>{itm.price * count}</h1>
            
            <div className='ProdcutQuantity' >
              <h3>Quantity</h3>
              <button onClick={()=>{handleIncrement(1)}}>+</button>
            <button>{count}</button>
            <button onClick={()=>{handleDecrement(1)}}>-</button>
            </div>
            </div>
            <div className='ProdcutDescription' >
              <h3>About this Item</h3>
              <p>{itm.description}</p>
            </div>



          </div>
      
          <div className='BuyContainer' >

          <p>Free Delivery</p>
            <h3>In Stock</h3>
            <div className='buttonsContainer' >
            <button className='addtocart'  onClick={()=>handleAdd(itm)} >Add to Cart</button><br/>
            <button className='buynow'>Buy Now</button>
            </div>
          </div>

        </div>
      </div> 

    </>
  )
}

export default Checkout
