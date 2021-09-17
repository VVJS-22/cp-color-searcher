import { useState, useEffect } from 'react'
import colorData from './colorData.json'
import { Wrapper, Color } from './styles/app'

const App = () => {

  const [colors, setColors] = useState(colorData)
  const [value, setValue] = useState("")

  useEffect(() => {
    setColors(colorData.filter(color => color.toLowerCase().includes(value.toLowerCase())))
  }, [value])

  const filterColor = (e) => {
    setValue(e.target.value)
  }

  return (

    <Wrapper>
      <header>CP Color Searcher Challenge</header>
      <input 
      type="text"
      value = {value}
      onChange={filterColor}
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
