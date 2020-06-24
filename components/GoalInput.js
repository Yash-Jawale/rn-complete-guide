import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet, Modal } from "react-native";

const GoalItem = (props) => {
	const [enteredGoal, setEnteredGoal] = useState("");

	const goalInputHandler = (enteredText) => {
		setEnteredGoal(enteredText);
	};

	//() => props.onAddGoal(enteredGoal)

	return (
		<Modal visible={props.isVisible} animationType="slide">
			<View style={styles.inputContainer}>
				<TextInput
					placeholder="Course Goal"
					style={styles.input}
					onChangeText={goalInputHandler}
					value={enteredGoal}
				/>
				<Button title="ADD" onPress={props.onAddGoal.bind(this, enteredGoal)} />
			</View>
		</Modal>
	);
};

const styles = StyleSheet.create({
	inputContainer: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},

	input: {
		borderColor: "#000",
		borderWidth: 1,
		padding: 10,
		width: "80%",
		marginBottom: 10,
	},
});

export default GoalItem;
