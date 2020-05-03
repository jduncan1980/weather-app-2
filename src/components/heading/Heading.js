import React from 'react';
import styles from './heading.module.css';

const Heading = () => {
	return (
		<div className={styles.container}>
			<h1 className={styles.h1}>What's the weather?</h1>
		</div>
	);
};

export default Heading;
