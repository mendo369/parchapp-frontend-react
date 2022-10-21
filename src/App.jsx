import { Route } from "wouter";

import { ParchesContextProvider } from "./context/ParcheContext";
import { UserContextProvider } from "./context/UserContext";

import home from "./pages/Home/home";
import signIn from "./pages/SignIn/signIn";
import signUp from "./pages/SignUp/signUp";
import search from "./pages/Search/search";
import user from "./pages/User/user";
import createParche from "./pages/CreateParche/createParche";

import "./App.css";

function App() {
  return (
    <UserContextProvider>
      <div className="App">
        <ParchesContextProvider>
          <Route component={home} path="/" />
          <Route component={search} path="/search/:keyword" />
        </ParchesContextProvider>
        <Route component={signIn} path="/auth/signin" />
        <Route component={signUp} path="/auth/signup" />
        <Route component={user} path="/user/profile" />
        <Route component={createParche} path="/user/create" />
      </div>
    </UserContextProvider>
  );
}

export default App;
