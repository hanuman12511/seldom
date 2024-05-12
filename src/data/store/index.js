const { combineReducers } = require("redux");
import{homeReducers} from './Home/homeReducers'
const reducer= combineReducers({
    home:homeReducers
})

export {reducer}