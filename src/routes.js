import Home from "./pages/Home/Home";
import Services from "./pages/Services/Services";
import Products from "./pages/Products/Products";
import SignUp from "./pages/SignUp/SignUp";
import Trailer from "./pages/Trailer/Trailer";


export const publicRoutes = [
    {
        name: 'Home',
        path: '/',
        Component: Home,
      },
      {
        name: 'Services',
        path: `/services`,
        Component: Services,
      },
      {
        name: 'Products',
        path: '/products',
        Component: Products,
      },
      {
        name: 'Sign-Up',
        path: '/sign-up',
        Component: SignUp,
      },
      {
        name: 'Watch Trailer',
        path: '/watch',
        Component: Trailer,
      }
]
