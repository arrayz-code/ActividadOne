import React from 'react';
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import Home from './routes/Home';
import Blog from './routes/Blog';
import Reserva from './routes/Reserva';
import Header from './components/Header';
import Consulta from './routes/Consulta';



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Header />}>
      <Route index element={<Home />} />
      <Route path="blog" element={<Blog />} />
      <Route path="reserva" element={<Reserva />} />
      <Route path="consulta" element={<Consulta />} />
    </Route>
  )
)

function App({routes}) {

  return (
    <>
      <RouterProvider router={router}/>
    </> 
  );
}

export default App;



