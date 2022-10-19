import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { proyectos } from '../data/proyectos';

export default function Proyecto() {

    const [proyecto, setProyecto] = useState({});
    const params = useParams();

    useEffect(() => {
        let proyecto = proyectos.filter(trabajo => trabajo.id === params.id)
        setProyecto(proyecto[0]) //lasigno el proy q filtro,el ind 0 seleciona el unico proyecto q hay dentro de esa variable
    }, [params.id]);

    return (
        <div className='page page-work'> {/*trabajo en el tamano de la imagen */}
            <div className='mask'>
                <img src={"/images/" + proyecto.id + ".png"} alt={''} />
            </div>
            <h1 className='heading'>{proyecto.nombre}</h1>
            <p>{proyecto.tecnologias}</p>
            <p>{proyecto.descripcion}</p>
            <a href={proyecto.url} target="_blank" rel="noreferrer">Ver el proyecto</a>
            <a href={proyecto.gitHub} target="_blank" rel="noreferrer">GitHub</a>

        </div>
    )
}
