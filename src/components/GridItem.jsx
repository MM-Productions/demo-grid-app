import { useState } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import './GridItem.css';

function GridItem({ image, title, qrValue }) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="grid-item" onClick={handleClick}>
      <div className={`grid-item-inner ${isFlipped ? 'flipped' : ''}`}>
        <div className="grid-item-front">
          <img src={image} alt={title} />
        </div>
        <div className="grid-item-back">
          <QRCodeSVG 
            value={qrValue} 
            size={200}
            level="H"
            includeMargin={true}
          />
          <p className="qr-label">{title}</p>
        </div>
      </div>
    </div>
  );
}

export default GridItem;
