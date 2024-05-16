const { combineReducers } = require("redux");
import{homeReducers} from './Home/homeReducers'
import { loginReducers } from './auth/loginReducers';
import { userReducers } from './user/userReducers';
const reducer= combineReducers({
    home:homeReducers,
    user:userReducers,
   
})

export {reducer}