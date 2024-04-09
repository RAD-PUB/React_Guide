import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Content from './pages/Content'
import Typo from './pages/Typo'
import Modal from './pages/Modal'
import Button from './pages/Button'
import Table from './pages/Table'
import Tab from './pages/Tab'

const MixinGuide = React.lazy(() => import('./pages/MixinGuide'));
const Input = React.lazy(() => import('./pages/Input'));

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