import React from 'react';
import { Link } from 'react-router-dom';
const Header = () => {
	return (
		<nav>
			<Link style={{ marginRight: '10px' }} to='/create'>
				Create
			</Link>
			<Link style={{ marginRight: '10px' }} to='/read'>
				Read
			</Link>
			{/* <Link style={{ marginRight: '10px' }} to='/update'>
				Update
			</Link> */}
			<Link style={{ marginRight: '10px' }} to='/delete'>
				Delete
			</Link>
		</nav>
	);
};

export default Header;
