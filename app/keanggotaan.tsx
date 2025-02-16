import { StyleSheet, Text, View, TextInput, FlatList } from "react-native";
import React, { useState } from "react";
import { Image } from "expo-image";
const PlaceholderImage = require("../assets/images/serbuk-logo.png");

const keanggotaan = () => {
  // Daftar anggota untuk ditampilkan
  const [searchQuery, setSearchQuery] = useState("");
  const [members, setMembers] = useState([
    { id: "1", name: "SBA Fujiset Indonesia", region: "Jawa Barat" },
    { id: "2", name: "SBA Siamindo", region: "Jawa Barat" },
    { id: "3", name: "SBA Meiji Food Indonesia", region: "Jawa Barat" },
    { id: "4", name: "SBA PLTU Kalbar", region: "Kalimantan Barat" },
    // Tambahkan anggota lainnya sesuai kebutuhan
  ]);

  // Filter anggota berdasarkan query pencarian
  const filteredMembers = members.filter((member) =>
    member.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={PlaceholderImage} style={styles.image} />
      </View>

      {/* Input Pencarian */}
      <TextInput
        style={styles.searchInput}
        placeholder="Cari Anggota..."
        value={searchQuery}
        onChangeText={setSearchQuery}
      />

      {/* Daftar Anggota */}
      <FlatList
        data={filteredMembers}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.memberCard}>
            <Image source={PlaceholderImage} style={styles.memberImage} />
            <View style={styles.memberDetails}>
              <Text style={styles.memberName}>{item.name}</Text>
              <Text style={styles.memberRegion}>{item.region}</Text>
            </View>
          </View>
        )}
        contentContainerStyle={styles.memberList}
      />
    </View>
  );
};

export default keanggotaan;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f9fa",
    alignItems: "center",
    paddingTop: 20,
  },
  imageContainer: {
    maxWidth: "100%",
    alignItems: "center",
    width: "100%",
    height: 150,
    // backgroundColor: "#F12323",
    padding: 10,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 18,
  },
  searchInput: {
    height: 40,
    width: "80%",
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 8,
    paddingLeft: 10,
    marginBottom: 20,
    marginTop: 10,
    backgroundColor: "#fff",
  },
  memberList: {
    paddingBottom: 20,
    width: "100%",
    alignItems: "center",
  },
  memberCard: {
    backgroundColor: "#fff",
    flexDirection: "row",
    padding: 16,
    marginBottom: 10,
    borderRadius: 8,
    elevation: 2,
    width: "80%",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  memberImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 16,
  },
  memberDetails: {
    flex: 1,
  },
  memberName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  memberRegion: {
    fontSize: 14,
    color: "#666",
  },
});
