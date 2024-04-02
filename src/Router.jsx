import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Content from './pages/Content'
import Form from './pages/Form'
import Title from './pages/Title'

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Content />} />
                <Route path='/form' element={<Form />} />
                <Route path='/title' element={<Title />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router