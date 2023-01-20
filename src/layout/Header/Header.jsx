import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
// import MenuIcon from '@mui/icons-material/Menu';
// import SearchIcon from '@mui/icons-material/Search';



// import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
// import Product from './Product';


function Header() {
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
    console.log(uniqueArr)
  return (
<>
   <nav className="header">
    <div className='headerTop' >


        {/* logo*/}
        <Link to="/">
            <img src='https://image.pitchbook.com/IIZvz8HxGpxmd4nnI5Irsnm0JAx1666857561209_200x200' alt='' className='logo' />
            

        </Link>
        {/* logo*/}

        {/* Search - box */}
        <div className='headerSearch'>
            <input className='headerSearchInput' />
            {/* <SearchIcon className='headerSearchIcon' /> */}
        </div>
        <button className='searchbtn'>Search</button>
        {/* Search - box */}

        {/* Links */}
        <div className='headerNavbar' >
            {/* signout/ signin */}
            <Link to="/Login" className='headerLink' >
                <div className='headerOptions' >
                    <span className='headerOption_One'>Hello</span>
                    <span className='headerOption_One'>User</span>
                </div>
            </Link>
            

            {/*Return Order */}
            <Link to="/Orders" className='headerLink' >
                <div className='headerOptions' >
                    <span className='headerOption_One'>Return</span>
                    <span className='headerOption_Two'>Order</span>
                    
                </div>
            </Link>
            {/*Prime */}
            {/* <Link to="/" className='headerLink' >
                <div className='headerOptions' >
                    <span className='headerOption_One'>Return</span>
                    <span className='headerOption_Two'>Home</span>
                </div>
            </Link> */}
            {/*profile */}
            {/* <Link to="/Profile" className='headerLink' >
                <div className='headerOptions' >
                    <span className='headerOption_One'>Your</span>
                    <span className='headerOption_Two'>Profile</span>
                </div>
            </Link> */}
            {/*Basket */}
             <Link to="/Cart" className='headerLink' >
                <div className='headerOptions_Basket' >
                   
                    <span className='headerOption_Two basketCount'>Cart : {uniqueArr.length}</span>
                </div>
            </Link>
        </div>

        {/* Links */}


    </div>

   </nav>
</>
  )
}

export default Header;
