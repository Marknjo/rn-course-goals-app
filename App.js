import { useState } from "react";
import { StyleSheet, View } from "react-native";
import GoalInput from "./components/GoalInput";
import GoalList from "./components/GoalList";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);

  function addGoalsHandler(enteredGoalText) {
    setCourseGoals((prevGoals) => [
      {
        text: enteredGoalText.trim(),
        id: Math.floor(Math.random() * 100 * enteredGoalText.length).toString(),
      },
      ...prevGoals,
    ]);
  }

  return (
    <View style={styles.appContainer}>
      <GoalInput onAddGoal={addGoalsHandler} />
      <GoalList goals={courseGoals} />
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
});
