import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import './GridItem.css'

function GridItem({ item, showQR, onClick, onQRTimeout }) {
  const [isPressed, setIsPressed] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)
  const [progress, setProgress] = useState(100)

  // Таймер для автоматического скрытия QR кода через 5 секунд
  useEffect(() => {
    if (showQR) {
      setProgress(100)
      const timer = setTimeout(() => {
        onQRTimeout(item.id)
      }, 5000) // 5 секунд

      // Анимация прогресса
      const interval = setInterval(() => {
        setProgress((prev) => Math.max(0, prev - 0.8))
      }, 40)

      return () => {
        clearTimeout(timer)
        clearInterval(interval)
      }
    } else {
      setProgress(100)
    }
  }, [showQR, item.id, onQRTimeout])

  // Добавляем анимацию при любом переключении
  useEffect(() => {
    setIsAnimating(true)
    const timer = setTimeout(() => {
      setIsAnimating(false)
    }, 800) // Длительность самой длинной анимации

    return () => clearTimeout(timer)
  }, [showQR])

  const handleInteractionStart = (e) => {
    e.preventDefault()
    setIsPressed(true)
  }

  const handleInteractionEnd = (e) => {
    e.preventDefault()
    setIsPressed(false)
    onClick(item.id, showQR)
  }

  const handleMouseLeave = () => {
    setIsPressed(false)
  }

  return (
    <motion.div
      className={`grid-item ${isPressed ? 'pressed' : ''} ${isAnimating ? `animation-${item.animation}` : ''} ${showQR ? 'showing-qr' : ''}`}
      onMouseDown={handleInteractionStart}
      onMouseUp={handleInteractionEnd}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleInteractionStart}
      onTouchEnd={handleInteractionEnd}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.5,
        delay: item.id * 0.05,
        ease: [0.43, 0.13, 0.23, 0.96]
      }}
      whileHover={{
        scale: 1.02,
        transition: { duration: 0.2 }
      }}
      whileTap={{ scale: 0.98 }}
    >
      <motion.img
        src={showQR ? item.qrCode : item.image}
        alt={showQR ? `QR Code ${item.id}` : `Item ${item.id}`}
        className={`grid-item-image ${showQR ? 'qr-code' : ''}`}
        draggable="false"
        animate={showQR ? { rotateY: 360 } : { rotateY: 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      />
      {showQR && (
        <motion.div
          className="progress-bar"
          initial={{ width: "100%" }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.04, ease: "linear" }}
        />
      )}
    </motion.div>
  )
}

export default GridItem
