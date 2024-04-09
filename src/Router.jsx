import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Content from './pages/Content'

const MixinGuide = React.lazy(() => import('./pages/guide/MixinGuide'));
const Input = React.lazy(() => import('./pages/guide/Input'));
const Button = React.lazy(() => import('./pages/guide/Button'));
const Typo = React.lazy(() => import('./pages/guide/Typo'));
const Table = React.lazy(() => import('./pages/guide/Table'));
const Tab = React.lazy(() => import('./pages/guide/Tab'));
const Modal = React.lazy(() => import('./pages/guide/Modal'));

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Content />} />
                <Route path='/mixin' element={<MixinGuide />} />
                <Route path='/button' element={<Button />} />
                <Route path='/input' element={<Input />} />
                <Route path='/typo' element={<Typo />} />
                <Route path='/table' element={<Table />} />
                <Route path='/tab' element={<Tab />} />
                <Route path='/modal' element={<Modal />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router