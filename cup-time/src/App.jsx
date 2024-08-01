import { BrowserRouter } from "react-router-dom";
import { Footer } from "./modules/footer/Footer";
import { Header } from "./modules/header/Header";
import { Main } from "./modules/main/Main";

// роутинг
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Main />
      <Footer />
    </BrowserRouter>
  )
}

export default App
