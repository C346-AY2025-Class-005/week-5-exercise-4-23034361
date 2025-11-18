// exercise 3

// import React from 'react';
// import { View, Text, Image, SectionList, StyleSheet, TouchableOpacity } from 'react-native';

// export default function App() {
//   const datasource = [
//     {
//       title: "🔥 Fire",
//       color: "#ffdddd",
//       icon: "https://cdn-icons-png.flaticon.com/512/833/833472.png",
//       data: [
//         { name: "Charmander", img: "https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_4-2x.png" },
//         { name: "Growlithe", img: "https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_58-2x.png" }
//       ]
//     },

//     {
//       title: "💧 Water",
//       color: "#ddeaff",
//       icon: "https://cdn-icons-png.flaticon.com/512/728/728093.png",
//       data: [
//         { name: "Squirtle", img: "https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_7-2x.png" },
//         { name: "Psyduck", img: "https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_54-2x.png" }
//       ]
//     },

//     {
//       title: "⚡ Electric",
//       color: "#fff8cc",
//       icon: "https://cdn-icons-png.flaticon.com/512/2698/2698730.png",
//       data: [
//         { name: "Pikachu", img: "https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_25-2x.png" },
//         { name: "Magnemite", img: "https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_81-2x.png" }
//       ]
//     }
//   ];

//   const renderItem = ({ item }) => (
//     <TouchableOpacity style={styles.card}>
//       <Text style={styles.cardText}>{item.name}</Text>
//       <Image source={{ uri: item.img }} style={styles.cardImage} resizeMode="contain" />
//     </TouchableOpacity>
//   );

//   return (
//     <View style={styles.container}>
//       <Text style={styles.addButton}>+ Add Pokémon</Text>

//       <SectionList
//         sections={datasource}
//         renderItem={renderItem}
//         keyExtractor={(item, index) => item.name + index}
//         renderSectionHeader={({ section }) => (
//           <View style={[styles.header, { backgroundColor: section.color }]}>
//             <Image source={{ uri: section.icon }} style={styles.headerIcon} />
//             <Text style={styles.headerText}>{section.title}</Text>
//           </View>
//         )}
//       />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     paddingTop: 40,
//     paddingHorizontal: 10,
//     backgroundColor: "#cfe9ff"
//   },

//   addButton: {
//     fontSize: 22,
//     fontWeight: "bold",
//     textAlign: "center",
//     padding: 12,
//     backgroundColor: "#ffffffcc",
//     borderRadius: 10,
//     marginBottom: 10
//   },

//   header: {
//     flexDirection: "row",
//     alignItems: "center",
//     padding: 12,
//     marginTop: 10,
//     borderRadius: 10
//   },

//   headerText: {
//     fontSize: 22,
//     fontWeight: "bold",
//     marginLeft: 10
//   },

//   headerIcon: {
//     width: 30,
//     height: 30
//   },

//   card: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     alignItems: "center",
//     backgroundColor: "#ffffffdd",
//     padding: 15,
//     marginVertical: 8,
//     borderRadius: 15
//   },

//   cardText: {
//     fontSize: 20,
//     fontWeight: "600"
//   },

//   cardImage: {
//     width: 130,  // bigger
//     height: 170  // bigger
//   }
// });


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
