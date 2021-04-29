import React from 'react';
import Link from 'next/link';

const TodosItem: React.FC = () => {
	return (
		<li>
			<Link href="/todos/[id]" as={`/todos/1`}>
				Todo 1
			</Link>
			<button>Delete</button>
			<button>
				<Link href="/todos/[id]/edit" as={`/todos/1/edit`}>Edit</Link>
			</button>
		</li>
	);
};

export default TodosItem;
