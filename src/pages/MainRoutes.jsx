import React from "react";
import { Routes, Route } from "react-router-dom";
import Books from "./Books.jsx";
import SingleBook from "./SingleBook.jsx";
import BookEdit from "./BookEdit.jsx";
import AuthRequired from "../HOF/AuthRequired.jsx";
import Login from "./Login.jsx";

const MainRoutes = () => {
  return (
    <div>
     
      <Routes>
        <Route path="" element={<Books/>}/>
        <Route path="books/:id" element={<SingleBook/>}/>
        <Route path="books/:id/edit" element={<AuthRequired><BookEdit/></AuthRequired>}/>
        <Route path="/login" element={<Login/>}/>

      </Routes>
    </div>
  );
};

export default MainRoutes;
