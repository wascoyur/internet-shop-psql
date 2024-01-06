import React from "react";
import { useRouteError } from "react-router-dom";
export  const ErrorPage=()=> {
  const error = useRouteError();
  console.error(error);
  return (
    <div id="error-page">
    <h1>Oops!</h1>
    <p>Извините, страница не найдена.</p>

  </div>
  )
}
