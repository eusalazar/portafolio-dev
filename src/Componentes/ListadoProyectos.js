import React from 'react';
import { proyectos } from '../data/proyectos';
import {Link} from 'react-router-dom'

export default function ListadoProyectos({limite}) {
    return (
            <section className='works'>
            {
                proyectos.slice(0,limite).map(proyecto => { //slice p mostrar limite de proyectos en inicio
                    return (
                        <article key={proyecto.id} className='work-item'>
                            <div className='mask'>
                                <img src={proyecto.thumbnail} alt={''} />
                            </div>
                            <span>{proyecto.categoria}</span>
                            <h2><Link to={'/proyecto/' + proyecto.id}> {proyecto.nombre}</Link></h2>
                            <h3>{proyecto.tecnologias}</h3>
                        </article>)
                })
            }
            </section>
    )
}
