import React from 'react'

export const Home = (props) => {
  return (
    <div>
      <div className="tweets">
        {props.children}
      </div>
    </div>
  )
}
