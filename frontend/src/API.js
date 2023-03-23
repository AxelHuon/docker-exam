import axios from "axios";

export const getTodos = async () => {
	try {
		const response = await axios.get('http://localhost:4001/todos');
		return response;
	} catch (error) {
		throw new Error(`Error retrieving todos: ${error}`);
	}
};

export const createTodo = async (formData) => {
	try {
		const response = await axios.post('http://localhost:4001/todos',formData);
		return response;
	} catch (error) {
		throw new Error(`Error retrieving todos: ${error}`);
	}
};

export const deleteTodo = async (todoId) => {
	try {
		const response = await axios.delete(`http://localhost:4001/todos/${todoId}`);
		return response;
	} catch (error) {
		throw new Error(`Error retrieving todos: ${error}`);
	}
};
