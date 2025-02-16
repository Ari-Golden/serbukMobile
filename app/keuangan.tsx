import React, { useState } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { Image } from "expo-image";

const PlaceholderImage = require("../assets/images/serbuk-logo.png");

export default function FinancialReportScreen() {
  // Data Keuangan
  const [income, setIncome] = useState(50000000); // Jumlah pemasukan (contoh: Rp 50.000.000)
  const [expenses, setExpenses] = useState(20000000); // Jumlah pengeluaran (contoh: Rp 20.000.000)

  // Rincian Pengeluaran
  const expenseDetails = [
    { id: "1", description: "Pengadaan Alat Tulis", amount: 5000000 },
    { id: "2", description: "Kegiatan Pelatihan", amount: 8000000 },
    { id: "3", description: "Biaya Operasional Kantor", amount: 7000000 },
  ];

  return (
    <View style={styles.container}>
      {/* Header dengan Logo */}
      <View style={styles.header}>
        <Image source={PlaceholderImage} style={styles.logo} />
        <Text style={styles.title}>Laporan Keuangan</Text>
      </View>

      {/* Total Pemasukan dan Pengeluaran */}
      <View style={styles.summary}>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Pemasukan</Text>
          <Text style={styles.cardValue}>Rp {income.toLocaleString()}</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Pengeluaran</Text>
          <Text style={styles.cardValue}>Rp {expenses.toLocaleString()}</Text>
        </View>
      </View>

      {/* Rincian Pengeluaran */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Rincian Pengeluaran</Text>
        <FlatList
          data={expenseDetails}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.expenseItem}>
              <Text style={styles.expenseDescription}>{item.description}</Text>
              <Text style={styles.expenseAmount}>
                Rp {item.amount.toLocaleString()}
              </Text>
            </View>
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  summary: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  card: {
    backgroundColor: "#007BFF",
    padding: 20,
    borderRadius: 8,
    width: "48%",
    alignItems: "center",
  },
  cardTitle: {
    fontSize: 18,
    color: "#fff",
    marginBottom: 8,
  },
  cardValue: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
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
  expenseItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    backgroundColor: "#fff",
    borderRadius: 8,
    marginBottom: 10,
    elevation: 2,
  },
  expenseDescription: {
    fontSize: 16,
    color: "#25292e",
  },
  expenseAmount: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#007BFF",
  },
});
