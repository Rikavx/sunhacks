import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Pressable,
  StyleSheet,
} from "react-native";
import { router } from "expo-router";
import { Colors } from "../constants/colors";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    console.log("Email:", email);
    console.log("Password:", password);

    // We'll connect this to Express later.
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hemline</Text>

      <Text style={styles.subtitle}>Welcome back</Text>

      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        keyboardType="email-address"
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <Pressable style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Log In</Text>
      </Pressable>

      <View style={styles.registerContainer}>
        <Text>Don't have an account? </Text>

        <Pressable onPress={() => router.push("/register")}>
          <Text style={styles.link}>Register</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Colors.background,
  },

  container: {
    flexGrow: 1,
    justifyContent: "center",
    paddingHorizontal: 30,
    paddingVertical: 40,
    backgroundColor: Colors.background,
  },

  title: {
    fontSize: 42,
    fontWeight: "bold",
    textAlign: "center",
    color: Colors.primary,
    marginBottom: 10,
  },

  subtitle: {
    fontSize: 18,
    color: Colors.textMuted,
    textAlign: "center",
    marginBottom: 30,
  },

  input: {
    borderWidth: 1,
    borderColor: Colors.border,
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 14,
    fontSize: 16,
    color: Colors.text,
    backgroundColor: Colors.white,
    marginBottom: 18,
  },

  button: {
    backgroundColor: Colors.primary,
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 5,
  },

  buttonPressed: {
    backgroundColor: Colors.primaryDark,
  },

  buttonText: {
    color: Colors.white,
    textAlign: "center",
    fontSize: 16,
    fontWeight: "600",
  },

  registerContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
  },

  link: {
    fontSize: 15,
    fontWeight: "bold",
    color: Colors.primary,
  },
});