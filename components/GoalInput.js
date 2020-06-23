import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";

const GoalItem = (props) => {
	const [enteredGoal, setEnteredGoal] = useState("");

	const goalInputHandler = (enteredText) => {
		setEnteredGoal(enteredText);
	};

	//() => props.onAddGoal(enteredGoal)

	return (
		<View style={styles.inputContainer}>
			<TextInput
				placeholder="Course Goal"
				style={styles.input}
				onChangeText={goalInputHandler}
				value={enteredGoal}
			/>
			<Button title="ADD" onPress={props.onAddGoal.bind(this, enteredGoal)} />
		</View>
	);
};

const styles = StyleSheet.create({
	inputContainer: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
	},

	input: {
		borderColor: "#000",
		borderWidth: 1,
		padding: 10,
		width: "80%",
	},
});

export default GoalItem;
