import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    paddingTop: 20,
  },
  Tasks: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 5,
    padding: 10, 
    borderRadius: 10,
  },
  buttonsContainer: { 
    flexDirection: "row",
    alignItems: "center",
  },
  deleteTask: {
    justifyContent: "center",
    paddingRight: 10, 
  },
  markTask: { 
    justifyContent: "center",
    paddingLeft: 10, 
  },
  DescriptionTask: {
    width: "75%",
    alignContent: "flex-start",
    backgroundColor: "#f5f5f5cf", 
    padding: 12,
    paddingHorizontal: 20,
    borderRadius: 50,
    marginBottom: 5,
    marginRight: 15,
    color: "#878af6",
  },
  buttonNewTask: {
    width: 60,
    height: 60,
    position: "absolute",
    bottom: 30,
    left: 20,
    backgroundColor: "#878af6",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  iconButton: {
    color: "#FFFFFF",
    fontSize: 25,
    fontWeight: "bold",
  },
});

export default styles;
