import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';



function Header() {
    const searchIcon = 'https://cdn0.iconfinder.com/data/icons/very-basic-2-android-l-lollipop-icon-pack/24/search-512.png';
    const products = useSelector((state)=> state.cart);
    let arr =[];
    products.map((product, id) => {
        arr.push(product)
    })
    function removeDuplicateObjects(arr) {
        let unique_array = arr.filter(function (elem, index, self) {
            return index === self.findIndex(function (t) {
                return JSON.stringify(t) === JSON.stringify(elem);
            });
        });
        return unique_array;
    }

    let uniqueArr = removeDuplicateObjects(arr);
    console.log(uniqueArr);
  return (
<>
   <nav className="header">
    <div className='headerTop' >


        {/* logo*/}
        <Link to="/" className='logolink'>
            <img src='https://image.pitchbook.com/IIZvz8HxGpxmd4nnI5Irsnm0JAx1666857561209_200x200' alt='' className='logo' />
            

        </Link>
        {/* logo*/}

        <div className='headerSearch'>
    
            <div className="search">
                        <input type="text" placeholder="Search for products brands and more" />
                       <i class="fa-solid fa-magnifying-glass"></i>
                    </div>

        </div>
        

        {/* Links */}
        <div className='headerNavbar' >
            {/* signout/ signin */}
            <Link to="/Login" className='headerLink' >
            <button className='searchbtn'>Login</button>
            </Link>
            

            {/*Return Order */}
            <Link to="/Orders" className='headerLink' >
                <div className='headerOptions' >
                    <span className='headerOption_One'>Return</span>
                    <span className='headerOption_Two'>Order</span>
                    
                </div>
            </Link>

             <Link to="/Cart" className='headerLink' >
                <div className='headerOptions_Basket' >
                    <span className='headerOption_Two basketCount'>Cart : {uniqueArr.length}</span>
                </div>
            </Link>
        </div>

     </div>

   </nav>
</>
  )
}

export default Header;
