import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import { projects } from '../data/proyectos'


export default function Proyecto(index) {

    const [proyecto, setProyecto] = useState({});
    const params = useParams();

    useEffect(() => {
        let proyecto = projects.filter(trabajo => trabajo.id === params.id)
        setProyecto(proyecto[0]) //le asigno el proy q filtro,el ind 0 seleciona el unico proyecto q hay dentro de esa variable
    }, [params.id]);

    return (
        <div className='page page-work'> {/*trabajo en el tamano de la imagen */}
            <div className='mask'>
                <img src={"/images/" + proyecto.id + ".png"} alt={''} />
            </div>
            <h1 className='heading'><FormattedMessage id="app.cv.heading"/> {proyecto.nombre}</h1>
            <p><FormattedMessage id={`app.projects.${index}.tecnologias`} /></p>
            <p><FormattedMessage id={`app.projects.${index}.descripcion`} /></p>
            <a href={proyecto.url} target="_blank" rel="noreferrer">Ver el proyecto</a>
            <a href={proyecto.gitHub} target="_blank" rel="noreferrer">GitHub</a>

        </div>
    )
}
