import{ useState } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  Link
} from 'react-router-dom';
import Navigation from "./Nav";
import RestaurantContainer from "./RestaurantContainer"
import MyOrder from "./MyOrder"
import OurStory from './OurStory';
import './App.css'
import RestaurantDetails from './RestaurantDetails';


function App() {
  const [restaurants, setRestaurants] = useState([]);
  function onAddRest(newRest){
    return setRestaurants([...restaurants, newRest]);
  };

  const [order, setOrder] = useState([]);
  return (
    <div className="bg-dark" style={{heigh: "100vh", minHeight: "100vh"}}>
      <Navigation />
      <Routes>
        {/* search elements in react router */}
        <Route path="*" element={<Navigate to="/restaurants" replace/>} />
        <Route path="ourstory" element={<OurStory onAddRest={onAddRest} />} />
        <Route path="myorder" element={<MyOrder setOrder={setOrder} order={order} />}  />
        <Route path="restaurants" element={<RestaurantContainer restaurants={restaurants} setRestaurants={setRestaurants} className="isActive"/>} />
        <Route path="/restaurants/:id" element={<RestaurantDetails />} />
      </Routes>
    </div>
  );
}

export default App;
