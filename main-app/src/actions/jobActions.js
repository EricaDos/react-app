import axios from 'axios'
import { GET_JOBS, ADD_JOBS, DELETE_JOBS, JOBS_LOADING } from './types';

export const getJobs = () => async dispatch => { //Async request
  dispatch(setJobsLoading());
  axios
    .get('/api/jobs')
    .then(res =>
      dispatch({
        type: GET_JOBS,
        payload: res.data //data from backend (routes api)
      })
    )
};

export const deleteJob = id => {
  return {
    type: DELETE_JOBS,
    payload: id
    };
};
export const addJob = job => async dispatch => { //Async request
  axios
    .post('/api/jobs', job)
};
export const setJobsLoading = () => {
  return {
    type: JOBS_LOADING
  };
};
