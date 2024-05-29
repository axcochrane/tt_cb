import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './App.css'
// import Navbar from './components/Navbar/Navbar'

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
  },
  {
    path: "/patients",
    element: <div>Patients Page</div>,
  }
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
