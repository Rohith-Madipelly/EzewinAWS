import './Footer.css'
import '../Button.css'
import { BiCopyright } from 'react-icons/bi'
import { IoIosArrowForward } from 'react-icons/io'
import { Link } from 'react-router-dom'



function Footer() {
    return (
            <footer className="footer mt-3 pt-3">
                <div className='container  border-bottom border-light pb-2'>

                    <div className="Newsletter">
                        <div className="headline">
                            <h2 className='text-white'>Our Newsletter</h2>
                            <p className='centerr  text-white'>Get in touch with us to raise a query regarding the service you need with a easy call. Every customer is served with great attention and priority time.</p>
                        </div>
                    </div>
                    <div className="subscribe centerr my-2">
                        <form className="form">
                            <input className="emailInput border-0 " placeholder="Email" type="email" name="" id=""/>
                            <input className="bn632-hover bn19 " type="submit" value="Subscribe" />
                            
                        </form>
                    </div>
                    <div className='box-container  pb-4'>
                    <div className='box '>
                            
                            <img src='/Logo4.png' className="rohith" style={{width:"10rem", margin:"0 4vw"}}/>
                            <div className='d-flex gap-3 ms-3'>

                            <a href='https://www.instagram.com/' target='blank'>
                                <img  
                                className="social Facebook"
                                src='/Assets/Social Icons/Facebook.png'
                                width={35}
                                alt="Facebook"/>
                            </a>
                            <a href='https://www.instagram.com/' target='blank'>
                                <img 
                                className="social Twitter"
                                src='/Assets/Social Icons/Twitter.png'
                                width={35}
                                alt="Twitter"/>
                            </a>
                            <a href='https://www.instagram.com/' target='blank'>
                                <img 
                                className="social Instagram"
                                src='/Assets/Social Icons/Instagram.png'
                                width={35}
                                alt="Instagram"/>
                            </a>
                            <a href='https://www.instagram.com/' target='blank'>
                                <img 
                                className="social Youtube"
                                src='/Assets/Social Icons/Youtube.png'
                                width={35}
                                alt="Youtube"/>
                            </a>
                            <a href='https://www.instagram.com/' target='blank'>
                                <img 
                                className="social LinkedIn"
                                src='/Assets/Social Icons/LinkedIn.png'
                                width={35}
                                alt="LinkedIn"/>
                            </a>                         
                            </div>
                        </div>
                        <div className='box Boxlinks'>
                            <strong>Page Navigation</strong>
                            <a href='#HomeTop' className='text-white'><IoIosArrowForward className='me-1'/>Home</a>
                            <a href='#OfferTop' className='text-white'><IoIosArrowForward className='me-1'/>Offer</a>
                            <a href='#DownloadTop' className='text-white'><IoIosArrowForward className='me-1'/>Download</a>
                            <a href='#GallaryTop'className='text-white'><IoIosArrowForward className='me-1'/>gallery</a>
                            <a href='#FAQsTop'className='text-white'><IoIosArrowForward className='me-1'/>FAQs</a>

                        </div>
                        <div className='box Boxlinks'>
                            <strong>Legal</strong>
                            <span></span><Link to="/TermandConditions"><a className='text-white' href=''><IoIosArrowForward className='me-1'/>Privacy Policy</a></Link>
                            <Link to="/TermandConditions"><a className='text-white'  href=''><IoIosArrowForward className='me-1'/>Term and Conditions</a></Link>
                        </div>
                        <div className='box Boxlinks'>
                            <strong>Help</strong>
                            <a  href=''className='text-white'><IoIosArrowForward className='me-1'/>Support</a>
                            <a href='#HomeTop' className='text-white'><IoIosArrowForward className='me-1'/>Login</a>
                            <a href='tel:'  className='text-white'><IoIosArrowForward className='me-1'/>Call</a>
                            <a  href='tel: '  className='text-white'><IoIosArrowForward className='me-1'/>Chat Support</a>                       
                        </div>
                    </div>
                </div>   
                <div className="copyRight pt-2">
                    <p className='text-white'><BiCopyright /> Copyright Ezewin. All Rights Reserved</p>
                </div>
            </footer>  
    )
}
export default Footer;