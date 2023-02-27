import { useState } from "react";
import { Button, TextInput, View, StyleSheet } from "react-native";

function GoalInput({ onAddGoal }) {
  const [enteredGoalText, setEnteredGoalText] = useState("");

  function goalsInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function onAddGoalHandler() {
    onAddGoal(enteredGoalText);
    setEnteredGoalText("");
  }

  return (
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
        onPress={onAddGoalHandler}
      />
    </View>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
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
});
