import React, { createContext,useContext,useReducer} from 'react';

export const DatalayerContext = createContext(); 

export const DataLayer = ({initialstate , reducer,children}) =>(
    <DatalayerContext.Provider value={useReducer(reducer,initialstate)}>
     {children}
    </DatalayerContext.Provider>
)


export const useDatalayervalue = ()=>useContext(DatalayerContext);