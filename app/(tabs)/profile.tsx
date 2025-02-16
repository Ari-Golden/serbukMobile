import React from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity, FlatList } from "react-native";

export default function ProfileScreen() {
  const user = {
    avatar: require("../../assets/images/ellipse3.png"), // Assuming the image is a PNG file
    fullName: "Ari Suseno",
    email: "johndoe@example.com",
    phone: "+1 234 567 890",
    address: "1234 Elm Street, Springfield, USA",
    sba: "SBA Fujiseat Indonesia",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ligula eu augue tristique vulputate.",
  };

  const handleLogout = () => {
    // Tambahkan logika logout di sini
    console.log("Logout clicked");
  };

  const handleEditProfile = () => {
    // Tambahkan logika untuk navigasi ke halaman edit profil
    console.log("Edit profile clicked");
  };

  // Data detail yang akan ditampilkan dalam FlatList
  const userDetails = [
    { label: "SBA", value: user.sba },
    { label: "Email", value: user.email },
    { label: "Phone", value: user.phone },
    { label: "Address", value: user.address },
  ];

  return (
    <View style={styles.container}>
      {/* Header dengan Foto Profil */}
      <View style={styles.header}>
        <Image source={user.avatar} style={styles.avatar} />
        <Text style={styles.name}>{user.fullName}</Text>
        <Text style={styles.bio}>{user.bio}</Text>
        {/* Tombol Edit Profil */}
        <TouchableOpacity style={styles.editButton} onPress={handleEditProfile}>
          <Text style={styles.editButtonText}>Edit Profile</Text>
        </TouchableOpacity>
      </View>

      {/* Rincian Profil */}
      <FlatList
        data={userDetails}
        keyExtractor={(item) => item.label}
        renderItem={({ item }) => (
          <View style={styles.detailItem}>
            <Text style={styles.detailLabel}>{item.label}:</Text>
            <Text style={styles.detailValue}>{item.value}</Text>
          </View>
        )}
        style={styles.detailsContainer}
      />

      {/* Tombol Logout */}
      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.logoutButtonText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
  },
  header: {
    alignItems: "center",
    backgroundColor: "#333",
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#444",
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 16,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 8,
  },
  bio: {
    fontSize: 14,
    color: "#aaa",
    textAlign: "center",
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  editButton: {
    backgroundColor: "#ffd33d",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  editButtonText: {
    color: "#25292e",
    fontWeight: "bold",
    fontSize: 16,
  },
  detailsContainer: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  detailItem: {
    marginBottom: 16,
  },
  detailLabel: {
    fontSize: 14,
    color: "#aaa",
    marginBottom: 4,
  },
  detailValue: {
    fontSize: 16,
    color: "#fff",
  },
  logoutButton: {
    backgroundColor: "#ff4d4d",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignSelf: "center",
    marginTop: 20,
  },
  logoutButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});
