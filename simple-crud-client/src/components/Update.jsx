import React from 'react';
import { toast } from 'react-hot-toast';
import { useLoaderData, useNavigate } from 'react-router-dom';

const Update = () => {
	const loadedUsers = useLoaderData();
	const navigate = useNavigate();

	const handleUpdate = event => {
		event.preventDefault();
		const form = event.target;
		const name = form.name.value;
		const email = form.email.value;
		const updatedUser = { name, email };
		// console.log(updatedUser);

		fetch(`http://localhost:5000/users/${loadedUsers._id}`, {
			method: 'PUT',
			headers: {
				'content-type': 'application/json',
			},
			body: JSON.stringify(updatedUser),
		})
			.then(res => res.json())
			.then(data => {
				console.log(data);
				if (data.modifiedCount > 0) {
					toast.success('Updated successfully.');
					navigate('/read');
				}
			});
	};

	return (
		<div>
			<h3>
				Update information of <b>{loadedUsers.name}</b>
			</h3>
			<form onSubmit={handleUpdate}>
				<input
					type='text'
					name='name'
					placeholder='Name'
					defaultValue={loadedUsers.name}
					required
				/>{' '}
				<br />
				<input
					type='text'
					name='email'
					placeholder='Email'
					defaultValue={loadedUsers.email}
					required
				/>{' '}
				<br />
				<input type='submit' value='Update User' />
			</form>
		</div>
	);
};

export default Update;
