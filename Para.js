import React from 'react'

function Para({props}) {
    console.log(props)
  return (
    <div>
    <div className="parag">
        <p> {props}</p>
        </div>
    </div>
  )
}

export default Para