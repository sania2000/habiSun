import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  Image,
  FlatList,
  Modal,
} from "react-native";
import { useState } from "react";
import Habit from "./habitMolid";
import Routine from "./routineMolid";
import Task from "./taskMolid";
import TaskItem from "./taskItem";
import colors from "../colorPalette";

export default function Main() {
  //start time
  const [date, setDate] = useState(new Date());
  const [text, setText] = useState(
    new Date().getHours() + ":" + new Date().getMinutes()
  );
  const onChange = (event, selectedEvent) => {
    const currentDate = selectedEvent || date;
    setDate(currentDate);
    let tempDate = new Date(currentDate);
    let ftime = tempDate.getHours() + ":" + tempDate.getMinutes();
    setText(ftime);
  };

  //end time
  const [endDate, setEndDate] = useState(new Date());
  const [endText, setEndText] = useState(
    new Date().getHours() + ":" + new Date().getMinutes()
  );
  const onChangeEnd = (event, selectedEvent) => {
    const currentDate = selectedEvent || endDate;
    setEndDate(currentDate);
    let tempDate = new Date(currentDate);
    let ftime = tempDate.getHours() + ":" + tempDate.getMinutes();
    setEndText(ftime);
    console.log(ftime);
  };

  //habit popup
  const [showHabit, setShowHabit] = useState(false);
  const toggleHabit = () => {
    setShowHabit(!showHabit);
    setImage(require("../assets/icons/ContainerIconY.png"));
  };

  //routine popup
  const [showRoutine, setShowRoutine] = useState(false);
  const toggleRoutin = () => {
    setShowRoutine(!showRoutine);
    setImage(require("../assets/icons/routineBox.png"));
  };

  //task popup
  const [showTask, setShowTask] = useState(false);
  const toggleTask = () => {
    setShowTask(!showTask);
    setImage(require("../assets/icons/taskBox.png"));
  };

  //additional buttons popup
  const [showAdditionalButtons, setShowAdditionalButtons] = useState(false);
  const toggleAdditionalButtons = () => {
    setShowAdditionalButtons(!showAdditionalButtons);
  };

  //handling inputs
  const [enteredTaskText, setEnteredTaskText] = useState("");
  const [image, setImage] = useState(
    require("../assets/icons/ContainerIconP.png")
  );
  const [tasks, setTasks] = useState([]);
  function endAddTaskHandler() {
    setShowRoutine(false);
    setShowTask(false);
    setShowHabit(false);
    toggleAdditionalButtons();
  }
  function addTaskHandler() {
    setTasks((currentTasks) => [
      ...currentTasks,
      { text: enteredTaskText, image: image, time: text, endtime: endText },
    ]);
    setEnteredTaskText("");
    endAddTaskHandler();
    setDate(new Date());
    setEndDate(new Date());
    setText(new Date().getHours() + ":" + new Date().getMinutes());
    setEndText(new Date().getHours() + ":" + new Date().getMinutes());
  }
  function taskInputHandler(enteredText) {
    setEnteredTaskText(enteredText);
  }

  return (
    <SafeAreaView style={styles.container}>
      {/*screen title*/}
      <Text style={styles.textOne}>HabiSun</Text>
      {/*list title*/}
      <Text style={styles.textTwo}>Today</Text>
      {/*list*/}
      <FlatList
        style={styles.flatList}
        data={tasks}
        renderItem={(itemData) => {
          return (
            <TaskItem
              value={itemData.index}
              text={itemData.item.text}
              id={itemData.item.key}
              icon={itemData.item.image}
              time={itemData.item.time}
              etime={itemData.item.endtime}
            />
          );
        }}
        keyExtractor={(item, index) => index.toString()}
      />
      {/*pluss button*/}
      <TouchableOpacity
        style={styles.addButton}
        onPress={toggleAdditionalButtons}
      >
        <Image source={require("../assets/plus.png")} />
      </TouchableOpacity>
      {/*additional buttons*/}
      {showAdditionalButtons && (
        <Modal animationType="fade" transparent>
          <View style={styles.buttonsContainer}>
            {/*habbit modal*/}
            <TouchableOpacity style={styles.habitButton} onPress={toggleHabit}>
              <Modal visible={showHabit} animationType="slide" transparent>
                <Habit
                  onChange={taskInputHandler}
                  onPress={addTaskHandler}
                  value={enteredTaskText}
                  cancel={toggleHabit}
                  date={onChange}
                  cdate={date}
                  edate={onChangeEnd}
                  ecdate={endDate}
                />
              </Modal>
              <Image source={require("../assets/tabler.png")} />
            </TouchableOpacity>
            {/*routine modal*/}
            <TouchableOpacity
              style={styles.routineButton}
              onPress={toggleRoutin}
            >
              <Modal visible={showRoutine} animationType="slide" transparent>
                <Routine
                  onChange={taskInputHandler}
                  onPress={addTaskHandler}
                  value={enteredTaskText}
                  cancel={toggleRoutin}
                  date={onChange}
                  cdate={date}
                  edate={onChangeEnd}
                  ecdate={endDate}
                />
              </Modal>
              <Image source={require("../assets/routine.png")} />
            </TouchableOpacity>
            {/*task modal*/}
            <TouchableOpacity style={styles.taskButton} onPress={toggleTask}>
              <Modal visible={showTask} animationType="slide" transparent>
                <Task
                  onChange={taskInputHandler}
                  onPress={addTaskHandler}
                  value={enteredTaskText}
                  cancel={toggleTask}
                  date={onChange}
                  cdate={date}
                  edate={onChangeEnd}
                  ecdate={endDate}
                />
              </Modal>
              <Image source={require("../assets/task.png")} />
            </TouchableOpacity>
            {/*close button*/}
            <TouchableOpacity
              style={styles.xButton}
              onPress={toggleAdditionalButtons}
            >
              <Image source={require("../assets/x.png")} />
            </TouchableOpacity>
          </View>
        </Modal>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    width: "100%",
    height: "100%",
    flexDirection: "column",
    alignItems: "center",
    position: "relative",
  },
  textOne: {
    width: "100%",
    height: "100%",
    top: 64,
    position: "absolute",
    textAlign: "center",
    color: colors.accent,
    fontSize: 54,
  },
  textTwo: {
    textAlign: "center",
    color: colors.white,
    fontSize: 18,
    position: "absolute",
    top: 138,
  },
  seperator: {
    height: 32,
    width: "100%",
  },
  flatList: {
    top: 184,
    width: "100%",
    height: 608,
    bottom: 134,
    position: "absolute",
    left: 80,
  },
  addButton: {
    position: "absolute",
    width: 64,
    height: 64,
    left: 332,
    top: 806,
    backgroundColor: colors.accent,
    borderRadius: 64,
    justifyContent: "center",
    alignItems: "center",
  },
  xButton: {
    width: 64,
    height: 64,
    backgroundColor: colors.accent,
    left: 332,
    marginTop: 21,
    zIndex: 0,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 64,
  },
  routineButton: {
    backgroundColor: colors.accent,
    width: 52,
    height: 52,
    marginTop: 21,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 64,
    left: 338,
    zIndex: 0,
  },
  taskButton: {
    backgroundColor: colors.accent,
    width: 52,
    height: 52,
    marginTop: 21,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 64,
    left: 338,
    zIndex: 0,
  },
  habitButton: {
    backgroundColor: colors.accent,
    width: 52,
    height: 52,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 64,
    left: 338,
    zIndex: 0,
    flexDirection: "row",
  },
  buttonsContainer: {
    height: "100%",
    width: "100%",
    top: 588,
    position: "absolute",
    backgroundColor: colors.background,
    zIndex: 1,
  },
});
