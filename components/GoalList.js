import { FlatList, StyleSheet, Text, View } from "react-native";
import GoalItem from "./GoalItem";

function GoalList({ goals }) {
  return (
    <View style={styles.goalsContainer}>
      <Text style={styles.goalsListTitle}>List of Goals</Text>

      <FlatList
        data={goals}
        renderItem={(itemData) => <GoalItem goal={itemData.item.text} />}
        keyExtractor={(item) => `${item.id}`}
        style={styles.goalsItemsContainer}
        alwaysBounceVertical={true}
      />
    </View>
  );
}

export default GoalList;

const styles = StyleSheet.create({
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
