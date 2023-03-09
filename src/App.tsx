import RegisterAndLoginProvider from "./context/RegisterAndLoginContext";
import RoutesMain from "./routes/routes";
import { AdminProvider } from "./context/AdminContext";
import { GlobalStyles } from "./styles/global";

function App() {
  return (
    <>
      <RegisterAndLoginProvider>
        <AdminProvider>
          <RoutesMain />
          <GlobalStyles/>
        </AdminProvider>
      </RegisterAndLoginProvider>
    </>
  );
}

export default App;
