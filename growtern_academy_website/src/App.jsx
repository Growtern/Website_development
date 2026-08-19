import "bootstrap-icons/font/bootstrap-icons.css";
import { Routes, Route } from "react-router-dom";
import "./App.css";

import Layout from "./layout/Layout";
import NavbarRoutes from "./routes/Navbar.Routes";
import WhatsappAndCall from "./components/WhatsappAndCall";

import AdminRoutes from "./routes/Admin.Routes";


function App() {
  return (
    <>
      <Routes>
        
        {/* Public Website */}
        <Route
          path="/*"
          element={
            <Layout>
              {/* <WhatsappAndCall /> */}
              <NavbarRoutes />
            </Layout>
          }
        />
      </Routes>

      {/* Admin Routes */}
      <AdminRoutes />

    </>
  );
}

export default App;