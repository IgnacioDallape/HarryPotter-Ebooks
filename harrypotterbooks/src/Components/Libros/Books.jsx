import React, { useEffect, useState } from 'react'
import Api from '../Api/Api'
import { Link } from 'react-router-dom'
import data from '../Json/data.json';



const Books = () => {
  
  const [api, setApi] = useState([])
  const [json, setJson] = useState(data)

  const fetchApi = () => {
    fetch('https://www.googleapis.com/books/v1/volumes?q=Harry%20Potter')
      .then((results) => results.json())
      .then((resultsApi) => {
        setApi(resultsApi.items)
      
        console.log(resultsApi)
      })
  }
    
  // Llamar a la función fetchApi en el montaje inicial del componente
  useEffect(() => {
    fetchApi()
  }, [])

  return (
    <>
  <ul style={{ margin: 0, padding: '3rem' }}>
    {api.length > 0 && (
      <>
            <div style={{ display: 'flex', flexDirection: 'row', flexWrap:'wrap', justifyContent:'space-evenly', padding:'3rem'}} className='backgroundBooks'>

            {api.map((item, index) => (
              <div key={item.id} style={{ display: 'flex', justifyContent: 'center', marginBottom: '1rem',flexWrap:'wrap'}} className='aumentoImg'>
                <div style={{paddingBottom:'2rem', paddingLeft:'3rem'}} >

                <img src={item.volumeInfo.imageLinks.thumbnail} alt={`Imagen ${index}`} style={{ width: '200px', height: 'auto', marginRight: '1rem',borderRadius:'0.5rem' }} />
                <li to={`/api/${index}`} style={{ gap: '2rem', width:'10rem' }} className='nameBooks'>
                  <h6 style={{fontFamily:'revert-layer',width:'5rem',display:'flex', justifyContent:'flex-start'}}>{item.volumeInfo.title.toUpperCase()}</h6>
                  <h6 >{data[index].price} </h6>
                </li>
                </div>

              </div>
            ))
        } </div>
      </>
    )}
  </ul>
 

    </>
  )
}

export default Books
