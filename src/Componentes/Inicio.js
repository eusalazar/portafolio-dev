import React from 'react';
import {Link} from 'react-router-dom'
import ListadoProyectos from './ListadoProyectos';
import { FormattedMessage } from 'react-intl';


export default function Inicio() {
    return (
        <div className='home'>
            <h1>
                <FormattedMessage
                    id='app.header'
                >
                </FormattedMessage><strong> Eugenia Salazar Acuña</strong>-
                <strong>Full Stack Developer</strong>
            </h1>
            <br></br>
            <h2 className='title'>
                <Link to='/contacto'>
                    <FormattedMessage id="app.header.button-text" />
                </Link>
            </h2>

            <section className='lasts-works'>
                <h2 className='heading'>
                    <FormattedMessage id="app.header.h2"/>
                </h2>
                <ListadoProyectos limite='2'/>
            </section>

            </div>
    )
}
