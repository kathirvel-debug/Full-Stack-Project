import { createSlice ,createAsyncThunk} from "@reduxjs/toolkit";

const INITIAL_STATE={cartItems:[]}


const commentsSlice=createSlice({
    name:"cart",
    initialState:INITIAL_STATE,
    reducers:{
       add:(state,action)=>{
        state.cartItems=action.payload
        console.log(state.cartItems);
       },
       remove:(state,action)=>{

       }
    },
 
}
)
export const cartReducer = commentsSlice.reducer;

export const {add,remove}=commentsSlice.actions
export const cartSelectors = (state) => state.cartReducer;