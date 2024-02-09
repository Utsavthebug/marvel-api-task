import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NotFoundPage from "./pages/NotFoundPage";
import Layout from "./Layout";
import AboutPage from "./pages/AboutPage";
import Analytics from "./pages/Analytics";

function App() {
  return (
   <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout/>}>
      <Route index element={<Home/>} />
      <Route path='/detail/:id' element={<AboutPage/>} />
      <Route path="/analytics" element={<Analytics/>} />
      <Route path="*" element={<NotFoundPage/>} />
      </Route>    
    </Routes>
   </BrowserRouter>
  )
}

export default App
