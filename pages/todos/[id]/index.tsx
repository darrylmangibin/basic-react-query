import React from 'react';
import { GetServerSideProps, NextPage } from 'next';
import Link from 'next/link';
import { useQuery } from 'react-query';
import { useRouter } from 'next/router';

import { Todo, QueryKeyEnum } from '../../../interface/Todo';
import { getTodo } from '../../../api/todos';

interface TodoDetailsPageProps {
	todo: Todo;
}

const TodoDetailsPage: NextPage<TodoDetailsPageProps> = ({ todo }) => {
	const router = useRouter();

	const result = useQuery(
		[QueryKeyEnum.TODO, router.query.id],
		() => getTodo(router.query.id as string),
		{
			initialData: todo,
		}
	);

	return (
		<div>
			<h3>{result.data.title}</h3>
			<p>Completed: {result.data.completed ? 'Yes' : 'No'}</p>
			<button>
				<Link href="/todos">Go back</Link>
			</button>
		</div>
	);
};

export const getServerSideProps: GetServerSideProps<
	TodoDetailsPageProps,
	{ id: string }
> = async (context) => {
	const { id } = context.params;

	const data = await getTodo(id);

	return {
		props: {
			todo: data,
		},
	};
};

export default TodoDetailsPage;
