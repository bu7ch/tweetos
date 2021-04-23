import React from 'react'

 const Home = (props) => {
  return (
    <div>
      <div className="tweets">
        {props.children}
      </div>
    </div>
  )
}

export default Home;