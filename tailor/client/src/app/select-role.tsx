import { useState } from "react";
import {
  View,
  Text,
  Pressable,
  StyleSheet,
  Alert,
} from "react-native";
import { router } from "expo-router";

export default function SelectRoleScreen() {
  const [role, setRole] = useState("");

  const handleContinue = () => {
    if (!role) {
      Alert.alert(
        "Select an option",
        "Please select how you plan to use Tailor."
      );
      return;
    }

    console.log("Selected role:", role);

    // Later we'll save this role to the user's account.

    router.replace("/home");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>How will you use Tailor?</Text>

      <Text style={styles.subtitle}>
        Choose the option that best describes you.
      </Text>

      <Pressable
        style={[
          styles.option,
          role === "client" && styles.selectedOption,
        ]}
        onPress={() => setRole("client")}
      >
        <Text
          style={[
            styles.optionTitle,
            role === "client" && styles.selectedText,
          ]}
        >
          I'm a Client
        </Text>

        <Text
          style={[
            styles.optionDescription,
            role === "client" && styles.selectedText,
          ]}
        >
          Find tailors and request tailoring services.
        </Text>
      </Pressable>

      <Pressable
        style={[
          styles.option,
          role === "tailor" && styles.selectedOption,
        ]}
        onPress={() => setRole("tailor")}
      >
        <Text
          style={[
            styles.optionTitle,
            role === "tailor" && styles.selectedText,
          ]}
        >
          I'm a Tailor
        </Text>

        <Text
          style={[
            styles.optionDescription,
            role === "tailor" && styles.selectedText,
          ]}
        >
          Offer tailoring services to clients.
        </Text>
      </Pressable>

      <Pressable
        style={[
          styles.option,
          role === "both" && styles.selectedOption,
        ]}
        onPress={() => setRole("both")}
      >
        <Text
          style={[
            styles.optionTitle,
            role === "both" && styles.selectedText,
          ]}
        >
          I'm Both
        </Text>

        <Text
          style={[
            styles.optionDescription,
            role === "both" && styles.selectedText,
          ]}
        >
          Find tailors and offer your own tailoring services.
        </Text>
      </Pressable>

      <Pressable style={styles.continueButton} onPress={handleContinue}>
        <Text style={styles.continueText}>Continue</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 30,
    backgroundColor: "#ffffff",
  },

  title: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },

  subtitle: {
    fontSize: 16,
    color: "#666666",
    textAlign: "center",
    marginBottom: 35,
  },

  option: {
    borderWidth: 1,
    borderColor: "#cccccc",
    borderRadius: 12,
    padding: 18,
    marginBottom: 15,
  },

  selectedOption: {
    backgroundColor: "#222222",
    borderColor: "#222222",
  },

  optionTitle: {
    fontSize: 17,
    fontWeight: "600",
    marginBottom: 5,
  },

  optionDescription: {
    fontSize: 14,
    color: "#666666",
  },

  selectedText: {
    color: "#ffffff",
  },

  continueButton: {
    backgroundColor: "#222222",
    borderRadius: 10,
    paddingVertical: 15,
    alignItems: "center",
    marginTop: 15,
  },

  continueText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "600",
  },
});