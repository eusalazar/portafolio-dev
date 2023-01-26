import React from 'react';
import { NavLink } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';

export const HeaderNav = () => {
    return (
        <header className='header'>
            <div className='logo'>
                <span>E</span>
                <h3>Eugenia Salazar Acuña</h3>
            </div>

            <nav>
                <ul>
                    <li>
                        <NavLink to='/inicio' className={({isActive}) => isActive ? "active" : ""}><FormattedMessage id="app.header.hom"/></NavLink>
                    </li>
                    <li>
                        <NavLink to='/portfolio' className={({isActive}) => isActive ? "active" : ""}><FormattedMessage id="app.header.port"/></NavLink>
                    </li>
                    <li>
                        <NavLink to='/curriculum' className={({isActive}) => isActive ? "active" : ""}><FormattedMessage id="app.header.resum"/></NavLink>
                    </li>
                    <li>
                        <NavLink to='/contacto' className={({isActive}) => isActive ? "active" : ""}><FormattedMessage id="app.header.cont"/></NavLink>
                    </li>
                </ul>
            </nav>

        </header>
    )
}
