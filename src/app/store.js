import {configureStore} from '@reduxjs/toolkit'
import Appslice from '../features/appslice';
import Userslice from '../features/userslice';



export default configureStore({
    reducer:{
        user:Userslice,
        app:Appslice
    }
});