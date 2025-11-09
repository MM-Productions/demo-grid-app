import { useState } from 'react'
import './App.css'
import GridItem from './components/GridItem'

const BASE_URL = import.meta.env.BASE_URL

const gridItems = [
  {
    id: 1,
    image: `${BASE_URL}assets/images/1.jpeg`,
    qrCode: `${BASE_URL}assets/qrcodes/1.png`,
    animation: 'blur-focus'
  },
  {
    id: 2,
    image: `${BASE_URL}assets/images/2.jpg`,
    qrCode: `${BASE_URL}assets/qrcodes/2.png`,
    animation: 'blur-focus'
  },
  {
    id: 3,
    image: `${BASE_URL}assets/images/3.jpeg`,
    qrCode: `${BASE_URL}assets/qrcodes/3.png`,
    animation: 'blur-focus'
  },
  {
    id: 4,
    image: `${BASE_URL}assets/images/4.jpg`,
    qrCode: `${BASE_URL}assets/qrcodes/4.png`,
    animation: 'blur-focus'
  },
  {
    id: 5,
    image: `${BASE_URL}assets/images/5.jpeg`,
    qrCode: `${BASE_URL}assets/qrcodes/5.png`,
    animation: 'blur-focus'
  },
  {
    id: 6,
    image: `${BASE_URL}assets/images/6.jpeg`,
    qrCode: `${BASE_URL}assets/qrcodes/6.png`,
    animation: 'blur-focus'
  },
  {
    id: 7,
    image: `${BASE_URL}assets/images/7.jpg`,
    qrCode: `${BASE_URL}assets/qrcodes/7.png`,
    animation: 'blur-focus'
  },
  {
    id: 8,
    image: `${BASE_URL}assets/images/8.jpg`,
    qrCode: `${BASE_URL}assets/qrcodes/8.png`,
    animation: 'blur-focus'
  },
  {
    id: 9,
    image: `${BASE_URL}assets/images/9.jpg`,
    qrCode: `${BASE_URL}assets/qrcodes/9.png`,
    animation: 'blur-focus'
  },
  {
    id: 10,
    image: `${BASE_URL}assets/images/10.jpg`,
    qrCode: `${BASE_URL}assets/qrcodes/10.png`,
    animation: 'blur-focus'
  },
]

function App() {
  const [showingQR, setShowingQR] = useState({})
  const [showFullscreenPrompt, setShowFullscreenPrompt] = useState(true)

  const handleItemClick = (itemId, currentlyShowingQR) => {
    if (currentlyShowingQR) {
      // Если показан QR код, скрываем его
      setShowingQR(prev => ({
        ...prev,
        [itemId]: false
      }))
    } else {
      // Показываем QR код
      setShowingQR(prev => ({
        ...prev,
        [itemId]: true
      }))
    }
  }

  const handleQRTimeout = (itemId) => {
    setShowingQR(prev => ({
      ...prev,
      [itemId]: false
    }))
  }

  const handleEnterFullscreen = async () => {
    try {
      if (document.documentElement.requestFullscreen) {
        await document.documentElement.requestFullscreen()
      } else if (document.documentElement.webkitRequestFullscreen) {
        await document.documentElement.webkitRequestFullscreen()
      } else if (document.documentElement.mozRequestFullScreen) {
        await document.documentElement.mozRequestFullScreen()
      } else if (document.documentElement.msRequestFullscreen) {
        await document.documentElement.msRequestFullscreen()
      }
    } catch (err) {
      console.log('Fullscreen error:', err)
    }
    setShowFullscreenPrompt(false)
  }

  const handleSkipFullscreen = () => {
    setShowFullscreenPrompt(false)
  }

  return (
    <div className="app">
      {showFullscreenPrompt && (
        <div className="fullscreen-prompt-overlay">
          <div className="fullscreen-prompt">
            <h2>Enter Fullscreen Mode?</h2>
            <p>For the best viewing experience, we recommend fullscreen</p>
            <div className="fullscreen-prompt-buttons">
              <button className="fullscreen-btn primary" onClick={handleEnterFullscreen}>
                Yes, Enter Fullscreen
              </button>
              <button className="fullscreen-btn secondary" onClick={handleSkipFullscreen}>
                No, Thanks
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="grid-container">
        {gridItems.map((item) => (
          <GridItem
            key={item.id}
            item={item}
            showQR={showingQR[item.id]}
            onClick={handleItemClick}
            onQRTimeout={handleQRTimeout}
          />
        ))}
      </div>
    </div>
  )
}

export default App
