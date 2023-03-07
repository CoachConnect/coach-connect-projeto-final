import RegisterAndLoginProvider from './context/RegisterAndLoginContext'
import RoutesMain from './routes/routes'

function App() {

  return (
   <> 
      <RegisterAndLoginProvider >
        <RoutesMain />
      </RegisterAndLoginProvider>    
   </>
  )
}

export default App
