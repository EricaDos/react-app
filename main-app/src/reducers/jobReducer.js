import { v4 as uuidv4 } from 'uuid';
import { GET_JOBS, ADD_JOBS, DELETE_JOBS, JOBS_LOADING } from '../actions/types';

const initialState = {
  jobs: [],
  loading: false
}

export default function(state = initialState, action){
  switch(action.type){
    case GET_JOBS:
      return {
        ...state,
        jobs: action.payload, //copy with new items
        loading: false
      };
    case DELETE_JOBS:
      return {
        ...state,
        jobs: state.jobs.filter(job => job._id !== action.payload)
      };
    case ADD_JOBS:
      return {
        ...state,
        jobs: [action.payload,...state.jobs]
    };
    case JOBS_LOADING:
    return{
      ...state,
      loading: true
    };
    default:
      return state;
  }

}
