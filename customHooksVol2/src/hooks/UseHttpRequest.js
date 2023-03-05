import { useCallback, useState } from 'react';

const FIREBASE_API_URL =
    'https://react-http-d4588-default-rtdb.europe-west1.firebasedatabase.app/tasks.json';

const useHttpRequest = ({
    onAddTask = null,
    setTasks = null,
    post = false,
}) => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const makeFetchRequest = useCallback(async (taskText) => {
        setIsLoading(true);
        setError(null);

        try {
            let response = null;

            if (post) {
                response = await fetch(FIREBASE_API_URL, {
                    method: 'POST',
                    body: JSON.stringify({ text: taskText }),
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });
            } else {
                response = await fetch(
                    'https://react-http-d4588-default-rtdb.europe-west1.firebasedatabase.app/tasks.json'
                );
            }

            if (!response.ok) {
                throw new Error('Request failed!');
            }

            const data = await response.json();

            if (post) {
                const generatedId = data.name; // firebase-specific => "name" contains generated id
                const createdTask = { id: generatedId, text: taskText };

                onAddTask(createdTask);
            } else {
                const loadedTasks = [];

                for (const taskKey in data) {
                    loadedTasks.push({ id: taskKey, text: data[taskKey].text });
                }

                setTasks(loadedTasks);
            }
        } catch (err) {
            setError(err.message || 'Something went wrong!');
        }

        setIsLoading(false);
    }, []);

    return [isLoading, error, makeFetchRequest];
};

export default useHttpRequest;
