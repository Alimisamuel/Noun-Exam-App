import { useRoutes } from "react-router-dom"
import Home from "../Components/Home"
import Programming from "../Components/CIT237";
import Philosophy from "../Components/GST203";



export const Routes = () =>{
let element = useRoutes([
 {
  element:<Home/>,
  index:true,
path:'/'
 },
 {
  element:<Programming/>,
  index:true,
path:'/programming'
 },
 {
  element:<Philosophy/>,
  index:true,
path:'/philosophy'
 }
])
return element;
}