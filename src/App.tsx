import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import TodoList from "./pages/TodoList";
import { Provider } from "react-redux";
import { store } from "./store";
import { Users } from "./pages/Users";
import { OneUser } from "./pages/OneUser";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/todos" element={<TodoList />} />
          <Route path="/users" element={<Users />} />
          <Route path="/users/:id" element={<OneUser/>} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
