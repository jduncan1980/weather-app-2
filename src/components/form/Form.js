import React from 'react';
import styles from './form.module.css';

const Form = (props) => {
	return (
		<form className={styles.container} onSubmit={props.loadWeather}>
			<label className={styles.label} htmlFor='city'>
				Your City
			</label>
			<input
				className={styles.input}
				type='text'
				name='city'
				placeholder='Choose a city'
			></input>

			<label className={styles.label} htmlFor='state'>
				Your State (US Only)
			</label>
			<input
				className={styles.input}
				type='text'
				name='state'
				placeholder='Choose a state'
			></input>

			<label className={styles.label} htmlFor='country'>
				Your Country
			</label>
			<input
				className={styles.input}
				type='text'
				name='country'
				placeholder='Choose a country'
			></input>

			<button className={styles.button}>Get Weather</button>
		</form>
	);
};

export default Form;
