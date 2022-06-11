import React, {useState} from "react";
import { Images } from "./Images";
import {FaMinus,FaPlus} from 'react-icons/fa';
import { IconContext } from 'react-icons';


const Home = (props) => {
    const [itemCount, setItemCount] = useState(0);
    const [setCartItems] = useState('');
    const [selectedImg, setSelectedImg] = useState(Images[0].image);
    const setCartChecked = props.setCartChecked;
    console.log({selectedImg});
  
    const increaseItemCount = () => {
        setItemCount(itemCount + 1);
       
    }

    const decreaseItemCount = () => {
        if (itemCount === 0) {
            return
        }
        setItemCount(itemCount - 1);
        
    }

    const addToCart = () => {
        const item = {
            
           
            name: "Fall Limited Edition Sneakers",
            unitCost: 125.00,
            count: itemCount
        }
        setCartItems(item);
        setCartChecked(false);
    }

   

    return(
        <>
            <div className="home-conatiner">
                <div className="pc-carousel">
                   <img src={selectedImg} alt="selected" className="selected" />
                   <div className="image-container">
                        {Images.map((imgs, index) => {
                            return(
                                <div
                                    onClick={ () => setSelectedImg(imgs.image) } className={`image ${imgs.cName}`} key={index} 
                                >
                                  
                                    <img  style={{
                                           opacity: selectedImg === imgs.image ? '0.5':'',
                                           border:selectedImg === imgs.image ? '2px solid #ff7d1a': ''
                                           }}
                                          key={index} src={imgs.thumbImage}alt="sneaker thumbnail" 
                                    />
                                  

                                  
                                </div>
                        
                        )
                        
                    
                
                        })}
                       
                    </div>
                </div>


                <div className="brand-details">
                    <div className="company-name">
                        sneaker company
                    </div>
                    <h1 className="brand-name">
                        Fall Limited Edition Sneakers
                    </h1>
                    <div className="description">
                        These low-profile sneakers are your perfect casual wear companion. Featuring a 
                        durable rubber outer sole, they’ll withstand everything the weather can offer.
                    </div>
                    <div className="price">
                        <div className="discounted-items">
                            $125.00 <span className="discount">50%</span>
                        </div>
                        <div className="normal-price">
                            <strike> $250.00 </strike>
                        </div>
                    </div>
                    <div className="cart-box">
                        <div className="count-box">
                          <IconContext.Provider value={{color: '#ff7d1a'}}>
                                <div className="decrease-count" onClick={ decreaseItemCount }>
                                    <FaMinus />
                                </div>
                                <div className="count">
                                    { itemCount }
                                </div>
                                <div className="increase-count" onClick={ increaseItemCount }>
                                    <FaPlus />
                                </div>
                            </IconContext.Provider>
                          </div>
                        
                        <div className="add-to-cart" onClick={ addToCart }>
                            <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z" fill="white" fill-rule="nonzero"/></svg>  Add to cart
                        </div>
                    </div>
                </div>

            </div>
            
        </>
       
    )
}



export default Home;