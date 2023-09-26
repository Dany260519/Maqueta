import React, { useState } from 'react'
import { FaBars, FaCartPlus, FaMapMarkerAlt, FaSearch } from 'react-icons/fa'

const Logos = () => {

    const [inputClicked, setInputClicked] = useState(false);
  
    const handleInputClick = () => {
      setInputClicked(true);
    };
  
    const handleDocumentClick = (e) => {
      if (!e.target.matches('#diagonal-form *')) {
        setInputClicked(false);
      }
    };
  
    document.addEventListener('click', handleDocumentClick);



  return (
    <div>
      <nav id='navs'>
        <div id='logo'>
          <div id='logo-bar'>
          <a id='logoLink' className='navItems'>
            <img src='https://pngimg.com/uploads/amazon/amazon_PNG11.png' id='logoAmazon' />
          </a>
          
          <a id='location' className='navItems'>
            <div id='components'>
              <div id='new'>  
                <FaMapMarkerAlt />
              </div>
              <div id='text'>
                <span className='small' id='smallC'>Delivering to Phoenix 85053</span>
                <br></br>
                <span className='underTheSmall'>Choose location for most accurate options</span>
              </div>
            </div>
          </a>

          <div id='search' className='navItems'>
            <form id="diagonal-form" className={`diagonal-form ${inputClicked ? 'focused' : ''}`}>
              <select id='selectOption' className='small'>
                <option>All Departments</option>
                <option>Alexa Skills</option>
                <option>Amazon Devices</option>
                <option>Amazon Fresh</option>
                <option>Amazon Pharmacy</option>
                <option>Amazon Warehouse</option>
                <option>Appliances</option>
                <option>Apps & Games</option>
                <option>Arts, Crafts & Sewing</option>
                <option>Audible Books & Originals</option>
                <option>Automotive Parts & Accessories</option>
                <option>Baby</option>
                <option>Beauty & Personal Care</option>
                <option>Books</option>
                <option>CDs & Vinyl</option>
                <option>Cell Phones & Accessories</option>
                <option>Clothing, Shoes & Jewelry</option>
                <option>&nbsp;&nbsp;&nbsp;Women</option>
                <option>&nbsp;&nbsp;&nbsp;Men</option>
                <option>&nbsp;&nbsp;&nbsp;Girls</option>
                <option>&nbsp;&nbsp;&nbsp;Boys</option>
                <option>&nbsp;&nbsp;&nbsp;Baby</option>
                <option>Collectibles & Fine Art</option>
                <option>Computers</option>
                <option>Credit and Payment Cards</option>
                <option>Digital Music</option>
                <option>Electronics</option>
                <option>Garden & Outdoor</option>
                <option>Gift Cards</option>
                <option>Grocery & Gourmet Food</option>
                <option>Handmade</option>
                <option>Health, Household & Baby Care</option>
                <option>Home & Business Services</option>
                <option>Home & Kitchen</option>
                <option>Industrial & Scientific</option>
                <option>Just for Prime</option>
                <option>Kindle Store</option>
                <option>Luggage & Travel Gear</option>
                <option>Luxury Stores</option>
                <option>Magazine Subscriptions</option>
                <option>Movies & TV</option>
                <option>Musical Instruments</option>
                <option>Office Products</option>
                <option>Pet Supplies</option>
                <option>Premium Beauty</option>
                <option>Prime Video</option>
                <option>Smart Home</option>
                <option>Software</option>
                <option>Sports & Outdoors</option>
                <option>Subscribe & Save</option>
                <option>Subscription Boxes</option>
                <option>Tools & Home Improvement</option>
                <option>Toys & Games</option>
                <option>Under $10</option>
                <option>Video Games</option>
                <option>Whole Foods Market</option>
              </select>
              <input 
                id='inputSearch' 
                type='text' 
                placeholder='Search Amazon' 
                onClick={handleInputClick}
              />
              <button id='buttonSearch' type='submit'><FaSearch /></button>
            </form>
          </div>

          <a id='language' className='navItems'>
            <span id='languageOption'>
              <img id='flag' src='https://static.vecteezy.com/system/resources/previews/000/532/212/original/vector-united-states-of-america-flag-usa-flag-america-flag-background.jpg' />
              EN
            </span>
          </a>

          <a className='account navItems' >
            <span className='spanText'>
              <div className='textAccount'>
                <span className='small' id='hello'>Hello, sign in</span>
                <br></br>
                <span className='underTheSmall'>Account & Lists</span>
              </div>
            </span>
          </a>

          <a className='account navItems' id='orders'>
            <span className='spanText'>
              <div className='textAccount'>
                <span className='small' id='returns'>Returns</span>
                <br></br>
                <span className='underTheSmall'>& Orders</span>
              </div>
            </span>
          </a>

          <a id='cart' className='navItems'>
            <div id='cartObjects'>
              <div id='icoCart'><FaCartPlus/></div>
              <span className='underTheSmall' id='textCart'>Cart</span>
            </div>
          </a>
          </div>
        </div>

        <div id='links'>
          <div id='flex'>
            <a id='menu' className='linksDesing'><FaBars /> All</a>
            <a className='linksDesing'>Back to School</a>
            <a className='linksDesing'>Off to College</a>
            <a className='linksDesing'>
              <span className='change'>Medical Care</span>
            </a>
            <a className='linksDesing'>Best Sellers</a>
            <a className='linksDesing'>Amazon Basics</a>
            <a className='linksDesing'>Customer Service</a>
            <a className='linksDesing'>Music</a>
            <a className='linksDesing'>New Releases</a>
            <a className='linksDesing'>
              <span className='change'>Prime</span>
            </a>
          </div>
          
          <div id='positionRight'>
            <a id='linkR'>Celebrate Black Business Month</a>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Logos