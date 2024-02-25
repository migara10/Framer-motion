import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './Components/Nav/NavBar'
import Body from './Components/Body/Body';
import Footer from './Components/Footer/Footer'
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";

// routers
const router = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
  },

  {
    path: "*",
    element: <div>page not found</div>,
  },
]);

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='h-screen w-full bg-gradient-to-b from-amber-400 to-amber-800 overflow-hidden relative'>
      <NavBar />
      <RouterProvider router={router}></RouterProvider>
      <Footer />
    </div>
  )
}

export default App
