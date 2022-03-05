import React from 'react'
import './layout.scss'

const Layout = (props) => {
  return (
    <div>
        <div className='container min-vw-100'>
            <div className='row'>
                {/*left hand side*/}
                <div className='col-12 col-md-6 text-center left-page'>
                    <h3 className='icon-color'>Twitter</h3>
                    <div><img src="https://i.imgur.com/gCar7Gr.png" width="350" height="350" alt="icon" /></div>
                </div>
                <div className='col-12 col-md-6 right-page'>
                  {props.children} 
                </div>
            </div>
        </div>
    </div>
  )
}

export default Layout