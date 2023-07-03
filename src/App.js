import React from "react";
import Header from "./components/Header";
import Body from "./components/Body";
import Error from "./components/Error";
import Footer from "./components/Footer";
import MovieDetail from "./components/MovieDetail";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainContainer from "./components/MainContainer";




const appRouter = createBrowserRouter([
  {
    path:"/",
    element:<Body />,
    errorElement:<Error />,
    children: [ 
     { 
      path : "/",
      element: <MainContainer />
    },
    { 
      path : "movie",
      element: <MovieDetail />
    },


    ]
  }
])
function App() {
  return (
    <div className="App">
       <Header/>
       <RouterProvider router={appRouter} />
       <Footer /> 
    </div>
  );
}


export default App;
