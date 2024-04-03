import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Content from './pages/Content'
import Form from './pages/Form'
import Title from './pages/Title'
import Modal from './pages/Modal'
import MixinGuide from './pages/MixinGuide'

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Content />} />
                <Route path='/form' element={<Form />} />
                <Route path='/title' element={<Title />} />
                <Route path='/modal' element={<Modal />} />
                <Route path='/mixin' element={<MixinGuide />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router