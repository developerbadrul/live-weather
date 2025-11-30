import Home from './pages/Home'
import { LocationProvider, WeatherProvider } from './provider'
import LocalStorageProvider from './provider/LocalStorageProvider'

function App() {

  return (
    <WeatherProvider>
      <LocalStorageProvider>
        {/* <LocationProvider> */}
          <Home />
        {/* </LocationProvider> */}
      </LocalStorageProvider>
    </WeatherProvider>
  )
}

export default App
