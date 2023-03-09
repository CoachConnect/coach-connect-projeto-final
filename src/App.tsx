import RegisterAndLoginProvider from "./context/RegisterAndLoginContext";
import RoutesMain from "./routes/routes";

import { GlobalStyles } from "./styles/global";

function App() {
  return (
    <>
      <RegisterAndLoginProvider>
          <RoutesMain />
          <GlobalStyles/>     
      </RegisterAndLoginProvider>
    </>
  );
}

export default App;
