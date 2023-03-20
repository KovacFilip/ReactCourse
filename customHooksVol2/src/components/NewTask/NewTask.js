import useHttpRequest from '../../hooks/UseHttpRequest';

import Section from '../UI/Section';
import TaskForm from './TaskForm';

const NewTask = (props) => {
    const [isLoading, error, enterTaskHandler] = useHttpRequest({
        onAddTask: props.onAddTask,
        post: true,
    });

    return (
        <Section>
            <TaskForm onEnterTask={enterTaskHandler} loading={isLoading} />
            {error && <p>{error}</p>}
        </Section>
    );
};

export default NewTask;
