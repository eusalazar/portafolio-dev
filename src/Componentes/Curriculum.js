import React from 'react';
import Pdf from '../assets/cv.pdf';
import { FormattedMessage } from 'react-intl';


export default function Curriculum() {
    return (
        <div className='curriculum'>
            <h1 className='heading'>
                <FormattedMessage id="app.cv.heading"/>
            </h1>
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
                    <h2>Skills</h2>
                    <ul type='Circle'>
                        <li><FormattedMessage id="app.skill.one"/></li>
                        <li><FormattedMessage id="app.skill.two"/></li>
                        <li><FormattedMessage id="app.skill.three"/></li>
                        <li><FormattedMessage id="app.skill.for"/></li>
                        <li><FormattedMessage id="app.skill.five"/></li>
                        <li><FormattedMessage id="app.skill.six"/></li>
                        <li><FormattedMessage id="app.skill.seven"/></li>
                        <li><FormattedMessage id="app.skill.eight"/></li>
                        <li><FormattedMessage id="app.skill.nine"/></li>
                        <li><FormattedMessage id="app.skill.ten"/></li>
                        <li><FormattedMessage id="app.skill.eleven"/></li>
                    </ul>
                </div>

            </div>
            <div className='flex'>
            <div>
                <h2><FormattedMessage id= "app.work.exp"/></h2>
                <ul>
                <li><strong><FormattedMessage id="app.exp.one"/></strong></li>
                    <p><FormattedMessage id="app.exp.contact1"/></p>
                    <p><FormattedMessage id="app.exp.contact2"/></p>

                    <li><strong>Henry Bootcam-Teach Assist</strong></li>
                    <p><FormattedMessage id="app.exp.two"/>
                    </p>
                </ul>
            </div>
            </div>
            <div className='experiencia'>
                <h2><FormattedMessage id="app.acad.exp"/></h2>
                    <ul>
                        <li><strong><FormattedMessage id="app.acad.exp.one"/></strong></li>
                        <p>
                        -Frontend: React | Redux | Pure CSS
                        -Backend: Node.js | Express | PostgreSQL
                        -API: rawg.co</p>
                    </ul>
            </div>
            <div className='info'>
            <h2><FormattedMessage id="app.acad.form"/></h2>
                <ul>
                    <li><strong><FormattedMessage id="app.acad.form.one"/></strong></li>
                    <p>Platzi</p>
                    <a href={'https://platzi.com/p/eugeniasalazar745/curso/2509-arquitectura-alta-concurrencia/diploma/detalle/'}
                        target="_blank" rel="noreferrer"><FormattedMessage id="app.credencial"/></a>
                    <li><strong><FormattedMessage id="app.acad.form.two"/></strong></li>
                    <p>Platzi</p>
                    <a href={'https://platzi.com/p/eugeniasalazar745/curso/1248-pro-arquitectura/diploma/detalle/'}
                        target="_blank" rel="noreferrer"><FormattedMessage id="app.credencial"/></a>
                    <li><strong><FormattedMessage id="app.acad.form.three"/></strong></li>
                    <p>Platzi</p>
                    <a href={'https://platzi.com/p/eugeniasalazar745/curso/2164-practico-backend/diploma/detalle/'}
                        target="_blank" rel="noreferrer"><FormattedMessage id="app.credencial"/></a>
                    <li><strong><FormattedMessage id="app.acad.form.for"/></strong></li>
                    <p>Platzi</p>
                    <a href={'https://platzi.com/p/eugeniasalazar745/curso/1247-arquitectura-software/diploma/detalle/'}
                        target="_blank" rel="noreferrer"><FormattedMessage id="app.credencial"/></a>
                    <li><strong><FormattedMessage id="app.acad.form.five"/></strong></li>
                    <p>Platzi</p>
                    <a href={'https://platzi.com/p/eugeniasalazar745/curso/2508-introduccion-backend/diploma/detalle/'}
                        target="_blank" rel="noreferrer"><FormattedMessage id="app.credencial"/></a>
                    <li><strong><FormattedMessage id="app.acad.form.six"/></strong></li>
                    <p>Udemy</p>
                    <a href={'https://udemy-certificate.s3.amazonaws.com/image/UC-b08c24c0-a9c9-41e0-93fd-2c20607c89e6.jpg'}
                        target="_blank" rel="noreferrer"><FormattedMessage id="app.credencial"/></a>
                    <li><strong>Full Stack Web Developer</strong></li>
                    <p><FormattedMessage id="app.acad.henry"/></p>
                    <li><strong><FormattedMessage id="app.acad.form.one"/></strong></li>
                    <p>Udemy</p>
                    <a href={'https://udemy-certificate.s3.amazonaws.com/image/UC-809114e9-1da5-4357-a418-1434b2a6b894.jpg'}
                        target="_blank" rel="noreferrer"><FormattedMessage id="app.credencial"/></a>
                    <li><strong><FormattedMessage id="app.acad.form.seven"/></strong></li>
                    <p>Udemy</p>
                    <a href={'https://udemy-certificate.s3.amazonaws.com/image/UC-bf3d8ad2-bf84-4b65-9d92-8da844d25138.jpg'}
                        target="_blank" rel="noreferrer"><FormattedMessage id="app.credencial"/></a>
                    <li><strong><FormattedMessage id="app.acad.form.eight"/></strong></li>
                    <p>Udemy</p>
                    <a href={'https://udemy-certificate.s3.amazonaws.com/image/UC-3c97b127-5b1d-45e6-b446-a10ab4dc4829.jpg'}
                        target="_blank" rel="noreferrer"><FormattedMessage id="app.credencial"/></a>
                        <li><strong><FormattedMessage id="app.acad.form.nine"/></strong></li>
                </ul>
            </div>
            <div className='experiencia'>
                <h2><FormattedMessage id="app.idiom"/></h2>
                <p><FormattedMessage id="app.idiom.one"/></p>
                <p><FormattedMessage id="app.idiom.two"/></p>
            </div>
        </div>
    )
}
