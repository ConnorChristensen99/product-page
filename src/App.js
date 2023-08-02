import './App.css';
import { FaShoppingBag, FaUserAlt, FaRegHeart, FaGripHorizontal, FaSearch, FaRegCopyright, FaFacebookF, FaLinkedinIn, FaTiktok, FaInstagram, FaCcVisa, FaCcMastercard, FaCcAmex, FaCcPaypal } from "react-icons/fa";
import product from './main-product.jpeg';
import Accordion from './accordion';


function App() {
  //Handles the accordian on the bottom of the product pages
  const accordionData = [
    {
      title: 'Description',
      content: `Product code: 501319

      Good things come in small packages. Shop our Missguided petite range, for babes 5"3 and under.
      long sleeve button through cardigan dress featuring belted tie waist with contrast trims and pocket detail.`
    },
    {
      title: 'Features',
      content: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia veniam
      reprehenderit nam assumenda voluptatem ut. Ipsum eius dicta, officiis
      quaerat iure quos dolorum accusantium ducimus in illum vero commodi
      pariatur? Impedit autem esse nostrum quasi, fugiat a aut error cumque
      quidem maiores doloremque est numquam praesentium eos voluptatem amet!
      Repudiandae, mollitia id reprehenderit a ab odit!`
    },
    {
      title: 'Delivery and Returns',
      content: `For items purchased online, you can send them back for a full refund within 28 days, provided it has not been used or fitted, and is returned in its original packaging with a valid proof of purchase. Unfortunately, some items cannot be returned.

      For more information please visit our full online returns page
      
      `
    }
  ];



  return (
    <div className="App">
      <header className="App-header">

        <div className="leftSideMenu">
         <FaGripHorizontal className='leftSideMenuOpen'/>
        <h3>My Clothes</h3>
        </div>

        <div className='inputHolder'>
        <input type="text"  className='inputText' placeholder='Search...'/>
        <FaSearch className='searchIcon'/>
        </div>

        <div className='rightSideMenu'>
        <FaRegHeart className='iconsTopRight'/>
        <FaShoppingBag className='iconsTopRight'/>
        <FaUserAlt className='iconsTopRight'/>
        </div>
      </header>
      <nav className="nav">
      <ul className='navList'>
        <li className='saleItem'>Sale</li>
        <li className='navListItem'>Summer</li>
        <li className='navListItem'>Clothing</li>
        <li className='navListItem'>Dresses</li>
        <li className='navListItem'>Tops</li>
        <li className='navListItem'>Trousers</li>
        <li className='navListItem'>Shoes</li>
      </ul>
        </nav>

{/* SALE BANNER */}
        <div className='saleBanner'>

          <div className='leftSideBanner'>
            <h3>VIP Unlimited Pricing $9.99</h3>
            <p>Terms and Conditions Apply</p>
          </div>

          <div className='middleBanner'>
          <h3>UP TO 60% OFF EVERYTHING*</h3>
            <p>One per order per customer*</p>
          </div>

          <div className='rightSideBanner'>
          <h3>Extra 10% off Student Discount</h3>
            <p>Cannot be applied with other deals.</p>
          </div>

        </div>

{/* MAIN PRODUCT PAGE */}
        <div className='mainProductPage'>

          <div className='imageSide'>
        <img src={product} className="product-image" alt="product" />
        </div>

{/* RIGHT SIDE OF PRODUCT PAGE */}
        <div className='contentSide'>
          <div className='contentHeader'>
        <h2 className='productName'>Petite Contrast Belted Cardigan Dress</h2> 
        <FaRegHeart className='productHeart'/>
        </div>
        {/* PRICES OF PRODUCT */}
        <div className="prices">
        <p className='salePrice'>$11</p>
        <p className='normalPrice'>$25.00</p>
        </div>
        {/* COLOR OPTIONS FOR PRODUCT */}
        <p className='colorText'><span className='bold'>Colour - </span>Mocha</p>
        <div className='colorOptions'>
        <span class="dotMocha"></span>
        <span class="dotGreen"></span>
        <span class="dotYellow"></span>
        <span class="dotGrey"></span>
        </div>
        {/* SIZE OPTIONS FOR PRODUCT */}
        <p className='sizeTitle'>Size</p>
        <hr/>
        <div className="sizingButtons">
        <button>8 (XS)</button>
        <button>10 (S)</button>
        <button>12 (M)</button>
        <button>14 (L)</button>
        </div>

{/* ADD TO CART BUTTON */}
        <button className='cartButton'>Add to Cart</button>

{/* ACCORDION FOR EXTRA INFORMATION */}
        <div className="accordion">
        {accordionData.map(({ title, content }) => (
          <Accordion title={title} content={content} />
        ))}
      </div>

        </div>
        </div>

          <footer>
            <div className='mainFooter'>
            <div className='leftSideFooter'>
            <h2>Customer Services</h2>
            <ul>
              <li>FAQ's</li>
              <li>Delivery</li>
              <li>Refunds and Returns</li>
              <li>Customer Service</li>
              <li>Cookie Preferences</li>
            </ul>
            </div>

            <div className='middleFooter'>
            <h2>Information</h2>
            <ul>
              <li>My Account</li>
              <li>Gift Cards</li>
              <li>Track Order</li>
              <li>Wish List</li>
              <li>Student Discount</li>
            </ul>
            </div>

            <div className='rightSideFooter'>
            <h2>Our Company</h2>
            <ul>
              <li>Terms & Conditions</li>
              <li>Promotion Terms</li>
              <li>Careers</li>
            </ul>
            </div>
            </div>

            <div className='secondFooter'>
            <p>Privacy Notice</p>
            <p>Terms of Use</p>
            <p>Cookies Policy</p>
            </div>
            <div className='thirdFooter'>
              <div className='socials'>
              <FaFacebookF class="indivFooter"/>
              <FaLinkedinIn class="indivFooter"/>
              <FaInstagram class="indivFooter"/>
              <FaTiktok class="indivFooter"/>
              </div>
              <div className='copyright'>
            <FaRegCopyright />
            <p>Connor Christensen</p>
            </div>
            <div className='payment'>
            <FaCcVisa class="indivFooter"/>
            <FaCcMastercard class="indivFooter"/>
            <FaCcAmex class="indivFooter"/>
            <FaCcPaypal class="indivFooter"/>
            </div>
            </div>
          </footer>


    </div>
  );
}

export default App;