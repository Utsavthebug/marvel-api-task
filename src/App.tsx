import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NotFoundPage from "./pages/NotFoundPage";
import Layout from "./Layout";

function App() {
  return (
   <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout/>}>
      <Route index element={<Home/>} />
      <Route path="*" element={<NotFoundPage/>} />
      </Route>    
    </Routes>
   </BrowserRouter>
  )
}

export default App
