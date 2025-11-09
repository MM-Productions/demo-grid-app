import { useState } from 'react'
import './App.css'
import GridItem from './components/GridItem'

const gridItems = [
  {
    id: 1,
    image: '/assets/images/1.jpeg',
    qrCode: '/assets/qrcodes/1.png',
    animation: 'flip'
  },
  {
    id: 2,
    image: '/assets/images/2.jpg',
    qrCode: '/assets/qrcodes/2.png',
    animation: 'zoom-fade'
  },
  {
    id: 3,
    image: '/assets/images/3.jpeg',
    qrCode: '/assets/qrcodes/3.png',
    animation: 'slide-up'
  },
  {
    id: 4,
    image: '/assets/images/4.jpg',
    qrCode: '/assets/qrcodes/4.png',
    animation: 'ripple'
  },
  {
    id: 5,
    image: '/assets/images/5.jpeg',
    qrCode: '/assets/qrcodes/5.png',
    animation: 'rotate-scale'
  },
  {
    id: 6,
    image: '/assets/images/6.jpeg',
    qrCode: '/assets/qrcodes/6.png',
    animation: 'grid-split'
  },
  {
    id: 7,
    image: '/assets/images/7.jpg',
    qrCode: '/assets/qrcodes/7.png',
    animation: 'fade-cross'
  },
  {
    id: 8,
    image: '/assets/images/8.jpg',
    qrCode: '/assets/qrcodes/8.png',
    animation: 'bounce-scale'
  },
  {
    id: 9,
    image: '/assets/images/9.jpg',
    qrCode: '/assets/qrcodes/9.png',
    animation: 'diagonal-wipe'
  },
  {
    id: 10,
    image: '/assets/images/10.jpg',
    qrCode: '/assets/qrcodes/10.png',
    animation: 'blur-focus'
  },
]

function App() {
  const [selectedItem, setSelectedItem] = useState(null)

  const handleItemClick = (item) => {
    setSelectedItem(item)
  }

  const handleClose = () => {
    setSelectedItem(null)
  }

  return (
    <div className="app">
      <div className="grid-container">
        {gridItems.map((item) => (
          <GridItem
            key={item.id}
            item={item}
            onClick={handleItemClick}
          />
        ))}
      </div>

      {selectedItem && (
        <div
          className="modal-overlay"
          onClick={handleClose}
          onTouchEnd={handleClose}
        >
          <div className={`modal-content animation-${selectedItem.animation}`}>
            <img
              src={selectedItem.qrCode}
              alt="QR Code"
              className="qr-code-image"
            />
          </div>
        </div>
      )}
    </div>
  )
}

export default App
