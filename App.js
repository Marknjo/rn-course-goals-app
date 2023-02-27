import { useId, useState } from "react";
import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState("");
  const [courseGoals, setCourseGoals] = useState([]);

  function goalsInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function addGoalsHandler() {
    setCourseGoals((prevGoals) => [
      {
        text: enteredGoalText.trim(),
        id: Math.floor(Math.random() * 100 * enteredGoalText.length).toString(),
      },
      ...prevGoals,
    ]);
    setEnteredGoalText("");
  }

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder='Your Course Goal'
          onChangeText={goalsInputHandler}
          value={enteredGoalText}
        />
        <Button
          title='Add Goal'
          accessibilityLabel='Click to add course goal'
          color='#1bcacd'
          onPress={addGoalsHandler}
        />
      </View>
      <View style={styles.goalsContainer}>
        <Text style={styles.goalsListTitle}>List of Goals</Text>

        <FlatList
          data={courseGoals}
          renderItem={(itemData) => {
            return (
              <View style={styles.goalsItem}>
                <Text style={styles.goalsText}>{itemData.item.text}</Text>
              </View>
            );
          }}
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

  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },

  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "70%",
    marginRight: 8,
    paddingVertical: 4,
    paddingHorizontal: 8,
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

  goalsItem: {
    margin: 8,
    padding: 8,
    borderRadius: 4,
    backgroundColor: "#5e0acc",
  },

  goalsText: {
    color: "white",
  },
});
