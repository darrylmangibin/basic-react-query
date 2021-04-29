import React from 'react';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useMutation, useQuery, useQueryClient } from 'react-query';

import TodoForm from '../../../components/todos/todo-form';

import { getTodo, updateTodo } from '../../../api/todos';
import { Todo, QueryKeyEnum } from '../../../interface/Todo';

const EditTodosPage: NextPage = () => {
	const queryClient = useQueryClient();
	const router = useRouter();

	const result = useQuery<Todo>({
		queryKey: [QueryKeyEnum.TODO, router.query.id],
		queryFn: () => getTodo(router.query.id as string),
		enabled: !!router.query.id,
	});

	const mutation = useMutation<Todo, { message: string }, unknown>(updateTodo, {
		onSuccess: (data) => {
			queryClient.setQueryData<Todo>([QueryKeyEnum.TODO, data.id], () => data);
			queryClient.setQueryData<Todo[]>(QueryKeyEnum.TODOS, (todos) =>
				todos.map((todo) => (todo.id === data.id ? data : todo))
			);

			setTimeout(() => {
				router.push('/todos');
			}, 250);
		},
	});

	const onSubmit = (todoData: Partial<Todo>) => {
		if (todoData.title.length > 0 && router.query.id) {
			mutation.mutate({ id: router.query.id as string, ...todoData });
		}
	};

	return (
		<div>
			<h3>Edit</h3>
			<TodoForm todo={result.data} onSubmit={onSubmit} />
			{(result.isLoading || mutation.isLoading) && <p>Loading...</p>}
		</div>
	);
};

export default EditTodosPage;
