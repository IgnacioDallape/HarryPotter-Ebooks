import React, { useEffect, useState } from 'react'
import Api from '../Api/Api'
import { Link } from 'react-router-dom'

const Books = () => {
  
  const [api, setApi] = useState([])

  const fetchApi = () => {
    fetch('https://www.googleapis.com/books/v1/volumes?q=Harry%20Potter')
      .then((results) => results.json())
      .then((resultsApi) => {
        setApi(resultsApi.items)
      .catch('Cargando...')
        console.log(resultsApi)
      })
  }
    
  // Llamar a la función fetchApi en el montaje inicial del componente
  useEffect(() => {
    fetchApi()
  }, [])

  return (
    <>
      <div>
        <ul style={{ margin: 0, padding: '3rem' }}>
          {api.length > 0 && (
            <>
              {api.map((item, index) => (
                <div >
                <div key={item.id} style={{ display: 'flex', justifyContent: 'center', marginBottom: '1rem'}}>
                  <img src={item.volumeInfo.imageLinks.thumbnail} alt={`Imagen ${index}`} style={{ width: '200px', height: 'auto', marginRight: '1rem' }} />
                </div>
                <div style={{paddingBottom:'3rem', display:'flex', justifyContent:'center'}}>

                  <Link to={`/api/${index}`} style={{ gap: '2rem', width:'10rem' }} className='nameBooks'>
                    <h5 style={{fontFamily:'cursive'}}>{item.volumeInfo.title.toUpperCase()}</h5> 
                  </Link>
                </div>
                </div>
                
              ))}
            </>
          )}
        </ul>
      </div>
    </>
  )
}

export default Books
