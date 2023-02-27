import { useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import GoalInput from "./components/GoalInput";
import GoalItem from "./components/GoalItem";

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

      <View style={styles.goalsContainer}>
        <Text style={styles.goalsListTitle}>List of Goals</Text>

        <FlatList
          data={courseGoals}
          renderItem={(itemData) => <GoalItem goal={itemData.item.text} />}
          keyExtractor={(item) => `${item.id}`}
          style={styles.goalsItemsContainer}
          alwaysBounceVertical={true}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },

  goalsContainer: {
    flex: 5,
  },

  goalsListTitle: {
    alignSelf: "center",
    fontSize: 24,
    color: "#075759",
    textAlign: "center",
    borderBottomWidth: 1,
    borderBottomColor: "rgba(27, 202, 205, 0.21)",
    padding: 8,
    marginBottom: 12,
  },

  goalsItemsContainer: {
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
});
