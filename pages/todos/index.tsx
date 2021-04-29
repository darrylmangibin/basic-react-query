import React from 'react';
import { NextPage } from 'next';

import TodosItem from '../../components/todos/todos-item';

import { Todo } from '../../interface/Todo';
interface TodosPageProps {
	todos: Todo[];
}

const TodosPage: NextPage<TodosPageProps> = ({ todos }) => {
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
