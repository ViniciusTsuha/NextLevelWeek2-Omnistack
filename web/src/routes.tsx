import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import TeacherList from './pages/TeacherList';
import TeacherForm from './pages/TeacherForm';
// import SignIn from './pages/SignIn';

// react-router-dom precisa instalar @type/react-router-dom já que nem todos usam/rodam TypeScript
// é utilizado para encaminhar rotas dentro da aplicação

function Routes() {
    return (
        <BrowserRouter>
            {/* <Route path="/signin" exact component={SignIn} /> */}
            <Route path="/" exact component={Landing} />
            <Route path="/study" component={TeacherList} />
            <Route path="/give-classes" component={TeacherForm} />
        </BrowserRouter>     
    );
}

export default Routes;