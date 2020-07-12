import axios from 'axios'
import history from '../history'

//action types
const GET_ALL_STORIES = 'GET_ALL_STORIES'
const ADD_STORY = 'ADD_STORY'

//action creator
const getAllStories = stories => {
  return {
    type: GET_ALL_STORIES,
    stories
  }
}
const addNewStory = newStory => {
  return {
    type: ADD_STORY,
    newStory
  }
}

//initial state
const initialState = {
  allStories: []
}

//Thunk creators
//get all stories from user
export const fetchAllStories = userId => {
  return async dispatch => {
    const res = await axios.get(`/api/stories/${userId}/stories`)
    dispatch(getAllStories(res.data))
  }
}

//add Story to User Thunk Creator
export const addStoryToUser = (userId, brandNewStory) => {
  return async dispatch => {
    const response = await axios.post(
      `/api/stories/${userId}/stories`,
      brandNewStory
    )
    dispatch(addNewStory(response.data))
  }
}

//reducer

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_STORIES:
      return {...state, allStories: action.stories}
    case ADD_STORY:
      return {...state, allStories: [...state.allStories, action.newStory]}

    default:
      return state
  }
}
