import React from 'react';
import { NextPage } from 'next';
import { useMutation, useQueryClient } from 'react-query';

import TodoForm from '../../../components/todos/todo-form';
import { Todo, QueryKeyEnum } from '../../../interface/Todo';
import { addTodo } from '../../../api/todos';

const TodosCreatePage: NextPage = () => {
	const queryClient = useQueryClient();

	const mutation = useMutation(addTodo);

	const onSubmit = (data: Partial<Todo>) => {
		if (data.title.length <= 0) {
			return window.alert('Please add a atitle');
		}

		mutation.mutate(data, {
			onSuccess: (data) => {
				if (queryClient.getQueryData(QueryKeyEnum.TODOS)) {
					queryClient.setQueryData<Todo[]>(QueryKeyEnum.TODOS, (todos) => [
						...todos,
						data,
					]);
				}
			},
		});
	};

	return (
		<div>
			<h3>Create todo</h3>
			<TodoForm onSubmit={onSubmit} />
			{mutation.isLoading && <p>Loading...</p>}
		</div>
	);
};

export default TodosCreatePage;
