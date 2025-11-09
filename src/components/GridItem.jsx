import { useState } from 'react'
import './GridItem.css'

function GridItem({ item, onClick }) {
  const [isPressed, setIsPressed] = useState(false)

  const handleInteractionStart = (e) => {
    e.preventDefault()
    setIsPressed(true)
  }

  const handleInteractionEnd = (e) => {
    e.preventDefault()
    setIsPressed(false)
    onClick(item)
  }

  const handleMouseLeave = () => {
    setIsPressed(false)
  }

  return (
    <div
      className={`grid-item ${isPressed ? 'pressed' : ''}`}
      onMouseDown={handleInteractionStart}
      onMouseUp={handleInteractionEnd}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleInteractionStart}
      onTouchEnd={handleInteractionEnd}
    >
      <img
        src={item.image}
        alt={`Item ${item.id}`}
        className="grid-item-image"
        draggable="false"
      />
    </div>
  )
}

export default GridItem
