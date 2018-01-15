import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  TextInput
} from "react-native";

export default ({ navigation, screenProps }) => {
  const { isManager, changeUserType } = screenProps;
  return (
    <View style={styles.screen}>
      <View style={styles.container}>
        <View style={styles.switchUserType}>
          <TouchableOpacity
            style={isManager ? styles.activeButton : styles.inactiveButton}
            onPress={() => changeUserType(true)}
          >
            <Text style={isManager ? styles.activeText : styles.inactiveText}>
              경영주
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={!isManager ? styles.activeButton : styles.inactiveButton}
            onPress={() => changeUserType(false)}
          >
            <Text style={!isManager ? styles.activeText : styles.inactiveText}>
              직원
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.signinContainer}>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1
  },
  container: {
    flex: 1,
    margin: 10,
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: "#d6d7da",
    backgroundColor: "white"
  },
  switchUserType: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around"
  },
  activeButton: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#343A8D"
  },
  inactiveButton: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white"
  },
  activeText: {
    color: "white"
  },
  inactiveText: {
    color: "#343A8D"
  },
  signinContainer: {
    flex: 5
  }
});
