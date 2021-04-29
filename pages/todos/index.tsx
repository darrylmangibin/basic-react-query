import React from 'react';
import { NextPage, GetServerSideProps } from 'next';
import { useQuery } from 'react-query';

import TodosItem from '../../components/todos/todos-item';

import { Todo, QueryKeyEnum } from '../../interface/Todo';
import { getTodos } from '../../api/todos';

interface TodosPageProps {
	todos: Todo[];
}

const TodosPage: NextPage<TodosPageProps> = ({ todos }) => {
	const result = useQuery(QueryKeyEnum.TODOS, getTodos, {
		initialData: todos,
	});

	return (
		<div>
			<h3>Todos</h3>
			<ul>
				{result.data.map((todo) => (
					<TodosItem key={todo.id} todo={todo} />
				))}
			</ul>
		</div>
	);
};

export const getServerSideProps: GetServerSideProps<TodosPageProps> = async () => {
	const data = await getTodos();

	return {
		props: {
			todos: data,
		},
	};
};

export default TodosPage;
