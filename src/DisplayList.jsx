function DisplayList ({list, setList}) {
    function changeCompletion (e, taskName) {
        e.preventDefault()
    
        setList((currList) => {
            const copyList = [...list]
            const tasktoUpdate = taskName
            const updatedList = copyList.map((item) => {
                if (item.name === tasktoUpdate) {
                    const newItem = {...item}
                    return {name: newItem.name, completed: !newItem.completed}
                } else {
                    const newItem = {...item}
                    return {name: newItem.name, completed: newItem.completed}
                }
            })
            return updatedList
        })
    }

    function deleteTask (e, taskName) {
        e.preventDefault()

        setList((currList) => {
            const tasktoUpdate = taskName
            const copyList = [...list]
            const filteredList = copyList.filter((item) => {
               return item.name !== tasktoUpdate
            })
            return filteredList
        })
    }

    return (
    <section className="display-list">
        <table className="task-table">
            <thead>
            <tr>
                <th>Task</th>
                <th>Completed</th>
                <th>Mark Complete</th>
                <th>Delete Task</th>
            </tr>
            </thead>
            <tbody>
            {list.map((task) => {
                if (task.completed) {
                    return(<tr key={task.name}><td>{task.name}</td>
                        <td className="complete">✅</td>
                        <td className="col3"><button onClick={
                            e => {changeCompletion(e, task.name)}
                        } className="mark" type="button">Undo</button></td>
                        <td className="col4"><button onClick={
                            e => {deleteTask(e, task.name)}
                        } >Delete</button></td>
                      </tr> 
                    )
                } else {
                    return (<tr key={task.name}><td>{task.name}</td>
                        <td className="complete">❌</td>
                        <td className="col3"><button onClick={
                            e => {changeCompletion(e, task.name)}
                        } className="mark" type="button">Complete</button></td>
                        <td className="col4"><button onClick={
                            e => {deleteTask(e, task.name)}
                        }>Delete</button></td>

                      </tr>  )
                }
            })}
            </tbody>
        </table>
    </section>

    )
}

export default DisplayList;