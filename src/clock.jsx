import React from 'react'
import { useState, useEffect } from 'react'

const Clock = () => {
  const [time, setTime] = useState('00:00:00')

  useEffect(() => {
    setInterval(() => {
      const today = new Date()
      const h = today.getHours()
      const m = today.getMinutes().toString().padStart(2, '0')
      const s = today.getSeconds().toString().padStart(2, '0')
      const time = `${h}:${m}:${s}`
      setTime(time)
    }, 1000)
  })  

  return (
    <>
    <div className="clock-container">
      <div className="clock">
        <h1>{time}</h1>
      </div>
      <footer>
        <a href="https://www.instagram.com/__fernandofernandess__/" target='_blank'>@__fernandofernandess__</a>
      </footer>
    </div>
    </> 
  )
}

export default Clock
