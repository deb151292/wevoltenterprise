


import React,{useState} from 'react'
import {Navbar} from './component/Navbar'
import Alerts from './component/Alart'

import RoutePages from './pages/Route'

export default function App() {
    const [page, setPage] = useState('home');
    const [alert, setalert] = useState(null)


    const setpages= (pagename) => {
        setPage(pagename);
      }

      const showalert = (alerttype,message) => {
        setalert ({
          msg: message,
          type: alerttype
        })
        setTimeout (() => {
          setalert(null)
        }, 2000
      )
      }
      
 
  return (
    <>
     <Navbar handlepage={setpages} page={page} alerts={alert}/>
     <Alerts alerts={alert} />
     <RoutePages handlepage={setpages} page={page} showalert={showalert} />
     
    </>
  )
}
