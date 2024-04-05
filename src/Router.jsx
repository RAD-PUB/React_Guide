import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Content from './pages/Content'
import Form from './pages/Form'
import Typo from './pages/Typo'
import Modal from './pages/Modal'
const MixinGuide = React.lazy(() => import('./pages/MixinGuide'));
const Input = React.lazy(() => import('./pages/Input'));

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Content />} />
                <Route path='/mixin' element={<MixinGuide />} />
                <Route path='/input' element={<Input />} />
                <Route path='/form' element={<Form />} />
                <Route path='/modal' element={<Modal />} />
                <Route path='/title' element={<Typo />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router