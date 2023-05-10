import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import { useLoaderData } from 'react-router-dom';

const Delete = () => {
	const LoadedUsers = useLoaderData();
	const [users, setUsers] = useState(LoadedUsers);

	const handleDelete = _id => {
		fetch(`http://localhost:5000/users/${_id}`, {
			method: 'DELETE',
		})
			.then(res => res.json())
			.then(data => {
				console.log(data);
				if (data.deletedCount > 0) {
					toast.error('Deleted successfully.');
					const remainingUsers = users.filter(user => user._id !== _id);
					setUsers(remainingUsers);
				}
			});
	};

	return (
		<div>
			<h2>Number of users: {users.length}</h2>
			{users.map(user => (
				<div key={user._id}>
					{user.name} : {user.email}{' '}
					<button onClick={() => handleDelete(user._id)}>X</button>
				</div>
			))}
		</div>
	);
};

export default Delete;
