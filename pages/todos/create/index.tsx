import React from 'react';
import { NextPage } from 'next';

import TodoForm from '../../../components/todos/todo-form';

const TodosCreatePage: NextPage = () => {
	return (
		<div>
			<h3>Create todo</h3>
      <TodoForm />
		</div>
	);
};

export default TodosCreatePage;
