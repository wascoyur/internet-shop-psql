import React from 'react';
import {RouterProvider} from 'react-router-dom';
import {Root} from './routes/RootRouter';

function App() {
  return (
    <RouterProvider router = {Root} fallbackElement={<p>Loading...</p>}/>
  );
}

export default App;
