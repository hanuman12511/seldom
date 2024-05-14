const { combineReducers } = require("redux");
import{homeReducers} from './Home/homeReducers'
import { userReducers } from './user/userReducers';
const reducer= combineReducers({
    home:homeReducers,
    user:userReducers
})

export {reducer}