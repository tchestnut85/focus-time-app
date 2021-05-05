import { StyleSheet, Text, View } from 'react-native';
import { fontSizes, spacing } from '../../utils/sizes';

import React from 'react';
import { RoundedButton } from '../../components/RoundedButton';
import { colors } from '../../utils/colors';

export const Timing = ({ onChangeTime }) => {
	return (
		<>
			<View style={styles.timingButton}>
				<RoundedButton size={75} title='5' onPress={() => onChangeTime(5)} />
			</View>
			<View style={styles.timingButton}>
				<RoundedButton size={75} title='10' onPress={() => onChangeTime(10)} />
			</View>
			<View style={styles.timingButton}>
				<RoundedButton size={75} title='15' onPress={() => onChangeTime(15)} />
			</View>
		</>
	);
};

const styles = StyleSheet.create({
	timingButton: {
		flex: 1,
		alignItems: 'center',
	},
});
