import React, { useEffect, useState } from 'react';

import NewTask from './components/NewTask/NewTask';
import Tasks from './components/Tasks/Tasks';
import useHttpRequest from './hooks/UseHttpRequest';

function App() {
    const [tasks, setTasks] = useState([]);

    const [isLoading, error, makeFetchRequest] = useHttpRequest({
        setTasks: setTasks,
        post: false,
    });

    useEffect(() => {
        makeFetchRequest();
    }, [makeFetchRequest]);

    const taskAddHandler = (task) => {
        setTasks((prevTasks) => prevTasks.concat(task));
    };

    return (
        <React.Fragment>
            <NewTask onAddTask={taskAddHandler} />
            <Tasks
                items={tasks}
                loading={isLoading}
                error={error}
                onFetch={makeFetchRequest}
            />
        </React.Fragment>
    );
}

export default App;
