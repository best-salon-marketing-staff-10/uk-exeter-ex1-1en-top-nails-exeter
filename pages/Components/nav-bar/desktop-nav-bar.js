import Link from 'next/link';
import Head from 'next/head';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Offcanvas from 'react-bootstrap/Offcanvas';
import ButtonFullListOfOurServices from '/pages/Components/buttons/button-full-list-of-our-services.js';
import { NavDropdown } from 'react-bootstrap';
import LogoNav from '/pages/Components/logo-nav/logo-nav';
import { menu } from '/pages/core/info';
import { serviceCategory } from '/pages/core/info';




export default function DesktopNavBar(){
    return(
        <>
            <div className="nav-bar">
                <LogoNav />
                <div className="nav-bar-menu">
                    <Navbar bg="#FFFFFF" expand={false}>
                        <Container fluid>
                            <Navbar.Brand href="#"></Navbar.Brand>
                            <Navbar.Toggle aria-controls="offcanvasNavbar" />
                            <Navbar.Offcanvas
                            id="offcanvasNavbar"
                            aria-labelledby="offcanvasNavbarLabel"
                            placement="end"
                            >
                            <Offcanvas.Header closeButton>
                                <Offcanvas.Title id="offcanvasNavbarLabel">
                                    <Link legacyBehavior href="/">
                                        <LogoNav />
                                    </Link>
                                </Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                                <Nav className="justify-content-end flex-grow-1 pe-3">
                                    <h2 className="nav-bar-main-category">
                                        <Link legacyBehavior href={menu.linkToMainMenu1}>
                                            <a className="nav-bar-link-main-menu">
                                                {menu.mainMenu1}
                                            </a>
                                        </Link>
                                    </h2>
                                    <div className="nav-bar-main-category">
                                        <h2>
                                            <Link legacyBehavior href={menu.linkToMainMenu4}>
                                                <a className="nav-bar-link-main-menu">
                                                    {menu.mainMenu4}
                                                </a>
                                            </Link>
                                        </h2>
                                        <div className="nav-bar-services-sub-category">
                                            <div className="nav-bar-services-sub-category-details">
                                                <h3 className="services-list-1">
                                                    <Link legacyBehavior href={serviceCategory.desktopLinkToServiceCategory1}>
                                                        <a className="nav-bar-link-service-category"> 
                                                            {serviceCategory.serviceCategory1}
                                                        </a>
                                                    </Link>
                                                </h3>
                                            </div>
                                            <div className="nav-bar-services-sub-category-details">
                                                <h3 className="services-list-2">
                                                    <Link legacyBehavior href={serviceCategory.desktopLinkToServiceCategory2}>
                                                        <a className="nav-bar-link-service-category">
                                                            {serviceCategory.serviceCategory2}
                                                        </a>
                                                    </Link>
                                                </h3>
                                            </div>    
                                            <div className="nav-bar-services-sub-category-details">
                                                <h3 className="services-list-3">
                                                    <Link legacyBehavior href={serviceCategory.desktopLinkToServiceCategory3}>
                                                        <a className="nav-bar-link-service-category">
                                                            {serviceCategory.serviceCategory3}
                                                        </a>
                                                    </Link>
                                                </h3>
                                            </div> 
                                            <div className="nav-bar-services-sub-category-details">
                                                <h3 className="services-list-4">
                                                    <Link legacyBehavior href={serviceCategory.desktopLinkToServiceCategory4}>
                                                        <a className="nav-bar-link-service-category">
                                                            {serviceCategory.serviceCategory4}
                                                        </a>
                                                    </Link>
                                                </h3>
                                            </div> 
                                            <div className="nav-bar-services-sub-category-details">
                                                <h3 className="services-list-5">
                                                    <Link legacyBehavior href={serviceCategory.desktopLinkToServiceCategory5}>
                                                        <a className="nav-bar-link-service-category">
                                                            {serviceCategory.serviceCategory5}
                                                        </a>
                                                    </Link>
                                                </h3>
                                            </div> 
                                            <div className="nav-bar-services-sub-category-details">
                                                <h3 className="services-list-6">
                                                    <Link legacyBehavior href={serviceCategory.desktopLinkToServiceCategory6}>
                                                        <a className="nav-bar-link-service-category">
                                                            {serviceCategory.serviceCategory6}
                                                        </a>
                                                    </Link>
                                                </h3>
                                            </div> 
                                            <div className="nav-bar-services-sub-category-details">
                                                <h3 className="services-list-7">
                                                    <Link legacyBehavior href={serviceCategory.desktopLinkToServiceCategory7}>
                                                        <a className="nav-bar-link-service-category">
                                                            {serviceCategory.serviceCategory7}
                                                        </a>
                                                    </Link>
                                                </h3>
                                            </div> 
                                        </div>
                                    </div>
                                    <h2 className="nav-bar-main-category">
                                        <Link legacyBehavior href={menu.linkToMainMenu3}>
                                            <a className="nav-bar-link-main-menu">
                                                {menu.mainMenu3}
                                            </a>
                                        </Link>
                                    </h2>
                                    <h2 className="nav-bar-main-category">
                                        <Link legacyBehavior href={menu.linkToMainMenu2}>
                                            <a className="nav-bar-link-main-menu">
                                                {menu.mainMenu2}
                                            </a>
                                        </Link>
                                    </h2>
                                    <h2 className="nav-bar-main-category">
                                        <Link legacyBehavior href={menu.linkToMainMenu5}>
                                            <a className="nav-bar-link-main-menu">
                                                {menu.mainMenu5}
                                            </a>
                                        </Link>
                                    </h2>
                                    <div className="button">
                                        <ButtonFullListOfOurServices />
                                    </div>
                                </Nav>
                            </Offcanvas.Body>
                            </Navbar.Offcanvas>
                        </Container>
                    </Navbar>        
                </div>
            </div>
        </>
    )
}