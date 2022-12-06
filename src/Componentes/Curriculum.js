import React from 'react';
import Pdf from '../assets/cv.pdf'

export default function Curriculum() {
    return (
        <div className='curriculum'>
            <h1 className='heading'>Curriculum</h1>
            <div className='foto'>
                <img src={'/images/eugenia.png'} alt={''}/>
            </div>
            <div className='perfil'>
                <div className='header-cv'>
                    <h1>Eugenia Salazar Acuña</h1>
                    <h4>Full Stack Developer</h4>
                    <h5>Tucumán, Argentina</h5>
                </div>
                    <div className='contacto'>
                        <br></br>
                        <a class="fa-brands fa-linkedin" href={'https://www.linkedin.com/in/eugeniadev/'}
                            target="_blank" rel="noreferrer"> </a>
                        <a class="fa-brands fa-square-github" href={'https://github.com/eusalazar'}
                            target="_blank" rel="noreferrer"> </a>
                        <a class="fa-solid fa-envelope" href={'eugeniasalazar745@gmail.com'}
                            target="_blank" rel="noreferrer" > </a>
                        <a class="fa-solid fa-file-pdf" href={Pdf} download="cv.pdf"
                            target="_blank" rel="noreferrer"> </a>
                </div>
            </div>
            <div className='skill'>
                <div className='uno'>
                    <h2>TECNOLOGIAS</h2>
                    <ul type='Circle'>
                        <li>HTML / Node Js</li>
                        <li>CSS / Express</li>
                        <li>JavaScript / Sequelize</li>
                        <li>jQuery / Next.js</li>
                        <li>Typescript / React</li>
                        <li>Redux / PostgreSql</li>
                        <li>Material UI / Bootstrap</li>
                        <li>MongoDB / Docker</li>
                    </ul>
                </div>
                <div className='dos'>
                    <h2>HABILIDADES</h2>
                    <ul type='Circle'>
                        <li>Aprendizaje continuo</li>
                        <li>Comunicación efectiva</li>
                        <li>Mentalidad de crecimiento</li>
                        <li>SCRUM</li>
                        <li>Trabajo en equipo</li>
                        <li>Trabajo en entorno multiculturales</li>
                        <li>Inteligencia emocional</li>
                    </ul>
                </div>
            </div>
            <div className='info'>
            <h2>FORMACION ACADEMICA</h2>
                <ul>
                    <li><strong>Curso Profesional de Arquitectura de Software</strong></li>
                    <p>Platzi</p>
                    <a href={'https://platzi.com/p/eugeniasalazar745/curso/1248-pro-arquitectura/diploma/detalle/'}
                        target="_blank" rel="noreferrer">Ver credencial</a>
                    <li><strong>Curso Práctico de Arquitectura Backend</strong></li>
                    <p>Platzi</p>
                    <a href={'https://platzi.com/p/eugeniasalazar745/curso/2164-practico-backend/diploma/detalle/'}
                        target="_blank" rel="noreferrer">Ver credencial</a>
                    <li><strong>Fundamentos de Arquitectura de Software</strong></li>
                    <p>Platzi</p>
                    <a href={'https://platzi.com/p/eugeniasalazar745/curso/1247-arquitectura-software/diploma/detalle/'}
                        target="_blank" rel="noreferrer">Ver credencial</a>
                    <li>Curso de Introducción al Desarrollo Backend</li>
                    <p>Platzi</p>
                    <a href={'https://platzi.com/p/eugeniasalazar745/curso/2508-introduccion-backend/diploma/detalle/'}
                        target="_blank" rel="noreferrer">Ver credencial</a>
                    <li><strong>Master en React</strong></li>
                    <p>Udemy</p>
                    <a href={'https://udemy-certificate.s3.amazonaws.com/image/UC-b08c24c0-a9c9-41e0-93fd-2c20607c89e6.jpg'}
                        target="_blank" rel="noreferrer">Ver credencial</a>
                    <li><strong>Full Stack Web Developer</strong></li>
                    <p>Henry 2021-2022-Bootcam con mas de 800 horas de cursado teorico-practico</p>
                    <li><strong>Introducción al Testing de software: para principiantes</strong></li>
                    <p>Udemy</p>
                    <a href={'https://udemy-certificate.s3.amazonaws.com/image/UC-809114e9-1da5-4357-a418-1434b2a6b894.jpg'}
                        target="_blank" rel="noreferrer">Ver credencial</a>
                    <li><strong>QA Testing: Guía básica para Qua y Robot Framework</strong></li>
                    <p>Udemy</p>
                    <a href={'https://udemy-certificate.s3.amazonaws.com/image/UC-bf3d8ad2-bf84-4b65-9d92-8da844d25138.jpg'}
                        target="_blank" rel="noreferrer">Ver credencial</a>
                    <li><strong>Community + Social MEDIA manager 2022</strong></li>
                    <p>Udemy</p>
                    <a href={'https://udemy-certificate.s3.amazonaws.com/image/UC-3c97b127-5b1d-45e6-b446-a10ab4dc4829.jpg'}
                        target="_blank" rel="noreferrer">Ver credencial</a>
                    <li><strong>Administración y gestión de empresas, general</strong></li>
                    <p>Centro Educativo Nacional Terciario CENT 73</p>
                </ul>
            </div>
            <div className='flex'>
            <div>
                <h2>EXPERIENCIA LABORAL</h2>
                <ul>
                    <li><strong>Henry Bootcam-Teach Assist</strong></li>
                    <p> 01-2022/05-2022, Buenos Aires, Argentina.
                        Coordinar la asistencia de los estudiantes durante
                        su trayecto en elbootcamp, planificar, desarrollar
                        actividades y resolver dudas.
                        Desarrollo de herramientas internas.</p>
                    <li><strong>CMG Financiera-Administrador Asistente</strong></li>
                    <p>2015/2018, Tucumán , Argentina.
                        Adminitracion, cobros, at. al cliente, organizacion de
                        vendedores y manejo de agenda.</p>
                    <li><strong>Burger King-Asistente de Marketing</strong></li>
                    <p>2012/2014, Tucumán , Argentina.
                        At. al cliente, eventos , publicidad, campañas de
                        promoción, stock, , organizacion.</p>
                </ul>
            </div>

            </div>

            <div className='experiencia'>
                <h2>EXPERIENCIA ACADEMICA</h2>
                    <ul>
                        <li><strong>FULL STACK: "Videogames-App"</strong></li>
                        <p>Marzo 2022
                        -Frontend: React | Redux | Pure CSS
                        -Backend: Node.js | Express | PostgreSQL
                        -API: rawg.co</p>
                    </ul>
            </div>
            <div className='experiencia'>
                <h2>IDIOMA</h2>
                <p>Español nativo</p>
                <p>Ingles A1 (Actualmente cursando en Platzi)</p>

            </div>
        </div>
    )
}
