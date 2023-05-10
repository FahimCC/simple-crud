import React from 'react';
import ReactDOM from 'react-dom/client';
import { Toaster } from 'react-hot-toast';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import Create from './components/Create.jsx';
import Delete from './components/Delete.jsx';
import Read from './components/Read.jsx';
import Update from './components/Update.jsx';
import './index.css';

const router = createBrowserRouter([
	{
		path: '/',
		element: <App></App>,
		children: [
			{
				path: '',
				element: <h1>Simple CRUD</h1>,
			},
			{
				path: '/create',
				element: <Create />,
			},
			{
				path: '/read',
				element: <Read />,
				loader: () => fetch('http://localhost:5000/users'),
			},
			{
				path: '/update/:id',
				element: <Update />,
				loader: ({ params }) =>
					fetch(`http://localhost:5000/users/${params.id}`),
			},
			{
				path: '/delete',
				element: <Delete />,
				loader: () => fetch('http://localhost:5000/users'),
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<RouterProvider router={router} />
		<Toaster />
	</React.StrictMode>
);
