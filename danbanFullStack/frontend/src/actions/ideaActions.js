import axios from "axios";

export const shiftBox = (id, direction, title, box) => (dispatch) => {
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
		headers:{
			'Content-Type': 'application/json'
		}
	}).then(res => {
    dispatch({
      type: "SHIFT_BOX",
      id: id,
      box: box
    })
  })
	.catch(error => console.error('Error:', error));
}

export const getItems = () => (dispatch) => {
  return fetch("http://127.0.0.1:8000/api/task/")
       .then(res => res.json()).then((resp) => {
           dispatch({ type: 'GET_TASKS', tasks: resp });
         })
};

export const addItem = title => (dispatch) => {
  let data = {"title" : title}
  let id = null
  fetch("/api/task/", {
		method: 'POST', // or 'PUT'
		body: JSON.stringify(data), // data can be `string` or {object}!
		headers:{
			'Content-Type': 'application/json'
		}
	}).then(res => res.json())
	.then(response => {
    id = response['id']
    return dispatch({
        type: "ADD_TASK",
        title: title,
        id: id
      })
  })
	.catch(error => console.error('Error:', error));
}


export const deleteBox = (id) => (dispatch) => {

  fetch('/api/task/' + id + '/', {
					method: 'DELETE', // or 'PUT'
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
