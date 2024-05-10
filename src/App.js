import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';
import Dashboard from './screens/dashboard/Dashboard';
import CarManagement from './screens/car-management/CarManagement';
import BuyerLead from './screens/buyer-lead/BuyerLead';
import SellerLead from './screens/seller-lead/SellerLead';
import AddNewCar from './screens/add-new-car/AddNewCar';
import EditCarDetails from './screens/edit-car-details/EditCarDetails';

function App() {
   return (
      <div className={"container"}>
         <BrowserRouter>
            <Header />

            <div className={"wrapper"}>

               <Sidebar />

               <div className={"routes-wrapper"}>
                  <Routes>
                     <Route path='/' element={<Navigate to={"/dashboard"} />} />
                     <Route path='/dashboard' element={<Dashboard />} />
                     <Route path='/car-management' element={<CarManagement />} />
                     <Route path='/buyer-lead-management' element={<BuyerLead />} />
                     <Route path='/seller-lead-management' element={<SellerLead />} />
                     <Route path='/add-new-car' element={<AddNewCar />} />
                     <Route path='/edit-car-details' element={<EditCarDetails />} />
                  </Routes>
               </div>
            </div>

         </BrowserRouter>
      </div>
   );
}

export default App;
