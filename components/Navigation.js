import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Menu from './home/Menu'

function Navigation() {
    return (
       <div>
           <div className="row">
           
                <div className="col-lg-3">

                    <img src="./img/home/logo.jpg" width="150" style = {{margin:"20px"}} />
            
                </div>
             

              
                <div className="col-lg-5">

                    <Menu/>
            
                </div>
               
                {/*iconos a la derecha*/}
                <div className="col-lg-4">
                    <div  className="d-flex justify-content-end p-3">
                        <a href="" className = "icono-menu">
                            <i className="fas fa-search"></i>
                        </a>
                        <a href="" className = "icono-menu">
                            <i className="far fa-user"></i>
                        </a>
                        <a href="" className = "icono-menu">
                            <i className="far fa-heart"></i>
                        </a>
                        <a href="" className = "icono-menu">
                            <i className="far fa-clipboard"></i>
                        </a>
                    </div>
                    
                </div>
               

            </div>   
               

              
           
       </div>



    )
}

export default Navigation
