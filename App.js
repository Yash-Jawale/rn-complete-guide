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
import GoalInput from "./components/GoalInput.js";

export default function App() {
	const [courseGoals, setCourseGoals] = useState([]);
	const [isAddMode, setIsAddMode] = useState(false);

	const addGoalHandler = (text) => {
		setCourseGoals((currentGoals) => [
			...currentGoals,
			{ key: Math.random().toString(), value: text },
		]);
		setIsAddMode(false);
	};

	const removeGoalHandler = (itemId) => {
		setCourseGoals((currentGoals) => {
			return currentGoals.filter((goal) => goal.key !== itemId);
		});
	};

	return (
		<View style={styles.screen}>
			<Button title="Add New Goal" onPress={() => setIsAddMode(true)} />
			<GoalInput isVisible={isAddMode} onAddGoal={addGoalHandler} />
			<FlatList
				// keyExtractor={(item, index) => item.key} DEFAULT (ALSO ID IS SUPPORTED)
				data={courseGoals}
				renderItem={(itemData) => {
					return (
						<GoalItem
							title={itemData.item.value}
							id={itemData.item.key}
							onDelete={removeGoalHandler}
						/>
					);
				}}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	screen: {
		padding: 50,
	},
});
