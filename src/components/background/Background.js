import React from 'react';
import styles from './background.module.css';

import clearday from '../../image/clearday.jpeg';
import clearnight from '../../image/clearnight.jpeg';
import cloudynight from '../../image/cloudynight.jpeg';
import cloudyday from '../../image/cloudyday.jpeg';
import rainyday from '../../image/rainyday.jpeg';
import rainynight from '../../image/rainynight.jpeg';
import snowyday from '../../image/snowyday.jpeg';
import snowynight from '../../image/snowynight.jpeg';
import misty from '../../image/misty.jpeg';

// Push background image when forecast is loaded
const Background = (props) => {
	const getImage = function (image) {
		if (image === '01d') {
			return clearday;
		} else if (image === '01n') {
			return clearnight;
		} else if (image === '02d' || image === '03d' || image === '04d') {
			return cloudyday;
		} else if (image === '02n' || image === '03n' || image === '04n') {
			return cloudynight;
		} else if (image === '09d' || image === '10d' || image === '11d') {
			return rainyday;
		} else if (image === '09n' || image === '10n' || image === '11n') {
			return rainynight;
		} else if (image === '13d') {
			return snowyday;
		} else if (image === '13n') {
			return snowynight;
		} else if (image === '50d' || image === '50n') {
			return misty;
		} else {
			return;
		}
	};

	return (
		<div className={styles.container}>
			<img className={styles.image} src={getImage(props.image)}></img>
		</div>
	);
};

export default Background;
