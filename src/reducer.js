 export const initialstate = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    token:"BQCt2n2KX8Ogi-1OJMRZePIwaySe-EiBUxsZo95gxj85NJ38X7hKO53HZ5UCNCTUhtErs0rvr1D8m9BVQEDMjSJsqOyZZ9QDzuZchcq66MdsHBUiftX_XxoeRwvmhOw7FfoM2JnM-Y2tBM5LubmjMUNyChsY",
};

 const reducer = (state ,action)=>{
     console.log(action)
     switch(action.type){
         case 'SET_USER':return{
                ...state,
             user:action.user,
            }
         case 'SET_TOKEN' : return{
             ...state,
             token:action.token,
         }
         case "SET_PLAYLISTS": return{
             ...state,
             playlists:action.playlists,
         }   
         default :
          return state;
     };
          
};

export default reducer;