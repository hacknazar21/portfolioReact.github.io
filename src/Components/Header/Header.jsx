import React from 'react';
import './Header.scss';
import WorksHeaderOrder from '../Works/WorksHeaderOrder';
import ContactsHeaderOrder from '../Contacts/ContactsHeaderOrder';
import HomeHeaderOrder from '../Home/HomeHeaderOrder';
import { Link } from 'react-router-dom';


function HeaderOrder(currentLocation) {
    console.log(currentLocation);
    if (currentLocation.currentLocation == "/portfolioReact.github.io/") {
        return (
            <HomeHeaderOrder mainColor='#9a34bd' secondColor='#c89ff0' />
        );
    }
    else if (currentLocation.currentLocation == "/portfolioReact.github.io/works") {
        return (
            <WorksHeaderOrder mainColor='#d12d2d' secondColor='#ffb7b7' />
        );
    }
    else {
        return (
            <ContactsHeaderOrder mainColor='#392dc3' secondColor='#7e79b9' />
        );
    }
}

const Header = (props) => {
    return (
        <header className="header header_line">
            <nav className="header__nav">
                <ul className="header__ul">
                    <HeaderOrder currentLocation={props.currentLocation} />
                </ul>
            </nav>
            <div className="header__bullets bullets">
                <Link to="/portfolioReact.github.io/" className={props.currentLocation == '/portfolioReact.github.io/' ? 'bullets__item _active' : 'bullets__item'}></Link>
                <Link to="/portfolioReact.github.io/works" className={props.currentLocation == '/portfolioReact.github.io/works' ? 'bullets__item _active' : 'bullets__item'}></Link>
                <Link to="/portfolioReact.github.io/contacts" className={props.currentLocation == '/portfolioReact.github.io/contacts' ? 'bullets__item _active' : 'bullets__item'}></Link>
            </div>
        </header >
    );
}

export default Header;