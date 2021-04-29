import axios from 'axios';

import { Todo } from '../interface/Todo';

export const getTodos = async (): Promise<Todo[]> => {
	const { data } = await axios.get<Todo[]>('http://localhost:5000/todos');

	return data;
};
