import React from 'react';
import {Link} from 'react-router-dom'
import ListadoProyectos from './ListadoProyectos';

export default function Inicio() {
    return (
        <div className='home'>
            <h1>
                Bienvenidos a mi Portfolio soy <strong>Eugenia Salazar Acuña</strong>-
                <strong>Full Stack Developer</strong>.
            </h1>
            <br></br>
            <h2 className='title'>
                <Link to='/contacto'>Contacta conmigo</Link>
            </h2>

            <section className='lasts-works'>
                <h2 className='heading'>Algunos de mis proyectos</h2>
                <ListadoProyectos limite='2'/>
            </section>

            </div>
    )
}
