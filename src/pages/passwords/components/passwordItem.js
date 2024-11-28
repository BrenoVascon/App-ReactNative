import React from "react";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export function PasswordItem({ data, removePassword }) {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        {data.comment ? (
          <Text style={styles.comment} numberOfLines={1} ellipsizeMode="tail">
            {data.comment}
          </Text>
        ) : null}
        <Text style={styles.text} numberOfLines={1} ellipsizeMode="tail">
          {data.password}
        </Text>
      </View>
      <TouchableOpacity onPress={removePassword} style={styles.deleteButton}>
        <Ionicons name="close-circle" size={24} color="#FF0000" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#0e0e0e",
    padding: 14,
    width: "100%",
    marginBottom: 14,
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  textContainer: {
    flex: 1,
    marginRight: 10,
  },
  text: {
    color: "#fff",
    fontWeight: "bold",
  },
  comment: {
    color: "#ccc",
    fontSize: 12,
    marginBottom: 4,
  },
  deleteButton: {
    padding: 5,
  },
});
