import React from "react";
import { ScrollView, StyleSheet, Text, View, Image } from "react-native";
const PlaceholderImage = require("../../assets/images/serbuk-logo.png");
const StructureImage = require("../../assets/images/ellipse3.png");

export default function AboutScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Logo Organisasi */}
      <View style={styles.logoContainer}>
        <Image source={PlaceholderImage} style={styles.logo} />
      </View>

      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>Tentang Kami</Text>
      </View>

      {/* Sejarah Federasi */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Sejarah Federasi</Text>
        <Text style={styles.sectionContent}>
          Federasi Serikat Buruh Anggota didirikan pada tahun XXXX dengan tujuan 
          untuk melindungi, memperjuangkan, dan meningkatkan hak serta kesejahteraan para buruh di seluruh Indonesia. 
          Dalam perjalanannya, federasi ini telah menjadi pilar penting dalam gerakan buruh nasional, 
          memperjuangkan berbagai isu seperti kenaikan upah, perlindungan kerja, dan hak asasi buruh.
        </Text>
      </View>

      {/* Struktur Organisasi */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Struktur Organisasi</Text>
        <View style={styles.structureContainer}>
          <View style={styles.structureItem}>
            <Image source={StructureImage} style={styles.image} />
            <Text style={styles.structureName}>Ketua Umum</Text>
            <Text style={styles.structureRole}>Nama Ketua</Text>
          </View>
          <View style={styles.structureItem}>
            <Image source={StructureImage} style={styles.image} />
            <Text style={styles.structureName}>Sekretaris Jenderal</Text>
            <Text style={styles.structureRole}>Nama Sekjen</Text>
          </View>
          <View style={styles.structureItem}>
            <Image source={StructureImage} style={styles.image} />
            <Text style={styles.structureName}>Bendahara</Text>
            <Text style={styles.structureRole}>Nama Bendahara</Text>
          </View>
        </View>
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
  logoContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  logo: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  header: {
    alignItems: "center",
    marginBottom: 20,
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
  },
  structureContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
  },
  structureItem: {
    alignItems: "center",
    marginBottom: 16,
    width: "30%",
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 8,
  },
  structureName: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#25292e",
  },
  structureRole: {
    fontSize: 14,
    color: "#555",
  },
});
