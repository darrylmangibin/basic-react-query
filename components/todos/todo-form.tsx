import React, { useEffect, useState } from 'react';

import { Todo } from '../../interface/Todo';

interface TodoFormProps {
	onSubmit?: (arg: Partial<Todo>) => Promise<void> | void;
	todo?: Todo;
}

const TodoForm: React.FC<TodoFormProps> = ({ onSubmit, todo }) => {
	const [title, setTitle] = useState<string>('');
	const [completed, setCompleted] = useState<boolean>(false);

	const onSubmitHandler = (e: React.ChangeEvent<HTMLFormElement>) => {
		e.preventDefault();

		onSubmit({ title, completed });
	};

	useEffect(() => {
		if (todo) {
			setTitle(todo.title);
			setCompleted(todo.completed);
		}
	}, [todo]);

	return (
		<form onSubmit={onSubmitHandler}>
			<div>
				<label htmlFor="title">Title: </label>
				<input
					type="text"
					name="title"
					id="title"
					value={title}
					onChange={(e) => setTitle(e.target.value)}
				/>
			</div>
			<div>
				<label htmlFor="completed">Completed: </label>
				<input
					type="checkbox"
					name="completed"
					id="completed"
					checked={completed}
					onChange={(e) => setCompleted(e.target.checked)}
				/>
			</div>
			<div>
				<button>Submit</button>
			</div>
		</form>
	);
};

export default TodoForm;
