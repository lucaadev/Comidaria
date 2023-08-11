import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../src/assets/cafegeraes-logo.png';

export default function index() {
	return (
		<div className='d-flex flex-column align-items-center'>
			<img src={logo} alt='Café Geraes' className='mt-4' />
			<h1 className='mt-4 textOptions'>Opções</h1>
			<Link to='/cafe' className='text text-decoration-none'>
				<h2 className='mt-3 text'>Café</h2>
			</Link>
			<Link to='/pub' className='text text-decoration-none'>
				<h2 className='mt-3 text'>Pub</h2>
			</Link>
			<Link to='/jardim' className='text text-decoration-none'>
				<h2 className='mt-3 text'>Jardim</h2>
			</Link>
			<Link to='/relatorio' className='text text-decoration-none'>
				<h2 className='mt-3 text'>Relatório</h2>
			</Link>
		</div>
	);
}
