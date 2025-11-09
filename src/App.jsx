import { useState } from 'react'
import './App.css'
import GridItem from './components/GridItem'

// Здесь будут ваши изображения
// После добавления картинок, обновите пути
const gridItems = [
  {
    id: 1,
    image: '/src/assets/images/image1.jpg',
    qrCode: '/src/assets/qrcodes/qr1.png',
    animation: 'flip'
  },
  {
    id: 2,
    image: '/src/assets/images/image2.jpg',
    qrCode: '/src/assets/qrcodes/qr2.png',
    animation: 'zoom-fade'
  },
  {
    id: 3,
    image: '/src/assets/images/image3.jpg',
    qrCode: '/src/assets/qrcodes/qr3.png',
    animation: 'slide-up'
  },
  {
    id: 4,
    image: '/src/assets/images/image4.jpg',
    qrCode: '/src/assets/qrcodes/qr4.png',
    animation: 'ripple'
  },
  {
    id: 5,
    image: '/src/assets/images/image5.jpg',
    qrCode: '/src/assets/qrcodes/qr5.png',
    animation: 'rotate-scale'
  },
  {
    id: 6,
    image: '/src/assets/images/image6.jpg',
    qrCode: '/src/assets/qrcodes/qr6.png',
    animation: 'grid-split'
  },
  {
    id: 7,
    image: '/src/assets/images/image7.jpg',
    qrCode: '/src/assets/qrcodes/qr7.png',
    animation: 'fade-cross'
  },
  {
    id: 8,
    image: '/src/assets/images/image8.jpg',
    qrCode: '/src/assets/qrcodes/qr8.png',
    animation: 'bounce-scale'
  },
  {
    id: 9,
    image: '/src/assets/images/image9.jpg',
    qrCode: '/src/assets/qrcodes/qr9.png',
    animation: 'diagonal-wipe'
  },
  {
    id: 10,
    image: '/src/assets/images/image10.jpg',
    qrCode: '/src/assets/qrcodes/qr10.png',
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
