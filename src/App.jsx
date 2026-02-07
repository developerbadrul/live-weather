import Home from './pages/Home'
import { LocationProvider, WeatherProvider } from './provider'
import LocalStorageProvider from './provider/LocalStorageProvider'

function App() {

  return (
    <LocationProvider>
      <LocalStorageProvider>
        <WeatherProvider>
          <Home />
        </WeatherProvider>
      </LocalStorageProvider>
    </LocationProvider>
  )
}

export default App
