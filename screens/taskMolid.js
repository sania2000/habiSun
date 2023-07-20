import React, { useState } from "react";
import {
  View,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import colors from "../colorPalette";
import DateTimePicker from "@react-native-community/datetimepicker";

export default function Task(props) {
  //time picker display
  const [show, setShow] = useState(true);
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <View style={styles.title}>
          <Image source={require("../assets/task.png")} />
          <Text style={styles.titleText}>Add a Task</Text>
        </View>
        <TextInput
          style={styles.inputBox}
          placeholder="Name your task"
          onChangeText={props.onChange}
          value={props.value}
        ></TextInput>
        <View style={styles.timeBox}>
          <View>
            <Text style={styles.text}>Start</Text>
          </View>
          {show && (
            <DateTimePicker
              style={{
                position: "absolute",
                left: 57,
                top: 36,
              }}
              testID="dateTimePicker"
              value={props.cdate}
              mode="time"
              display="default"
              onChange={props.date}
            />
          )}
          <Text style={styles.line}>•-----------------•</Text>
          <View>
            <Text style={styles.text}>End</Text>
          </View>
          {show && (
            <DateTimePicker
              style={{
                position: "absolute",
                left: 285,
                top: 36,
              }}
              testID="dateTimePicker"
              value={props.ecdate}
              mode="time"
              display="default"
              onChange={props.edate}
            />
          )}
        </View>
        <TouchableOpacity
          style={styles.addButton}
          visible={props.visible}
          onPress={props.onPress}
        >
          <Text style={styles.buttonText}>Add Task</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            height: 50,
            width: 50,
            position: "absolute",
            top: 18,
            left: 18,
          }}
          onPress={props.cancel}
        >
          <Image source={require("../assets/x.png")} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  box: {
    height: 706,
    width: "100%",
    borderRadius: 20,
    backgroundColor: colors.task,
    alignItems: "center",
  },
  title: {
    flexDirection: "row",
    width: "100%",
    height: "100%",
    top: 64,
    justifyContent: "center",
  },
  titleText: {
    top: 4,
    textAlign: "center",
    color: colors.background,
    fontSize: 18,
    left: 8,
    fontWeight: "700",
  },
  inputBox: {
    width: 300,
    height: 52,
    paddingHorizontal: 64,
    top: 124,
    position: "absolute",
    backgroundColor: "rgba(250, 240, 202, 0.50)",
    borderRadius: 20,
    textAlign: "center",
  },
  timeBox: {
    width: "100%",
    height: "100%",
    paddingHorizontal: 64,
    top: 208,
    flexDirection: "row",
    position: "absolute",
  },
  text: {
    fontSize: 18,
    color: colors.background,
    textAlign: "center",
    fontWeight: "700",
    width: 72,
    height: 40,
  },
  time: {
    fontSize: 14,
    color: colors.background,
    fontWeight: "500",
    width: 72,
    height: 40,
    textAlign: "center",
  },
  line: {
    textAlign: "center",
    top: 20,
    width: 140,
    fontWeight: "500",
    marginHorizontal: 8,
  },
  dayBox: {
    width: "100%",
    height: "100%",
    position: "absolute",
    top: 306,
    paddingHorizontal: 64,
    flexDirection: "row",
  },
  dayButton: {
    width: 36,
    height: 36,
    borderRadius: 64,
    marginRight: 8,
    justifyContent: "center",
  },
  dayText: {
    color: "#041425",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "center",
  },
  addButton: {
    height: 52,
    width: 300,
    backgroundColor: "#E9D2F4",
    position: "absolute",
    top: 580,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
  },
  buttonText: {
    color: "#041425",
    fontSize: 14,
    fontWeight: "400",
    letterSpacing: 0.28,
  },
  habitInputBox: {
    width: 300,
    height: 32,
    position: "absolute",
    top: 374,
    flexDirection: "row",
    left: 64,
  },
  habitInput: {
    width: 264,
    height: 32,
    backgroundColor: "#FAF0CA",
    opacity: 0.5,
    borderRadius: 12,
    textAlign: "center",
    marginRight: 8,
  },
  plusButtonContainer: {
    width: 28,
    height: 28,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  plusButton: {
    fontSize: 36,
    fontWeight: "300",
    textAlign: "center",
    bottom: 8,
  },
});
