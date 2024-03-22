import React from 'react';
import LoginComponent from './LoginComponent';
import { Routes, Route} from 'react-router-dom';
import NewfileComponent from './NewfileComponent';
import MainComponent from './MainComponent';
function App() {
  return (
    
     
      <div>
        
        <Routes>
          <Route path="/login" element={<LoginLayout />} />
          <Route path="/" element={<MainLayout />} />
         
          <Route path="/NewfileComponent" element={<NewFileLayout/>}/>
        </Routes>
      </div>
   
  );
}

function MainLayout() {
  return (
    <div>
      <h1>Main Page</h1>
      <MainComponent />
    </div>

  );
}


function LoginLayout() {
  return (
    <div>
      <h1>Login Page</h1>
      <LoginComponent />
    </div>
  );
}


function NewFileLayout(){
  return (
    <div>
      <h1> success</h1>
    <NewfileComponent/>
    </div>

  )
}


export default App;
