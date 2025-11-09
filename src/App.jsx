import GridItem from './components/GridItem';
import './App.css'

function App() {
  // Generate placeholder SVG images with different colors
  const generatePlaceholder = (color, number) => {
    const svg = `
      <svg width="400" height="400" xmlns="http://www.w3.org/2000/svg">
        <rect width="400" height="400" fill="${color}"/>
        <text x="50%" y="50%" font-size="80" fill="white" text-anchor="middle" dy=".3em" font-family="Arial">
          ${number}
        </text>
      </svg>
    `;
    return `data:image/svg+xml,${encodeURIComponent(svg)}`;
  };

  const colors = [
    '#FF6B6B', '#4ECDC4', '#45B7D1', '#FFA07A', 
    '#98D8C8', '#F7DC6F', '#BB8FCE', '#85C1E2',
    '#F8B739'
  ];

  // Sample grid items - in production, these would come from props or API
  const gridItems = [
    {
      id: 1,
      image: generatePlaceholder(colors[0], '1'),
      title: 'Item 1',
      qrValue: 'https://example.com/item1'
    },
    {
      id: 2,
      image: generatePlaceholder(colors[1], '2'),
      title: 'Item 2',
      qrValue: 'https://example.com/item2'
    },
    {
      id: 3,
      image: generatePlaceholder(colors[2], '3'),
      title: 'Item 3',
      qrValue: 'https://example.com/item3'
    },
    {
      id: 4,
      image: generatePlaceholder(colors[3], '4'),
      title: 'Item 4',
      qrValue: 'https://example.com/item4'
    },
    {
      id: 5,
      image: generatePlaceholder(colors[4], '5'),
      title: 'Item 5',
      qrValue: 'https://example.com/item5'
    },
    {
      id: 6,
      image: generatePlaceholder(colors[5], '6'),
      title: 'Item 6',
      qrValue: 'https://example.com/item6'
    },
    {
      id: 7,
      image: generatePlaceholder(colors[6], '7'),
      title: 'Item 7',
      qrValue: 'https://example.com/item7'
    },
    {
      id: 8,
      image: generatePlaceholder(colors[7], '8'),
      title: 'Item 8',
      qrValue: 'https://example.com/item8'
    },
    {
      id: 9,
      image: generatePlaceholder(colors[8], '9'),
      title: 'Item 9',
      qrValue: 'https://example.com/item9'
    }
  ];

  return (
    <div className="app">
      <h1 className="app-title">Demo Grid Gallery</h1>
      <p className="app-subtitle">Click any image to reveal QR code</p>
      <div className="grid-container">
        {gridItems.map(item => (
          <GridItem
            key={item.id}
            image={item.image}
            title={item.title}
            qrValue={item.qrValue}
          />
        ))}
      </div>
    </div>
  )
}

export default App
