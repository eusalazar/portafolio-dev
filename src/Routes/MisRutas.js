import React from 'react';
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';
import Inicio from '../Componentes/Inicio';
import Portfolio from '../Componentes/Portfolio';
import Curriculum from '../Componentes/Curriculum';
import Contacto from '../Componentes/Contacto'
import { HeaderNav } from '../Componentes/Layout/HeaderNav';
import { FooterWeb } from '../Componentes/Layout/FooterWeb';
import Proyecto from '../Componentes/Proyecto';

export default function MisRutas() {
    return (
        <BrowserRouter>
            <HeaderNav/>
            <section className='content'>
            <Routes>
                <Route path='/' element={<Navigate to='/home'/>}/>
                <Route path='/home' element={<Inicio/>}/>
                <Route path='/portfolio' element={<Portfolio/>}/>
                <Route path='/resume' element={<Curriculum/>}/>
                <Route path='/contact' element={<Contacto/>}/>
                <Route path='/project/:id' element={<Proyecto/>}/>
                <Route path='/*' element={<h1 className='heading'>Error 404</h1>}/>

            </Routes>
            </section>

            <FooterWeb/>
        </BrowserRouter>
        )
}
