import { createSlice ,createAsyncThunk} from "@reduxjs/toolkit";
import axios from 'axios'
const INITIAL_STATE={user:'',usererror:"",userId:"" ,cartItems:[]}
export const signInAPI=createAsyncThunk("signIn",async(payload)=>{
    const response=await fetch("http://localhost:8007/api/Login/login",{
      method:"POST",
      headers:{
        "Content-Type": "application/json"
      },
      body:JSON.stringify({
        user:payload.name,
        pass:payload.pass
      })
    })
    return response.json()
    })
const commentsSlice=createSlice({
    name:"sigIN",
    initialState:INITIAL_STATE,
    reducers:{
        add:(state,action)=>{
            state.cartItems=action.payload
        },
        Remove:(state,action)=>{
            state.user=""
            state.userId=""
            state.cartItems=[]
            
        }
    },
    extraReducers:(bulider)=>{
        bulider.addCase(signInAPI.fulfilled,(state,action)=>{
            console.log(action.payload)
            state.user=action.payload.name;
            state.userId=action.payload.userId;
            state.cartItems=action.payload.carts
            console.log("user:",state.cartItems);
            state.usererror=""
        }).addCase(signInAPI.pending,(state,action)=>{
            console.log("Pending")
        }).addCase(signInAPI.rejected,(state,action)=>{
            console.log("error")
            
        })
    }
}
)
export const sigINReducer = commentsSlice.reducer;
export const { add,Remove } = commentsSlice.actions;

export const userSelectors = (state) => state.sigINReducer;