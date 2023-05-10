import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Read = () => {
	const LoadedUsers = useLoaderData();

	return (
		<div>
			<h2>Number of users: {LoadedUsers.length}</h2>
			{LoadedUsers.map(user => (
				<div key={user._id}>
					{user.name} : {user.email}{' '}
					<Link to={`/update/${user._id}`}>
						<button>update</button>
					</Link>
				</div>
			))}
		</div>
	);
};

export default Read;
