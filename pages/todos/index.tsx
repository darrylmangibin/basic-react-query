import React from 'react';
import { NextPage } from 'next';

import TodosItem from '../../components/todos/todos-item';

const TodosPage: NextPage = () => {
	return (
		<div>
			<h3>Todos</h3>
			<ul>
				<TodosItem />
				<TodosItem />
				<TodosItem />
			</ul>
		</div>
	);
};

export default TodosPage;
