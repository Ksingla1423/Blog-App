import { useState, useEffect } from "react";
import "./App.css";
import { useDispatch } from "react-redux";
import { use } from "react";
import authService from "./appwrite/auth";
import { login, logout } from "./store/authSlice";
import {Header,Footer} from "./components"

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService
      .getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }));
        } else {
          dispatch(logout());
        }
      })
      .finally(() => setLoading(false));
  }, []);

  return !loading ? (
    <div className="min-h-screen flex justify-center items-center bg-gray-400">
      <Header />
      <main>
      TODO {/* <outlet/> */}
      </main>
      <Footer />
    </div>
  ) : (
    <div className="min-h-screen flex justify-center items-center bg-gray-400">
      app is loading
    </div>
  );
}

export default App;
