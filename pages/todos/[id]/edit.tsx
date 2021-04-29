import React from 'react';
import { NextPage } from 'next';

import TodoForm from '../../../components/todos/todo-form';

const EditTodosPage: NextPage = () => {
	return (
		<div>
			<h3>Edit</h3>
			<TodoForm />
		</div>
	);
};

export default EditTodosPage;
