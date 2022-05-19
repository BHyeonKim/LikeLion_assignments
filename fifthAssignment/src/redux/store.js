import { configureStore } from '@reduxjs/toolkit'
import { todos } from './reducers'

const store = configureStore({ reducer: { todos } })

export default store
