import { useState } from 'react'
import colorData from './colorData.json'
import { Wrapper, Color } from './styles/app'

const App = () => {

  const [colors, setColors] = useState(colorData)

  const filterColor = (e) => {
    const value = e.target.value;
    if ( e && e.keyCode === 8 ) {
      setColors(colorData)
    } else {
    value ? setColors(colors.filter(color => color.toLowerCase().includes(value))) : setColors(colorData)
    }
  }

  return (

    <Wrapper>
      <header>CP Color Searcher Challenge</header>
      <input
      type="text"
      onKeyUp={filterColor}
      // onChange={filterColor}
      />
      <main>
        {colors.map(color => (
          <Color key={color} bg={color}></Color>
        ))}
      </main>
    </Wrapper>
  );
}

export default App;
