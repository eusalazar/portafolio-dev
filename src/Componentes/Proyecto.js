import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { projects } from '../data/proyectos';
import { FormattedMessage } from 'react-intl';

export default function Proyecto() {
    const [proyecto, setProyecto] = useState({});
    const [index, setIndex] = useState();
    const params = useParams();

    useEffect(() => {
        let proyecto = projects.filter(trabajo => trabajo.id === params.id)
        setProyecto(proyecto[0]) //lasigno el proy q filtro,el ind 0 seleciona el unico proyecto q hay dentro de esa variable
    }, [params.id]);

    useEffect(() => {
        projects.forEach((project, i) => {
            if(project.id === params.id) {
                setIndex(i);
            }
        })

    }, [proyecto, params.id]);

    return (
        <section className='works'>
            <div className='page page-work'> {/*trabajo en el tamano de la imagen */}
                <div className='mask'>
                    <img src={"/images/" + proyecto.id + ".png"} alt={''} />
                </div>
                <h1 className='heading'>{proyecto.nombre}</h1>
                <p><FormattedMessage id={`app.projects.${index}.tecnologias`} /> </p>
                <p><FormattedMessage id={`app.projects.${index}.descripcion`} /> </p>
                <a href={proyecto.url} target="_blank" rel="noreferrer"><FormattedMessage id="app.button.proj"/></a>
                <a href={proyecto.gitHub} target="_blank" rel="noreferrer">GitHub</a>

            </div>
        </section>
    )
}
