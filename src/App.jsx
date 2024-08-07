import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider, BrowserRouter } from "react-router-dom";

import HomePage from "./pages/HomePage";
import MainLayout from "./layouts/MainLayout";
import { About, Contact, Navbar, Works } from "./components";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<MainLayout />}>
       <Route index element={<HomePage />} />
       <Route path='/home' element={<HomePage />} />
       <Route path='/contact' element={<Contact />} />
       <Route path='/portfolio' element={<Works />} />
       <Route path='/about' element={<About />} />
    </Route>
  )
);

const App = () => {
  return (
    <RouterProvider router={router} />
  );
}

export default App;



// Navbar
// Home
// About me 
// Portfolio
// Contact
// Resume
// Footer
