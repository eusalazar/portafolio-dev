import React from 'react';
import {Link} from 'react-router-dom'
import { FormattedMessage } from 'react-intl';

import { projects } from '../data/proyectos'

export default function ListadoProyectos({limite}) {
    const proyecto = (_, index) => {
        return (
            <article key={index} className='work-item'>
                <div className='mask'>
                    { <img src={projects[index].thumbnail} alt={''} /> }
                </div>
                <span><FormattedMessage id={`app.projects.${index}.categoria`} /></span>
                <h2><Link to={'/proyecto/' + proyecto.id}> <FormattedMessage id={`app.projects.${index}.nombre`} /></Link></h2>
                <h3><FormattedMessage id={`app.projects.${index}.tecnologias`} /></h3>
            </article>)
    }

    const projectos = [0,1,2,3];
    return (
            <section className='works'>
                { projectos.map(proyecto) }
            </section>
    )
}
