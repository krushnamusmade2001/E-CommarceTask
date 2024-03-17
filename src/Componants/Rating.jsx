import React from 'react'

const Rating = ({ stars,count}) => {
  return (
    <div>
      <div>{stars}{count}</div>
    </div>
  )
}

export default Rating
