import React from 'react';
import {Link} from 'react-router-dom'
import { projects } from '../data/proyectos'

export default function ListadoProyectos() {
    const proyecto = (_, index) => {
        return (
            <article key={index} className='work-item'>
                <div className='mask'>
                    { <img src={projects[index].thumbnail} alt={''} /> }
                </div>
                <span>{projects[index].categoria}</span>
                <h2><Link to={'/project/' + projects[index].id}>{projects[index].nombre}</Link></h2>
                <h3>{projects[index].tecnologias}</h3>
            </article>)
    }

    const projectos = [0,1,2,3];
    return (
            <section className='works'>
                { projectos.map(proyecto) }
            </section>
    )
}
