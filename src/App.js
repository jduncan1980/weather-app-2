import React, { Component } from 'react';
import axios from 'axios';

import Heading from './components/heading/Heading';
import Form from './components/form/Form';
import Forecast from './components/forecast/Forecast';
import Background from './components/background/Background';

import styles from './app.module.css';

require('dotenv').config();
const api_key = process.env.REACT_APP_API_KEY;

class App extends Component {
	state = {
		temperature: '',
		city: '',
		country: '',
		humidity: '',
		pressure: '',
		icon: '',
		description: '',
		error: '',
	};

	getWeather = async (e) => {
		const city = e.target.elements.city.value;
		const state = e.target.elements.state.value;
		const country = e.target.elements.country.value;
		e.preventDefault();
		console.log(api_key);
		if (city && country) {
			try {
				const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${state},${country}&units=imperial&appid=${api_key}`;
				const response = await axios.get(url);

				this.setState({
					temperature: response.data.main.temp,
					city: response.data.name,
					country: response.data.sys.country,
					humidity: response.data.main.humidity,
					pressure: response.data.main.pressure,
					icon: response.data.weather[0].icon,
					description: response.data.weather[0].description,
					error: '',
					code: response.data.cod,
					id: response.data.weather[0].id,
				});
				console.log(response);
			} catch (error) {
				this.setState({
					error: 'Please enter a valid city and country',
				});
			}
		} else {
			this.setState({
				error: 'Please fill out input fields...',
			});
		}
	};

	render() {
		return (
			<div className={styles.app}>
				<Background image={this.state.icon} />
				<Heading />
				<div className={styles.bottom}>
					<Form loadWeather={this.getWeather} />
					<Forecast
						temperature={this.state.temperature}
						city={this.state.city}
						country={this.state.country}
						humidity={this.state.humidity}
						pressure={this.state.pressure}
						icon={this.state.icon}
						description={this.state.description}
						error={this.state.error}
						code={this.state.code}
						id={this.state.id}
					/>
				</div>
			</div>
		);
	}
}

export default App;
