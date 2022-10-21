import {configureStore} from '@reduxjs/toolkit'
import idDimencion from './slice/dimencion.slice'

export default configureStore(
{
    reducer:{
        idDimencion
    }
}
)

