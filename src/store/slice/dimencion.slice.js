import {createSlice} from'@reduxjs/toolkit'

export const dimencionSlice=createSlice({

        name:"IdDimencion",
        initialState:null,
        reducers:{
            newId:(set,accion)=>accion.payload
        }
    }    
)

export const {newId}=dimencionSlice.actions
export default dimencionSlice.reducer
