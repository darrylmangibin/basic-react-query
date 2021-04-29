import React, { useState } from 'react';

import { Todo } from '../../interface/Todo';

interface TodoFormProps {
	onSubmit?: (arg: Partial<Todo>) => Promise<void> | void;
}

const TodoForm: React.FC<TodoFormProps> = ({ onSubmit }) => {
	const [title, setTitle] = useState<string>('');
	const [completed, setCompleted] = useState<boolean>(false);

	const onSubmitHandler = (e: React.ChangeEvent<HTMLFormElement>) => {
		e.preventDefault();

		onSubmit({ title, completed });
	};

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
