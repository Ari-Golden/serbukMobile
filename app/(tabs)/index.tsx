import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  FlatList,
} from "react-native";
import { Image } from "expo-image";
import { useState, useEffect } from "react";
import React from "react";
import { FontAwesome } from "@expo/vector-icons"; // Import FontAwesome
const PlaceholderImage = require("../../assets/images/serbuk-logo.png");
import { useRouter } from "expo-router";

export default function Index() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter(); // Panggil useRouter di tingkat atas

  // Fetch data from the news API
  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch(
          "https://newsapi.org/v2/top-headlines?country=us&apiKey=843dae947c4b4a5691776a26d23433f9"
        );
        const data = await response.json();
        setNews(data.articles); // Menyimpan data artikel berita
      } catch (error) {
        console.error("Error fetching news:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  // Render item berita
  const renderItem = ({ item }) => (
    <View style={styles.card}>
      {item.urlToImage ? (
        <Image source={{ uri: item.urlToImage }} style={styles.newsImage} />
      ) : (
        <View style={styles.placeholderImage}>
          <Text style={styles.placeholderText}>No Image</Text>
        </View>
      )}
      <Text style={styles.headline}>{item.title}</Text>
    </View>
  );

  return (
    <>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image source={PlaceholderImage} style={styles.image} />
        </View>

        {/* Menu Section with FontAwesome Icons */}
        <View style={styles.menu}>
          <View style={styles.submenu}>
            <TouchableOpacity
              style={styles.submenuItem}
              onPress={() => router.push("/keanggotaan")} // Gunakan router di sini
            >
              <FontAwesome name="user-circle-o" size={24} color="#000" />
              <Text style={styles.menuText}>Keanggotaan</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.submenuItem} onPress={() => {}}>
              <FontAwesome name="balance-scale" size={24} color="#000" />
              <Text style={styles.menuText}>Advokasi</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.submenuItem} onPress={() => {}}>
              <FontAwesome name="money" size={24} color="#000" />
              <Text style={styles.menuText}>Keuangan</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* News Section */}
        <View style={styles.newsContainer}>
          <Text style={styles.welcomeText}>News Update</Text>
          {loading ? (
            <ActivityIndicator size="large" color="#007BFF" />
          ) : (
            <FlatList
              data={news}
              renderItem={renderItem}
              keyExtractor={(item, index) => index.toString()}
              contentContainerStyle={styles.newsList}
            />
          )}
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "blue-gray",
    alignItems: "center",
  },
  imageContainer: {
    maxWidth: "100%",
    alignItems: "center",
    width: "100%",
    height: 150,
    backgroundColor: "#F12323",
    padding: 10,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 18,
  },
  menu: {
    backgroundColor: "blue-gray",
    alignItems: "center",
    paddingBottom: 10,
  },
  submenu: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    marginVertical: 10,
  },
  submenuItem: {
    alignItems: "center",
    padding: 10,
    borderRadius: 10,
    backgroundColor: "#fff",
    marginHorizontal: 10,
  },
  menuText: {
    marginTop: 5,
    fontSize: 14,
    fontWeight: "bold",
    color: "#000",
  },
  newsContainer: {
    marginTop: 10,
    width: "100%",
    padding: 16,
    backgroundColor: "#f8f9fa",
    flex: 1,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 16,
  },
  newsList: {
    paddingBottom: 16,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 8,
    marginBottom: 16,
    overflow: "hidden",
    elevation: 3,
  },
  newsImage: {
    width: "100%",
    height: 200,
  },
  placeholderImage: {
    width: "100%",
    height: 200,
    backgroundColor: "#ddd",
    justifyContent: "center",
    alignItems: "center",
  },
  placeholderText: {
    color: "#666",
    fontSize: 16,
  },
  headline: {
    fontSize: 16,
    fontWeight: "bold",
    padding: 8,
    color: "#333",
  },
});
