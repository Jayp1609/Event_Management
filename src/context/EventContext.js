import React, { createContext, useContext, useEffect, useState } from "react";

export const context = createContext();

const EventContext = ({ children }) => {
  const host = "http://localhost:5000";
  const [categorynames, setCategorynames] = useState([]);

  //Get category names
  const getcategories = async () => {
    try {
      const response = await fetch(`${host}/admin/categories`, {
        method: "GET", // *GET, POST, PUT, DELETE, etc.
        headers: {
          "Content-Type": "application/json",
        },
      });
      const json = await response.json();
      setCategorynames(json);
      console.log(json);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getcategories();
    // eslint-disable-next-line
  }, []);

  //Display alert

  return (
    <context.Provider
      value={{
        host,
        categorynames,
      }}
    >
      {children}
    </context.Provider>
  );
};

export default EventContext;

export const ContextState = () => {
  return useContext(context);
};
