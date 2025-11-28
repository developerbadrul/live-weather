import Home from './pages/Home'
import { WeatherProvider } from './provider'
import LocalStorageProvider from './provider/LocalStorageProvider'

function App() {

  return (
    <WeatherProvider>
      <LocalStorageProvider>
        <Home />
      </LocalStorageProvider>
    </WeatherProvider>
  )
}

export default App
