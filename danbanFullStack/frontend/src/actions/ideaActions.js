import axios from "axios";
import { tokenConfig } from "./authActions";

export const shiftBox = (id, direction, title, box) => (dispatch, getState) => {
  console.log(box)
  if ((direction === 'left' || direction === 'up') &&  box > 1) {
      box = box - 1
  } else if ((direction === 'right' || direction === 'down') && box < 3) {
      box = box + 1
  }
  console.log(box)
  let data = {"title" : title, "box" : box}
  let url = "http://127.0.0.1:8000/api/task/" + id.toString() + '/'
  console.log(url)
   fetch(url, {
		method: 'PUT', // or 'PUT'
		body: JSON.stringify(data), // data can be `string` or {object}!
		headers: tokenConfig(getState)['headers']
	}).then(res => {
    dispatch({
      type: "SHIFT_BOX",
      id: id,
      box: box
    })
  })
	.catch(error => console.error('Error:', error));
}

export const getItems = () => (dispatch, getState) => {
  return fetch("http://127.0.0.1:8000/api/task/", tokenConfig(getState))
       .then(res => res.json()).then((resp) => {
           dispatch({ type: 'GET_TASKS', tasks: resp });
         }).catch(dispatch({ type: 'NOT_ALLOWED'}))
};

export const addItem = title => (dispatch, getState) => {
  let data = {"title" : title}
  let id = null
  let owner = null
  console.log(tokenConfig(getState))
  console.log(JSON.stringify(data))
  fetch("/api/task/", {
		method: 'POST', // or 'PUT'
		body: JSON.stringify(data), // data can be `string` or {object}!
		headers: (tokenConfig(getState))['headers']
	}).then(res => res.json())
	.then(response => {
    console.log(response)
    id = response['id']
    console.log(id)
    owner = response['owner']
    console.log(owner)
    return dispatch({
        type: "ADD_TASK",
        title: title,
        id: id,
        owner: owner
      })
  })
	.catch(error => console.error('Error:', error));
}


export const deleteBox = (id) => (dispatch, getState) => {

  fetch('/api/task/' + id + '/', {
					method: 'DELETE',
          headers: tokenConfig(getState)['headers'] // or 'PUT'
		}).then(response => {
      dispatch({
        type: "DELETE_TASK",
        id: id
      })
    })
			.catch(error => console.error('Error:', error));
}

export const showModal = (title) => {
    return{
        type: "SHOW_MODAL",
        title: title

    }
}

export const closeModal = () => {
    return{
        type: "CLOSE_MODAL"
    }
}
