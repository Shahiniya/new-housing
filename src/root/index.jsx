import React from 'react'
import Navbar from '../component/Navbar';
import {Routes,Route,Navigate} from 'react-router-dom';
import { navbar } from '../utils/navbar';


export const Root = () => {
  return (
    <>
    <Routes>
    <Route path='/' element={<Navigate to={'/home'} />} />
    
    <Route >
    {
      navbar.map(({id,path,Element,hidden,useParams}) => {
        return !useParams && hidden && <Route key={id} path={path} element={Element}/>
        
      })
    }
    </Route>


    <Route element={<Navbar/>}>
        {
          navbar.map(({id,path,Element,hidden,useParams}) => {
            return ((useParams || !hidden) && (<Route key={id} path={path} element={Element}/>
            ))
          })
        }
        </Route>
    </Routes>
    </>
  )
}
export default Root;