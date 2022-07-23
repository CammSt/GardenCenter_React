import React from 'react'
import '../styles/TitleStyle.css'

export default function Title({title}) {
  return (
    <div className="titleContainer">
        <h4 className="titleContainer__Text">{title}</h4>
    </div>
  )
}
