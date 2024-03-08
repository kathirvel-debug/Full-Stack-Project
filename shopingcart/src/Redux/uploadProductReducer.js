import { createSlice ,createAsyncThunk} from "@reduxjs/toolkit";
import axios from 'axios'

export const upload=createAsyncThunk("signIn",async(payload)=>{
    const response=await fetch("http://localhost:8007/api/ecom/create",{
      method:"POST",
      body:payload
    })
    return response.json()
    })
const commentsSlice=createSlice({
    name:"sigIN",
    initialState:{},
    reducers:{ },
    extraReducers:(bulider)=>{
        bulider.addCase(upload.fulfilled,(state,action)=>{
            console.log("ok")
            
        }).addCase(upload.pending,(state,action)=>{
            console.log("Pending")
        }).addCase(upload.rejected,(state,action)=>{
            console.log("error")
            
        })
    }
}
)
export const uploadReducer = commentsSlice.reducer;


