import { Routes, Route } from 'react-router-dom';
import { publicRoutes } from './Routes';
import { Fragment } from 'react';
import './App.css';
import DefaultLayout from './components/layouts/DefaultLayout';

function App() {
  return (
    <>
      <Routes>
        {
          publicRoutes.map((route, index) => {
            const Page = route.components;
            let Layout = DefaultLayout
            if (route.layout)
              Layout=route.layout
            else if(route.layout===null)
              Layout = Fragment
            return (
              <Route key={index} path={route.path} element={<Layout><Page /></Layout>} />
            )
          })
        }
      </Routes>
    </>
    
  );
}

export default App;
