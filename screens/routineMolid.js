import React, { useState } from "react";
import {
  View,
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";

export default function Routine(props) {
  const [show, setShow] = useState(true);
  const [buttonColorM, setButtonColorM] = useState("#F2F2F2");

  const changeButtonColorM = () => {
    const newColor = buttonColorM === "#F2F2F2" ? "#E9D2F4" : "#F2F2F2";
    setButtonColorM(newColor);
  };
  const [buttonColorT, setButtonColorT] = useState("#F2F2F2");

  const changeButtonColorT = () => {
    const newColor = buttonColorT === "#F2F2F2" ? "#E9D2F4" : "#F2F2F2";
    setButtonColorT(newColor);
  };
  const [buttonColorW, setButtonColorW] = useState("#F2F2F2");

  const changeButtonColorW = () => {
    const newColor = buttonColorW === "#F2F2F2" ? "#E9D2F4" : "#F2F2F2";
    setButtonColorW(newColor);
  };
  const [buttonColorTh, setButtonColorTh] = useState("#F2F2F2");

  const changeButtonColorTh = () => {
    const newColor = buttonColorTh === "#F2F2F2" ? "#E9D2F4" : "#F2F2F2";
    setButtonColorTh(newColor);
  };
  const [buttonColorF, setButtonColorF] = useState("#F2F2F2");

  const changeButtonColorF = () => {
    const newColor = buttonColorF === "#F2F2F2" ? "#E9D2F4" : "#F2F2F2";
    setButtonColorF(newColor);
  };
  const [buttonColorS, setButtonColorS] = useState("#F2F2F2");

  const changeButtonColorS = () => {
    const newColor = buttonColorS === "#F2F2F2" ? "#E9D2F4" : "#F2F2F2";
    setButtonColorS(newColor);
  };
  const [buttonColor, setButtonColor] = useState("#F2F2F2");

  const changeButtonColor = () => {
    const newColor = buttonColor === "#F2F2F2" ? "#E9D2F4" : "#F2F2F2";
    setButtonColor(newColor);
  };
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <View style={styles.title}>
          <Image source={require("../assets/routine.png")} />
          <Text style={styles.titleText}>Add a Routine</Text>
        </View>
        <TextInput
          style={styles.inputBox}
          placeholder="Name your routine"
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
        <View style={styles.dayBox}>
          <Pressable
            onPress={changeButtonColorM}
            style={[styles.dayButton, { backgroundColor: buttonColorM }]}
          >
            <Text style={styles.dayText}>M</Text>
          </Pressable>
          <Pressable
            onPress={changeButtonColorT}
            style={[styles.dayButton, { backgroundColor: buttonColorT }]}
          >
            <Text style={styles.dayText}>T</Text>
          </Pressable>
          <Pressable
            onPress={changeButtonColorW}
            style={[styles.dayButton, { backgroundColor: buttonColorW }]}
          >
            <Text style={styles.dayText}>W</Text>
          </Pressable>
          <Pressable
            onPress={changeButtonColorTh}
            style={[styles.dayButton, { backgroundColor: buttonColorTh }]}
          >
            <Text style={styles.dayText}>T</Text>
          </Pressable>
          <Pressable
            onPress={changeButtonColorF}
            style={[styles.dayButton, { backgroundColor: buttonColorF }]}
          >
            <Text style={styles.dayText}>F</Text>
          </Pressable>
          <Pressable
            onPress={changeButtonColorS}
            style={[styles.dayButton, { backgroundColor: buttonColorS }]}
          >
            <Text style={styles.dayText}>S</Text>
          </Pressable>
          <Pressable
            onPress={changeButtonColor}
            style={[styles.dayButton, { backgroundColor: buttonColor }]}
          >
            <Text style={styles.dayText}>S</Text>
          </Pressable>
        </View>
        <View style={styles.habitInputBox}>
          <TextInput style={styles.habitInput} placeholder="Add a habit" />
          <TouchableOpacity styles={styles.plusButtonContainer}>
            <Text style={styles.plusButton}>+</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.addButton} onPress={props.onPress}>
          <Text style={styles.buttonText}>Add Routine</Text>
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
    backgroundColor: "#FF4E57",
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
    color: "#041425",
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
    color: "#041425",
    textAlign: "center",
    fontWeight: "700",
    width: 72,
    height: 40,
  },
  time: {
    fontSize: 14,
    color: "#041425",
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
