import { Text, View, StyleSheet } from "react-native";

function GoalItem({ goal }) {
  return (
    <View style={styles.goalsItem}>
      <Text style={styles.goalsText}>{goal}</Text>
    </View>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
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
