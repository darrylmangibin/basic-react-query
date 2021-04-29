import axios, { AxiosRequestConfig } from 'axios';

import { Todo } from '../interface/Todo';

export const getTodos = async (): Promise<Todo[]> => {
	const { data } = await axios.get<Todo[]>('http://localhost:5000/todos');

	return data;
};

export const getTodo = async (id: string): Promise<Todo> => {
	const { data } = await axios.get<Todo>(`http://localhost:5000/todos/${id}`);

	return data;
};

export const addTodo = async (todo) => {
	const config: AxiosRequestConfig = {
		headers: {
			'Content-Type': 'application/json',
		},
	};

	try {
		const { data } = await axios.post(
			'http://localhost:5000/todos',
			todo,
			config
		);
		return data;
	} catch (err) {
		throw { message: 'Something went wrong' };
	}
};
