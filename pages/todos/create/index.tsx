import React from 'react';
import { NextPage } from 'next';
import { useMutation, useQueryClient } from 'react-query';
import { useRouter } from 'next/router';

import TodoForm from '../../../components/todos/todo-form';
import { Todo, QueryKeyEnum } from '../../../interface/Todo';
import { addTodo } from '../../../api/todos';

const TodosCreatePage: NextPage = () => {
	const router = useRouter();
	const queryClient = useQueryClient();

	const mutation = useMutation<Todo, { message: string }, unknown>(addTodo);

	const onSubmit = (data: Partial<Todo>) => {
		if (data.title.length <= 0) {
			return window.alert('Please add a atitle');
		}

		mutation.mutateAsync(data, {
			onSuccess: (data) => {
				if (queryClient.getQueryData(QueryKeyEnum.TODOS)) {
					queryClient.setQueryData<Todo[]>(QueryKeyEnum.TODOS, (todos) => [
						...todos,
						data,
					]);

					setTimeout(() => {
						router.push('/todos');
					}, 250);
				}
			},
		});
	};

	return (
		<div>
			<h3>Create todo</h3>
			<TodoForm onSubmit={onSubmit} />
			{mutation.isLoading && <p>Loading...</p>}
			{mutation.isError && <p>{mutation.error.message}</p>}
			{mutation.isSuccess && <p>Success!!</p>}
		</div>
	);
};

export default TodosCreatePage;
