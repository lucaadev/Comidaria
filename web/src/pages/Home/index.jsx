import React from 'react';
import background from '../../../src/assets/cafe-geraes-background.png';

export default function index() {

	return (
		<div className='container-fluid d-flex flex-column align-items-center p-0'>
			<div className='row mt-5'>
				<div className='col-12 mt-5 d-flex flex-column align-items-center'>
					<h1 className='mb-5 title'>Comidaria</h1>
					<h2 className='text'>Escadabaixo</h2>
					<h2 className='text'>Bar e Cozinha</h2>
					<h2 className='text'>Café Geraes</h2>
					<button className='mt-5 buttonStyle'>
						<a href='/options' className='text-decoration-none textButton'>
							Entrar
						</a>
					</button>
				</div>
			</div>
			<img
				src={background}
				alt='Café Geraes'
				className='img-fluid imageStyle'
			/>
		</div>
	);
}
