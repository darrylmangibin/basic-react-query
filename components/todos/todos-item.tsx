import React from 'react';
import Link from 'next/link';
import { useMutation, useQueryClient } from 'react-query';

import { Todo, QueryKeyEnum } from '../../interface/Todo';
import { deleteTodo } from '../../api/todos';

interface TodosItemProps {
	todo: Todo;
}

const TodosItem: React.FC<TodosItemProps> = ({ todo }) => {
	const queryClient = useQueryClient();

	const mutation = useMutation(deleteTodo, {
		onSuccess: (_, id) => {
			queryClient.setQueryData<Todo[]>(QueryKeyEnum.TODOS, (todos) =>
				todos.filter((todo) => todo.id !== id)
			);
		},
	});

	return (
		<>
		<li>
			<Link href="/todos/[id]" as={`/todos/${todo.id}`}>
				{todo.title}
			</Link>
			<button onClick={() => mutation.mutate(todo.id)}>Delete</button>
			<button>
				<Link href="/todos/[id]/edit" as={`/todos/${todo.id}/edit`}>
					Edit
				</Link>
			</button>
		</li>
		{mutation.isLoading && <p>Loading...</p>}
		</>
	);
};

export default TodosItem;
