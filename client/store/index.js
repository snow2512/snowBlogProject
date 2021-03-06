import { createStore, combineReducers } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import windowReducer from './window/windowReducer'
import adminLoginReducer from './adminLogin/adminLogin'
import sideBarReducer from './sideBar/sideBar'

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['adminLogin']
}

const rootReducer = combineReducers({
  adminLogin: adminLoginReducer,
  sideBar: sideBarReducer,
  window: windowReducer
})

const store = createStore(persistReducer(
    persistConfig,
    rootReducer
  ),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export const persistor = persistStore(store)

export default store

