// exercise 4
import React from "react";
import {
    View,
    Text,
    Image,
    SectionList,
    StyleSheet,
    TouchableOpacity,
} from "react-native";

export default function App() {
    const datasource = [
        {
            title: "🍔 Foods",
            color: "#ffebcc",
            data: [
                {
                    name: "Burger",
                    img: "https://cdn.pixabay.com/photo/2014/10/23/18/05/burger-500054_1280.jpg",
                },
                {
                    name: "Pizza",
                    img: "https://cdn.pixabay.com/photo/2017/12/09/08/18/pizza-3007395_1280.jpg",
                },
            ],
        },

        {
            title: "🥤 Drinks",
            color: "#ddecff",
            data: [
                {
                    name: "Milk Tea",
                    img: require("./img/milk_tea.jpg"),
                },
                {
                    name: "Iced Coffee",
                    img: require("./img/icedcoffee.jpg"),
                },
                {
                    name: "Orange Juice",
                    img: require("./img/orange.jpg"),
                },
                {
                    name: "Lemon Tea",
                    img: require("./img/lemon_tea.jpg"),
                },
            ],
        },
    ];

    const renderItem = ({ item }) => (
        <TouchableOpacity style={styles.card}>
            <Text style={styles.cardText}>{item.name}</Text>

            <Image
                source={typeof item.img === "string" ? { uri: item.img } : item.img}
                style={styles.cardImage}
            />
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Food & Drinks Menu</Text>

            <SectionList
                sections={datasource}
                keyExtractor={(item, index) => item.name + index}
                renderItem={renderItem}
                renderSectionHeader={({ section }) => (
                    <View style={[styles.header, { backgroundColor: section.color }]}>
                        <Text style={styles.headerText}>{section.title}</Text>
                    </View>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 40,
        paddingHorizontal: 15,
        backgroundColor: "#f0f7ff",
    },

    title: {
        fontSize: 26,
        fontWeight: "bold",
        textAlign: "center",
        marginBottom: 15,
    },

    header: {
        padding: 12,
        marginTop: 15,
        borderRadius: 10,
    },

    headerText: {
        fontSize: 22,
        fontWeight: "bold",
    },

    card: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "white",
        padding: 15,
        marginVertical: 8,
        borderRadius: 12,
        elevation: 2,
    },

    cardText: {
        fontSize: 20,
        fontWeight: "600",
    },

    cardImage: {
        width: 110,
        height: 110,
        borderRadius: 10,
    },
});
