import { createSlice ,createAsyncThunk} from "@reduxjs/toolkit";
import axios from 'axios'
const INITIAL_STATE={username:'',error:"",}
export const createuserApI= createAsyncThunk("user",async (payload)=>{
    const response=await fetch("http://localhost:8007/api/Login/createuser",{
      method:"POST",
      headers:{
        "Content-Type": "application/json"
      },
      body:JSON.stringify({
        name:payload.name,
        pass:payload.pass
      })
    })
    return response.json()
    })
const commentsSlice=createSlice({
    name:"create",
    initialState:INITIAL_STATE,
    reducers:{

    },
    extraReducers:(builder)=>{
        builder.addCase(createuserApI.fulfilled,(state,action)=>{
            state.username=action.payload.data.name
            console.log(state.username);
        }).addCase(createuserApI.pending,(state,action)=>{
            console.log("pending")
        }).addCase(createuserApI.rejected,(state,action)=>{
            console.log("error")
        })
    }
})

export const createReducer = commentsSlice.reducer;


export const userSelectors = (state) => state.createReducer;
