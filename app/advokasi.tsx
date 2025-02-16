import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Linking,
} from "react-native";
import { Image } from "expo-image";

const PlaceholderImage = require("../assets/images/serbuk-logo.png");

export default function AdvocacyScreen() {
  const handleOpenGoogleForm = () => {
    Linking.openURL("https://forms.google.com/example-form"); // Ganti URL dengan tautan Google Form Anda
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Header dengan Logo */}
      <View style={styles.header}>
        <Image source={PlaceholderImage} style={styles.logo} />
        <Text style={styles.title}>Advokasi</Text>
      </View>

      {/* Alur Advokasi */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Alur Advokasi</Text>
        <Text style={styles.sectionContent}>
          1. Identifikasi Masalah: Anggota melaporkan permasalahan terkait hak
          kerja, perlindungan, atau isu lainnya kepada pengurus.
        </Text>
        <Text style={styles.sectionContent}>
          2. Pengumpulan Bukti: Anggota menyerahkan dokumen atau bukti pendukung
          untuk mendukung laporan.
        </Text>
        <Text style={styles.sectionContent}>
          3. Konsultasi dan Rencana Aksi: Pengurus akan mengadakan pertemuan
          dengan anggota untuk membahas rencana advokasi.
        </Text>
        <Text style={styles.sectionContent}>
          4. Penyelesaian Internal: Jika memungkinkan, upaya penyelesaian
          dilakukan di tingkat internal perusahaan.
        </Text>
        <Text style={styles.sectionContent}>
          5. Langkah Hukum: Jika penyelesaian internal gagal, langkah hukum akan
          diambil dengan melibatkan pihak-pihak terkait.
        </Text>
      </View>

      {/* Link ke Google Form */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Download Formulir</Text>
        <Text style={styles.sectionContent}>
          Untuk memulai proses advokasi, Anda dapat mengisi formulir melalui
          tautan berikut:
        </Text>
        <TouchableOpacity style={styles.button} onPress={handleOpenGoogleForm}>
          <Text style={styles.buttonText}>Isi Formulir Advokasi</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#f4f4f4",
    padding: 16,
  },
  header: {
    alignItems: "center",
    marginBottom: 20,
  },
  logo: {
    width: 80,
    height: 80,
    marginBottom: 10,
    borderRadius: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#25292e",
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#25292e",
  },
  sectionContent: {
    fontSize: 16,
    lineHeight: 24,
    color: "#555",
    textAlign: "justify",
    marginBottom: 10,
  },
  button: {
    backgroundColor: "#007BFF",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
