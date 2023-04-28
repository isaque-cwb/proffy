import { BrowserRouter, Routes, Route } from 'react-router-dom'
import TeacherList from './pages/TeacherList'
import TeacherForm from './pages/TeacherForm'
import Landing from './pages/Landing'



function MyRoutes() {
    return (
        <BrowserRouter>
            <Routes >
                <Route path='/' element={<Landing />} />
                <Route path='/study' element={<TeacherList />} />
                <Route path='/give-classes' element={<TeacherForm   />} />
            </Routes>
        </BrowserRouter>
    )
}


export default MyRoutes;