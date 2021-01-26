import React from 'react'

export default function Todo(props){
  const {title, description, _id, completed, imgUrl} = props
  return (
    <div className="todo">
      <img src={imgUrl} alt="" width={300} />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  )
}