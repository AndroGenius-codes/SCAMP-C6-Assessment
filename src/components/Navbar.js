import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import * as Open from 'react-icons/fa';
import * as Close from 'react-icons/ai';
import {NavItems} from './NavItems';
import { IconContext } from 'react-icons';
import './styles.scss';
import cart from '../images/cart.svg';
import profile from '../images/profile.png';


function Navbar() {

    const [sidebar, setSidebar] = useState(false)
    const showSidebar = () => setSidebar(!sidebar);
    
    return(
      <>
         
            <div className='container'>
                <div className='left-nav'>
                    <IconContext.Provider value={{color: '#000000'}}>
                        <div className='navbar'>
                            <Link to='#' className='bar'>
                            < Open.FaBars onClick={showSidebar}/>
                            </Link>
                        </div>

                        

                        <nav className={sidebar? 'menu active' : 'menu' }>
                            <ul className='menu-items'  onClick={showSidebar}>
                                <li className='toggle'>
                                    <Link to='#' className='bar'>
                                        <Close.AiOutlineClose />
                                    </Link>
                                </li>
                                {NavItems.map((item, id) => {
                                    return(
                                        <li key={id} className={item.cName}>
                                            <Link to={item.path}>
                                            {item.title}
                                            </Link>
                                        </li>
                                    )
                                    
                                }
                                ) }
                            </ul>
                           
                        </nav>
                    </IconContext.Provider>
                    <div className='logo'>sneakers</div>
                    <div className='pc-nav'>
                              <ul className='pc-menu'>
                                    {NavItems.map((item, id) => {
                                        return(
                                            <li key={id} className={item.cName}>
                                                <Link to={item.path}>
                                                {item.title}
                                                </Link>
                                            </li>
                                        )
                                        
                                    })}
                             </ul>
                            </div>

                </div>
                <div className='right-nav'>
                        < div className="cart">
                          <img src={cart} alt="cart" width={25} height={25}/>
                        </div>
                  
                        <div className="profile">
                            <img src={profile} alt="profile " width={30} height={30} />
                        </div>
                </div>

            </div>
                
         
         
         
      </>

    )
    
}

export default Navbar;