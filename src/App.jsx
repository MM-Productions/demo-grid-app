import { useState } from 'react'
import './App.css'
import GridItem from './components/GridItem'

const BASE_URL = import.meta.env.BASE_URL

const gridItems = [
  {
    id: 1,
    image: `${BASE_URL}assets/images/1.jpeg`,
    qrCode: `${BASE_URL}assets/qrcodes/1.png`,
    animation: 'flip'
  },
  {
    id: 2,
    image: `${BASE_URL}assets/images/2.jpg`,
    qrCode: `${BASE_URL}assets/qrcodes/2.png`,
    animation: 'zoom-fade'
  },
  {
    id: 3,
    image: `${BASE_URL}assets/images/3.jpeg`,
    qrCode: `${BASE_URL}assets/qrcodes/3.png`,
    animation: 'slide-up'
  },
  {
    id: 4,
    image: `${BASE_URL}assets/images/4.jpg`,
    qrCode: `${BASE_URL}assets/qrcodes/4.png`,
    animation: 'ripple'
  },
  {
    id: 5,
    image: `${BASE_URL}assets/images/5.jpeg`,
    qrCode: `${BASE_URL}assets/qrcodes/5.png`,
    animation: 'rotate-scale'
  },
  {
    id: 6,
    image: `${BASE_URL}assets/images/6.jpeg`,
    qrCode: `${BASE_URL}assets/qrcodes/6.png`,
    animation: 'grid-split'
  },
  {
    id: 7,
    image: `${BASE_URL}assets/images/7.jpg`,
    qrCode: `${BASE_URL}assets/qrcodes/7.png`,
    animation: 'fade-cross'
  },
  {
    id: 8,
    image: `${BASE_URL}assets/images/8.jpg`,
    qrCode: `${BASE_URL}assets/qrcodes/8.png`,
    animation: 'bounce-scale'
  },
  {
    id: 9,
    image: `${BASE_URL}assets/images/9.jpg`,
    qrCode: `${BASE_URL}assets/qrcodes/9.png`,
    animation: 'diagonal-wipe'
  },
  {
    id: 10,
    image: `${BASE_URL}assets/images/10.jpg`,
    qrCode: `${BASE_URL}assets/qrcodes/10.png`,
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
