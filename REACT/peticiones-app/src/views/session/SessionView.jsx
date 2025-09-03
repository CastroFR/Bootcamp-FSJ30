// rafc
import { useState } from 'react';
import { LoginComponent } from './components/LoginComponent';
import { RegisterComponent } from './components/RegisterComponent';

// FORMA VISTA EN CLASE DE RESOLVER EL RETO
export const SessionView = () => {
  const [typeForm, setTypeForm] = useState('login');

  return (
    <div className="row justify-content-center">
    <button className="btn btn-success col-1 m-2 p-2" onClick={() => {setTypeForm('register')}} >Sign Up</button>
    <button className="btn btn-primary col-1 m-2 p-2" onClick={()=>(setTypeForm('login'))}>Sign In</button>

    { typeForm === 'login' ?   <LoginComponent /> :  <RegisterComponent />}
    </div>
  )
}

// FORMA EN LA QUE YO LO RESOLVÍ
/* 
export const SessionView = () => {
  const [vistaComponent, setvistaComponent] = useState('login');

  return (
    <div>
      <h2>Session</h2>
      <button className='btn btn-danger ms-2' onClick={() => setvistaComponent('login')}>Iniciar Sesion</button>
      <button className='btn btn-primary ms-2' onClick={() => setvistaComponent('register')}>Registrarse</button>
      <div style={{ marginTop: 15 }}>
        {vistaComponent === 'login' && <LoginComponent />}
        {vistaComponent === 'register' && <RegisterComponent />}
      </div>
    </div>
  )
} */

// RETO RESUELTO
// Mostrar por medio de un boton, el componente que corresponda. Y no los dos a la vez.
// tanto para LoginComponent como RegisterComponent.
// ********** SessionView.jsx **********