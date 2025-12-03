import Home from './pages/Home'
import { LocationProvider, WeatherProvider } from './provider'
import LocalStorageProvider from './provider/LocalStorageProvider'

function App() {

  return (
    <LocationProvider>
      <WeatherProvider>
        <LocalStorageProvider>
          <Home />
        </LocalStorageProvider>
      </WeatherProvider>
    </LocationProvider>
  )
}

export default App
