import React, {Component} from 'react';
import CreateTaskForm from './CreateTaskForm'
import TaskList from './TaskList'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import TaskDetails from './TaskDetails'
import {getItems} from '../../actions/ideaActions'
class MainBody extends Component {

    componentDidMount() {
      this.props.getItems()
    }

    

    render() {

        const getIdeasPerBox = (idea, boxId) => {
            let boxList = idea.filter(item => {
                return item.box === boxId })
            return boxList

        }

        const { ideas, boxes } = this.props;

        //if (!auth.uid) return <Redirect to='/login'/>
        const taskBoxes = (boxes.length > 0) ? boxes.map(box => {
           let boxList = getIdeasPerBox(ideas, box.id)
            return(
                <div className = "column is-box-border is-wrapped" key = {box.id}>
                    <TaskList title={box.title} id= {box.id} ideaList={boxList}/>
                </div>
            )
        }) : (<p className="text-is-center">Add some boxes</p>)
        return(
            <div className="container">
                <h4 className="is-size-2 text-is-center">Track Your Ideas</h4>

                <br/>
                <center><CreateTaskForm/></center>
                <br/>

                <div className="columns">
                    {taskBoxes}
                </div>
                <TaskDetails/>
                <footer>
                    <p className = "text-is-center is-size-7">
                    © <a href="https://dstambler17.github.io/">2019 Daniel Stambler</a>   Icons made by <a href="https://www.flaticon.com/authors/gregor-cresnar" title="Gregor Cresnar">Gregor Cresnar</a> and <a href="https://www.flaticon.com/authors/lucy-g" title="Lucy G">Lucy G</a>  from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/"title="Creative Commons BY 3.0">CC 3.0 BY</a>
                    </p>
                </footer>
            </div>

        );
    }
}

const mapStateToProps = (state) => {
    console.log(state)
    return {
      ideas: state.taskItem.ideas,
      boxes: state.taskItem.boxes
    }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getItems : () => dispatch(getItems())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainBody)
