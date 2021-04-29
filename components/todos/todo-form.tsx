import React, { useState } from 'react';

const TodoForm: React.FC = () => {
	const [title, setTitle] = useState<string>('');
	const [completed, setCompleted] = useState<boolean>(false);

	return (
		<form>
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
