import React from 'react';
import { toast } from 'react-hot-toast';

const Create = () => {
	const handleAddUser = event => {
		event.preventDefault();
		const form = event.target;
		const name = form.name.value;
		const email = form.email.value;
		const user = { name, email };
		console.log(user);

		fetch('http://localhost:5000/users', {
			method: 'POST',
			headers: {
				'content-type': 'application/json',
			},
			body: JSON.stringify(user),
		})
			.then(res => res.json())
			.then(data => {
				console.log(data);
				if (data.insertedId) {
					toast.success('User added successfully');
					form.reset();
				}
			});
	};

	return (
		<div>
			<h2>Add User</h2>
			<form onSubmit={handleAddUser}>
				<input type='text' name='name' placeholder='Name' /> <br />
				<input type='text' name='email' placeholder='Email' /> <br />
				<input type='submit' value='Add User' />
			</form>
		</div>
	);
};

export default Create;
