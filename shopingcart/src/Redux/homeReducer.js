import { createSlice ,createAsyncThunk} from "@reduxjs/toolkit";
import axios from 'axios'
const INITIAL_STATE = { comments: [], isLoading: false, error: null ,};
export const storeApi= createAsyncThunk ("comment/get",()=>{
  return axios.get("http://localhost:8007/api/ecom/products")
})
export const searchAsync= createAsyncThunk("searchThuk",async (payload)=>{
const response=await fetch("http://localhost:8007/api/ecom/search",{
  method:"POST",
  headers:{
    "Content-Type": "application/json"
  },
  body:JSON.stringify({
    name:payload
  })
})
return response.json()
})
// Filter API
export const filterApi= createAsyncThunk("filter",async (payload)=>{
  const response=await fetch("http://localhost:8007/api/ecom/filter",{
    method:"POST",
    headers:{
      "Content-Type": "application/json"
    },
    body:JSON.stringify({
      maxprice:payload.max,
      categories:payload.option
    })
  })
  return response.json()
  })
const commentsSlice = createSlice({
  name: "comments",
  initialState: INITIAL_STATE,
  reducers: {
    fetchStart: (state, action) => {
        state.isLoading = true;
      },
      fetchSuccess: (state, action) => {
        state.comments = action.payload;
        state.isLoading = false;
      },
      fetchError: (state, action) => {
        state.error = "Failed to fetch comments.";
        state.isLoading = false;
      }
    
  },
  extraReducers:(builder)=>{
      builder.addCase(storeApi.fulfilled,(state,action)=>{
       
        state.isLoading=false
        state.comments=[...action.payload.data.list]
        console.log(state.comments);
      }).addCase(storeApi.pending,(state,action)=>{
        console.log("pending");
        state.isLoading=true
      }).addCase(storeApi.rejected,(state,action)=>{
        console.log("error");
        state.error=action.payload

      }).addCase(searchAsync.fulfilled,(state,action)=>{
        
        
        if (action.payload.searchdata && Array.isArray(action.payload.searchdata)) {
          // Ensure that action.payload.searchdata exists and is an array
          if (action.payload.searchdata.length > 0) {
            state.comments = [...action.payload.searchdata];
            state.error = ''
          } else {
            state.comments = [];
            state.error = 'No data found'; // Set server message
          }
        } else {
          // Handle the case where action.payload.searchdata is not an array
          console.error('Invalid search data:', action.payload.searchdata);
          state.comments = [];
          state.error = 'Invalid search data'; // Set server message
        }
        
      }).addCase(searchAsync.pending,(state,action)=>{
        console.log("pending");
      }).addCase(searchAsync.rejected,(state,action)=>{
        console.log("error of search ");
      })
      //filter api
      .addCase(filterApi.fulfilled,(state,action)=>{
       
        state.isLoading=false
        console.log("running")
        console.log("Filter:",action.payload.filterdata);
        state.comments = [...action.payload.filterdata];
      }).addCase(filterApi.pending,(state,action)=>{
        state.isLoading=true
      }).addCase(filterApi.rejected,(state,action)=>{
       
        state.error="Not Found"

      })
  }
});

export const homeReducer = commentsSlice.reducer;
export const { fetchStart, fetchSuccess, fetchError } = commentsSlice.actions;

export const homeSelector = (state) => state.homeReducer;
