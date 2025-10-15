import React from 'react'
import './MyWork.css'
import mywork_data from '../../assets/myWork/mywork_data'

const MyWork = () => {
  return (
      <div className='mywork'>
          <div className="mywork-title">
              <h1>My Work</h1>
              <img src="" alt="errro"/>
          </div>  
          <div className="mywork-container">
              {mywork_data.map((work,index) => {
                  return <img key={ index} src={work. w_img} alt="image not shown"/>
              })}
          </div>

    </div>
  )
}

export default MyWork