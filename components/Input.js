import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Pressable,
  Image,
  Modal,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { Colors } from "../utils/colors";

export default function Input({
  label,
  type,
  placeholder,
  isPassword,
  value,
  onChangeText,
  style,
  options,
  ...props
}) {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isPickerModalVisible, setPickerModalVisible] = useState(false);

  function onEyePress() {
    setIsPasswordVisible(!isPasswordVisible);
  }

  const onSelect = (opt) => {
    onChangeText(opt);
    setPickerModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      {type === "picker" ? (
        <Pressable
          onPress={() => setPickerModalVisible(true)}
          style={styles.inputContainer}
        >
          {value ? (
            <Text style={[styles.input, style]}>{value?.title}</Text>
          ) : (
            <Text style={[styles.placeholder, style]}>{placeholder}</Text>
          )}
          <Image
            style={styles.arrow}
            source={require("../assets/arrowRight.png")}
          />
        </Pressable>
      ) : (
        <View style={styles.inputContainer}>
          <TextInput
            value={value}
            onChangeText={onChangeText}
            style={[styles.input, style]}
            placeholder={placeholder}
            secureTextEntry={isPassword && !isPasswordVisible}
            {...props}
          />
          {isPassword ? (
            <Pressable onPress={onEyePress}>
              <Image
                style={styles.eye}
                source={
                  isPasswordVisible
                    ? require("../assets/eye.png")
                    : require("../assets/eye_closed.png")
                }
              />
            </Pressable>
          ) : null}
        </View>
      )}
      <Modal transparent visible={isPickerModalVisible}>
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => setPickerModalVisible(false)}
          style={styles.modalWrapper}
        >
          <TouchableOpacity activeOpacity={1} style={styles.modalContent}>
            <Text style={styles.headerTitle}>Select options</Text>

            {options?.map((opt) => {
              if (!opt?.id) {
                return null;
              }

              const selected = value?.id === opt?.id;

              return (
                <Text
                  onPress={() => onSelect(opt)}
                  style={[
                    styles.optionText,
                    selected ? styles.selectedOption : {},
                  ]}
                  key={opt?.title}
                >
                  {opt?.title}
                </Text>
              );
            })}
          </TouchableOpacity>
        </TouchableOpacity>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  inputContainer: {
    borderWidth: 1,
    borderColor: Colors.grey,
    borderRadius: 14,
    flexDirection: "row",
    alignItems: "center",
  },
  label: {
    marginBottom: 8,
    color: Colors.blue,
    fontSize: 14,
    fontWeight: "500",
  },
  input: {
    paddingVertical: 20,
    paddingHorizontal: 16,
    flex: 1,
  },
  eye: {
    width: 24,
    height: 24,
    marginHorizontal: 16,
  },
  arrow: {
    width: 20,
    height: 20,
    marginHorizontal: 16,
    transform: [{ rotate: "90deg" }],
  },
  placeholder: {
    paddingVertical: 20,
    paddingHorizontal: 16,
    flex: 1,
    color: Colors.lightGrey,
  },
  modalWrapper: {
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  modalContent: {
    backgroundColor: Colors.white,
    borderRadius: 8,
    padding: 16,
    width: "80%",
  },
  headerTitle: {
    marginBottom: 16,
    color: Colors.black,
    fontSize: 16,
  },
  optionText: {
    color: Colors.black,
    paddingVertical: 4,
    fontSize: 15,
  },
  selectedOption: {
    color: Colors.blue,
    fontWeight: "bold",
  },
});
