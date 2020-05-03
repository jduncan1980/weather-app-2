import React from 'react';
import styles from './forecast.module.css';
import '../../fonts/owfont-master/css/owfont-regular.min.css';

const Forecast = (props) => {
	console.log(props.code);
	return (
		<div className={styles.container}>
			{props.city === '' && <h3 className={styles.h3}>Enter your location.</h3>}

			{props.country && props.city && !props.error && (
				<p>
					Location: {props.city}, {props.country}
				</p>
			)}
			{props.temperature && !props.error && (
				<p>Temperature: {Math.round(props.temperature)}f</p>
			)}
			{props.humidity && !props.error && <p>Humidity: {props.humidity}%</p>}
			{props.pressure && !props.error && <p>Pressure: {props.pressure}hpa</p>}
			{props.icon && !props.error && (
				<i className={'owf owf-5x owf-' + props.id}></i>
			)}

			{props.description && !props.error && (
				<p>Conditions: {props.description}</p>
			)}
			{props.error && <p>{props.error}</p>}
		</div>
	);
};

export default Forecast;
