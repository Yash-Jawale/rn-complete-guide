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

	const addGoalHandler = (text) => {
		setCourseGoals((currentGoals) => [
			...currentGoals,
			{ key: Math.random().toString(), value: text },
		]);
	};

	return (
		<View style={styles.screen}>
			<GoalInput onAddGoal={addGoalHandler} />
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
});
