import {
  SET_LOADING,
  SET_STORIES,
  REMOVE_STORY,
  HANDLE_PAGE,
  HANDLE_SEARCH,
} from './actions'

const reducer = (state, action) => {
  switch(action.type){
    case SET_LOADING:
      return {...state, loading : true}; 

    case SET_STORIES:
      return {
        ...state, 
        loading : false, 
        nbPages : action.payload.nbPages,
        hits : action.payload.hits, 
      }

    case REMOVE_STORY : 
      const newHits = state.hits.filter((hit)=>hit.objectID!==action.payload)
      return {...state, hits : newHits}

    case HANDLE_SEARCH : 
     return {...state, query : action.payload, page : 0};


    case HANDLE_PAGE : 
      
      if(action.payload === 'inc'){
        let nextPage = state.page + 1
        if(nextPage >= state.nbPages){
          nextPage = 0; 
        }
        return {...state, page : nextPage}
      }
      else{
        let prevPage = state.page + 1;
        if (prevPage < 0 ) {
            prevPage = state.nbPages-1
        }
        return { ...state, page: prevPage };
      }

    default : 
      throw new Error(`no matching action ${action.type}`)
  }
}
export default reducer
