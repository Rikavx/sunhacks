import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Pressable,
  StyleSheet,
  Alert,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";
import { router } from "expo-router";
import { Colors } from "../constants/colors";

export default function RegisterScreen() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleRegister = async () => {
    // Check for empty fields
    if (!name || !email || !password || !confirmPassword) {
      Alert.alert("Missing Information", "Please fill out all fields.");
      return;
    }

    // Make sure passwords match
    if (password !== confirmPassword) {
      Alert.alert("Password Error", "Passwords do not match.");
      return;
    }

    try {
      const response = await fetch(
        "http://10.0.2.2:3000/api/auth/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            email,
            password,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        Alert.alert(
          "Registration Failed",
          data.message || "Unable to create account."
        );
        return;
      }

      console.log("User created:", data.user);

      // Go to role selection after account creation
      router.push("/select-role");
    } catch (error) {
      console.error("Registration error:", error);

      Alert.alert(
        "Connection Error",
        "Could not connect to the server."
      );
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.screen}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <ScrollView
        contentContainerStyle={styles.container}
        keyboardShouldPersistTaps="handled"
      >
        <Text style={styles.title}>Create Account</Text>

        <Text style={styles.subtitle}>
          Join Hemline
        </Text>

        {/* Name */}
        <Text style={styles.label}>Name</Text>

        <TextInput
          style={styles.input}
          placeholder="Enter your name"
          placeholderTextColor={Colors.textMuted}
          value={name}
          onChangeText={setName}
          autoCapitalize="words"
        />

        {/* Email */}
        <Text style={styles.label}>Email</Text>

        <TextInput
          style={styles.input}
          placeholder="Enter your email"
          placeholderTextColor={Colors.textMuted}
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="email-address"
        />

        {/* Password */}
        <Text style={styles.label}>Password</Text>

        <TextInput
          style={styles.input}
          placeholder="Create a password"
          placeholderTextColor={Colors.textMuted}
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />

        {/* Confirm Password */}
        <Text style={styles.label}>Confirm Password</Text>

        <TextInput
          style={styles.input}
          placeholder="Confirm your password"
          placeholderTextColor={Colors.textMuted}
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          secureTextEntry
        />

        {/* Create Account */}
        <Pressable
          style={({ pressed }) => [
            styles.button,
            pressed && styles.buttonPressed,
          ]}
          onPress={handleRegister}
        >
          <Text style={styles.buttonText}>
            Create Account
          </Text>
        </Pressable>

        {/* Login */}
        <View style={styles.loginContainer}>
          <Text style={styles.loginText}>
            Already have an account?{" "}
          </Text>

          <Pressable onPress={() => router.back()}>
            <Text style={styles.link}>
              Log In
            </Text>
          </Pressable>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
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
    fontSize: 34,
    fontWeight: "bold",
    textAlign: "center",
    color: Colors.primary,
    marginBottom: 8,
  },

  subtitle: {
    fontSize: 18,
    color: Colors.textMuted,
    textAlign: "center",
    marginBottom: 30,
  },

  label: {
    fontSize: 15,
    fontWeight: "600",
    color: Colors.text,
    marginBottom: 7,
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
    fontSize: 16,
    fontWeight: "600",
  },

  loginContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 22,
  },

  loginText: {
    fontSize: 15,
    color: Colors.text,
  },

  link: {
    fontSize: 15,
    fontWeight: "bold",
    color: Colors.primary,
  },
});