import { combineReducers } from "redux";
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";
import UserReducer from "./user/user.reducer";
import CartReducer from "./cart/cart.reducer";
import DirectoryReducer from "./directory/directory.reducer";
import ShopReducer from "./shop/shop.reducer";

const persistConfig = {
    key: 'root',
    storage,
    blacklist: ['user']
}

const rootReducer = combineReducers({
    user: UserReducer,
    cart: CartReducer,
    directory: DirectoryReducer,
    shop: ShopReducer
});

export default persistReducer(persistConfig, rootReducer);