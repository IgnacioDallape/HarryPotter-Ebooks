import React, { useEffect, useState } from 'react'
import { useParams, useSearchParams } from 'react-router-dom'

const Libro1 = (props) => {
    const id = useParams()
    const [params, setparams] = useState([])

    useEffect(() => {
      
    }, [id])
    


  return (
    <div>Libro1</div>
  )
}

export default Libro1