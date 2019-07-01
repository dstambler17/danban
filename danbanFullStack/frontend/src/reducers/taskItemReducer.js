const initState = {
    ideas: [],
    boxes: [
        {title: "To Do", id: 1},
        {title: "In Progress", id: 2},
        {title: "Done", id: 3}
    ],
    show: false,
    modalTitle: null
}

const taskItemReducer = (state = initState, action) => {
    switch(action.type){
        case 'SHIFT_BOX':
            console.log("THIS WORKS")
            console.log(action.result)
            let idea = state.ideas.find(x => x.id === action.id)
            idea.box = action.box
            let newIdeas = state.ideas.filter(item => {
                return action.id !== item.id
            })
            newIdeas.push(idea)
            return {
                ...state,
                ideas: newIdeas
            }
            return {
                ...state,
                ideas: [...state.ideas, action.result]
            }
        case 'ADD_TASK':
          const newIdea = {title: action.title, box: 1, id: action.id}
          let newList = [...state.ideas, newIdea]
          return {
            ...state,
            ideas: newList
          }
        case 'DELETE_TASK':
            let listNoItem  = state.ideas.filter(item => {
                return item.id !== action.id
              });
            return {
                ...state,
                ideas: listNoItem
            }
        case 'GET_TASKS':
          return {
            ...state,
            ideas: action.tasks
          }
        case 'SHOW_MODAL':
            return {
                ...state,
                show: true,
                modalTitle: action.title
            }
        case 'CLOSE_MODAL':
            console.log("hi")
            return {
                ...state,
                show: false,
                modalTitle: null
            }
        default:
            return state
    }
}

export default taskItemReducer
