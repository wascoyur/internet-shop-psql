import {createBrowserRouter, createRoutesFromElements, Route} from 'react-router-dom';
import Home from '../../pages/Home';
import {ControlPanel} from "../../pages/ControlPanel.tsx";


const rootRoute = <Route element={<Home/>}        path="/"   />
const routeControlPanel=<Route path="/control"  element={<ControlPanel /> }                />

const routes = createRoutesFromElements([rootRoute, routeControlPanel])

export const Root = createBrowserRouter((routes));

