/// Components
import Home from "./components/Home";
import DataProvider from './components/Context/DataProvider';

function App() {
  return (
    <DataProvider>
      <Home/>
    </DataProvider>

  );
}

export default App;
