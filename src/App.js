import { RouterProvider, createBrowserRouter } from "react-router-dom";

import "./App.css";
import NotesListPage from "./pages/NotesListPage.js";
import NotePage from "./pages/NotePage.js";
import Root from "./components/Root.js";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        {
          path: "/",
          element: <NotesListPage />,
        },
        {
          path: "/note/:id",
          element: <NotePage a={1} b={2} />,
        },
      ],
    },
  ]);

  return (
    <RouterProvider router={router} />

    // <Router>
    //   <div className="container">
    //     <div className="app">
    //       <Header />

    //       <Route path="/" exact component={NotesListPage} />
    //       <Route path="/note/:id" component={NotePage} />
    //     </div>
    //   </div>
    // </Router>
  );
}

export default App;
