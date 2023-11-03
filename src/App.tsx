import { Router } from './components/router/Router'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/theme/default'
import { BrowserRouter } from 'react-router-dom'
import { CoffeeContextProvider } from './contexts/CoffeeContext'

function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <CoffeeContextProvider>
          <Router/>
        </CoffeeContextProvider>
        
      </BrowserRouter>
    </ThemeProvider>
    
  )
}

export default App
