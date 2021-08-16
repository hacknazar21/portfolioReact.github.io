import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const WorksHeaderOrder = (props) => {
    const css = `
    .header__item {
        color: ${props.mainColor};
    }
    .bullets__item {
        background-color: ${props.secondColor};
    }
    .bullets__item._active {
        background-color: ${props.mainColor};
    }
`;
    return (
        <Fragment>
            <li className="header__item"><Link to="/portfolioReact.github.io/contacts">Контакты</Link></li>
            <li className="header__item"><Link to="/portfolioReact.github.io/works">Работы</Link> </li>
            <li className="header__item"><Link to="/portfolioReact.github.io/">Главная</Link> </li>
            <style>
                {css}
            </style>
        </Fragment>
    );
}

export default WorksHeaderOrder;