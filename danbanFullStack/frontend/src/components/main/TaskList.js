import React from 'react'
import TaskItem from './TaskItem'

const TaskList = ({title, id, ideaList}) => {
    const taskList = (ideaList.length > 0) ? ideaList.map(idea => {
        return(
            <TaskItem idea={idea.title} boxNum={idea.box} id={idea.id} key={idea.id}/>
        )
    }) : (<p className="text-is-center">Nothing in "{title}"</p>)

    return (
        <div className="">
            <p className="is-size-4 text-is-center">{title}</p>
            {taskList}
        </div>
    )
}

export default TaskList
