import React from 'react';
import Link from 'next/link';

import { Todo } from '../../interface/Todo';

interface TodosItemProps {
	todo: Todo;
}

const TodosItem: React.FC<TodosItemProps> = ({ todo }) => {
	return (
		<li>
			<Link href="/todos/[id]" as={`/todos/${todo.id}`}>
				{todo.title}
			</Link>
			<button>Delete</button>
			<button>
				<Link href="/todos/[id]/edit" as={`/todos/${todo.id}/edit`}>
					Edit
				</Link>
			</button>
		</li>
	);
};

export default TodosItem;
