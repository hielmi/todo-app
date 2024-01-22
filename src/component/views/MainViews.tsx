import React, { useState } from "react";
import Navbar from "../fragments/Navbar";

import ListTodos from "../layouts/ListTodos";
import FormTodos from "../layouts/FormTodos";

const MainViews = () => {
  return (
    <>
      <div className="min-h-screen w-full dark:bg-gray-900">
        <Navbar />
        <div className="p-4 box-content">
          <h1 className="text-center dark:text-white font-bold text-xl">
            What's your plan today?
          </h1>
          <div className="max-w-screen-xl flex flex-wrap mx-auto p-4">
            <FormTodos />
            <div className="p-4  rounded w-3/5">
              <ListTodos />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default MainViews;
