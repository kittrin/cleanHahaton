import auth from "../pages/auth";
import acc from "../pages/acc";
import admin from "../pages/admin";
import addNewCar from "../pages/addNewCar";


export const routes = [
    {path: '/auth', component: auth},
    {path: '/acc', component: acc},
    {path: '/admin', component: admin},
    {path: '/addcar', component: addNewCar}
]