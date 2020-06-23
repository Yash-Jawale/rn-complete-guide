import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const GoalItem = (props) => {
	return (
		<TouchableOpacity onPress={props.onDelete.bind(this, props.id)}>
			<View style={styles.listItem}>
				<Text>{props.title}</Text>
			</View>
		</TouchableOpacity>
	);
};

export default GoalItem;

const styles = StyleSheet.create({
	listItem: {
		padding: 10,
		marginVertical: 10,
		borderWidth: 1,
		borderColor: "#000",
		backgroundColor: "#ccc",
	},
});
