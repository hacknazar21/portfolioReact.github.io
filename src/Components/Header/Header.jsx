import React from 'react';
import './Header.scss';
import WorksHeaderOrder from '../Works/WorksHeaderOrder';
import ContactsHeaderOrder from '../Contacts/ContactsHeaderOrder';
import HomeHeaderOrder from '../Home/HomeHeaderOrder';
import { Link } from 'react-router-dom';


function HeaderOrder(currentLocation) {
    console.log(currentLocation);
    if (currentLocation.currentLocation == "/") {
        return (
            <HomeHeaderOrder mainColor='#9a34bd' secondColor='#c89ff0' />
        );
    }
    else if (currentLocation.currentLocation == "/works") {
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
                <Link to="/" className={props.currentLocation == '/' ? 'bullets__item _active' : 'bullets__item'}></Link>
                <Link to="/works" className={props.currentLocation == '/works' ? 'bullets__item _active' : 'bullets__item'}></Link>
                <Link to="/contacts" className={props.currentLocation == '/contacts' ? 'bullets__item _active' : 'bullets__item'}></Link>
            </div>
        </header >
    );
}

export default Header;