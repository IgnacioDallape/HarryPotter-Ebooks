import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../Footer/Footer'

const Formulario = () => {
  return (
    <>
    <form >
        <div style={{display:'flex',justifyContent:'center', flexDirection:'column'}} className='container '>

        
            <div className="form-row" style={{padding:'1rem', gap:'2rem'}}>
                <div className="form-group ">
                <label for="inputEmail4">Email</label>
                <input type="email" className="form-control" id="inputEmail4" placeholder="Email"/>
                </div>
            </div>
            <div className="form-group " style={{padding:'1rem', gap:'2rem'}}>
                <label for="inputAddress">Direccion</label>
                <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St"/>
            </div>
            <div className="form-row" style={{padding:'1rem', gap:'2rem'}}>
                <div className="form-group ">
                <label for="inputCity">Pais</label>
                <input type="text" className="form-control" id="inputCity"/>
                </div>
                <div className="form-group ">
                <label for="inputState">Provincia</label>
                <select id="inputState" className="form-control">
                    <option selected>Choose...</option>
                    <option>...</option>
                </select>
                </div>
            </div>
            <div className="form-row" style={{padding:'1rem', gap:'2rem'}}>
                <div className="form-group ">
                <label for="inputState">Localidad</label>
                <select id="inputState" className="form-control">
                    <option selected>Choose...</option>
                    <option>...</option>
                </select>
                </div>
            </div>
            <div className="form-row" style={{padding:'1rem', gap:'2rem'}}>
                <div className="form-group  ">
                <label for="inputZip">Codigo Postal</label>
                <input type="text" className="form-control" id="inputZip"/>
                </div>
            </div>
            </div>
            <div className="form-row" style={{padding:'1rem', gap:'2rem'}}>
            <div className="form-group"  style={{display:'flex',justifyContent:'center'}}>
                <div className="form-check">
                <input className="form-check-input" type="checkbox" id="gridCheck"/>
                <label className="form-check-label" for="gridCheck" >
                    Guardar mis datos
                </label>
                </div>
            </div>
            <div style={{display:'flex',justifyContent:'center', paddingTop:'2rem'}}>

                <button type="submit" className="btn btn-primary">Sign in</button>
            </div>
        </div> 
    </form>
   
    </>
  )
}

export default Formulario