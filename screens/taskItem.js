import { StyleSheet, View, Text, Image } from "react-native";

function TaskItem(props) {
  return (
    <View style={styles.tasks}>
      <Image source={props.icon} style={styles.view} />
      <View>
        <Text
          style={{ color: "white", fontSize: 16, fontWeight: "700" }}
        >{` ${props.text}`}</Text>
        <Text
          style={{
            opacity: 0.75,
            color: "white",
            fontSize: 12,
            left: 5,
            top: 8,
            fontWeight: "500",
          }}
        >
          {props.time} - {props.etime}
        </Text>
      </View>
    </View>
  );
}

export default TaskItem;

const styles = StyleSheet.create({
  tasks: {
    flexDirection: "row",
    borderBottomWidth: 32,
    borderBottomColor: "#041425",
  },
  view: {
    width: 48,
    height: 48,
    marginRight: 18,
  },
});
