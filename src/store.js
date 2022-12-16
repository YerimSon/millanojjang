import { configureStore, createSlice } from '@reduxjs/toolkit'
import user from './store/userSlice'




let cart = createSlice({
    name: 'cart',
    initialState: [
        {id: 1, name: "에트로 오렌지 디퓨저", count: 1},
        {id: 2, name: "에트로 퍼플 디퓨저", count: 1}
    ],
    reducers : {
        addCount(state, action) {
            let num = state.findIndex((a)=>{return a.id == action.payload})
            state[num].count++
        },
        addItem(state, action){
            state.push(action.payload)
        }
    }
})

export let {addCount, addItem} = cart.actions

export default configureStore({
    reducer: {
        user : user.reducer,
        cart: cart.reducer
    }
})