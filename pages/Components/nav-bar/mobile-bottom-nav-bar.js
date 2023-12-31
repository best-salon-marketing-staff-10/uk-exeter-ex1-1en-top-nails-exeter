import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import { images } from '/pages/core/info';
import { menu } from '/pages/core/info';


export default function MobileBottomNavBar(){
    return(
        <>
            
            <div className="mobile-bottom-nav-bar-section-bottom-nav-bar">
                <Navbar expand={false} bg="white" variant="d" fixed="bottom">
                    <div className="mobile-bottom-nav-bar-section">
                        <Link legacyBehavior href={images.BottomNavButton1LinkTo}>
                            <a className="mobile-bottom-nav-bar-link-a">
                                <div className="mobile-bottom-nav-bar-home">
                                    <div>
                                        <img className="mobile-bottom-nav-bar-img" alt={images.BottomNavButton1IconAlt} src={images.BottomNavButton1Icon} />
                                    </div>
                                    <div className="mobile-bottom-nav-bar-section-content">
                                        {images.BottomNavButton1Content}
                                    </div>   
                                </div>
                            </a>
                        </Link>
                        <Link legacyBehavior href={images.BottomNavButton2LinkTo}>
                            <a className="mobile-bottom-nav-bar-link-a">
                                <div className="mobile-bottom-nav-bar-services">
                                    <div>
                                        <img className="mobile-bottom-nav-bar-img" alt={images.BottomNavButton2IconAlt} src={images.BottomNavButton2Icon} />
                                    </div>
                                    <div className="mobile-bottom-nav-bar-section-content">  
                                        {images.BottomNavButton2Content}
                                    </div> 
                                </div>
                            </a>
                        </Link>
                        <Link legacyBehavior href={menu.linkToMainMenu3}>
                            <a className="mobile-bottom-nav-bar-link-a">
                                <div className="mobile-bottom-nav-bar-contact-us">
                                    <div>
                                        <img className="mobile-bottom-nav-bar-img" alt={images.BottomNavButton3IconAlt} src={images.BottomNavButton3Icon} />
                                    </div>
                                    <div className="mobile-bottom-nav-bar-section-content">
                                        Appointment&nbsp;now 
                                    </div> 
                                </div>
                            </a>
                        </Link>
                    </div>    
                </Navbar>
            </div>
        </>
    )
}