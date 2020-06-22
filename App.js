import React, { useState } from "react";
import {
	StyleSheet,
	Text,
	View,
	TextInput,
	Button,
	FlatList,
} from "react-native";

import GoalItem from "./components/GoalItem.js";

export default function App() {
	const [enteredGoal, setEnteredGoal] = useState("");
	const [courseGoals, setCourseGoals] = useState([]);

	const goalInputHandler = (enteredText) => {
		setEnteredGoal(enteredText);
	};

	const addGoalHandler = () => {
		setCourseGoals((currentGoals) => [
			...currentGoals,
			{ key: Math.random().toString(), value: enteredGoal },
		]);
	};

	return (
		<View style={styles.screen}>
			<View style={styles.inputContainer}>
				<TextInput
					placeholder="Course Goal"
					style={styles.input}
					onChangeText={goalInputHandler}
					value={enteredGoal}
				/>
				<Button title="ADD" onPress={addGoalHandler} />
			</View>
			<FlatList
				// keyExtractor={(item, index) => item.key} DEFAULT (ALSO ID IS SUPPORTED)
				data={courseGoals}
				renderItem={(itemData) => <GoalItem title={itemData.item.value} />}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	screen: {
		padding: 50,
	},

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
