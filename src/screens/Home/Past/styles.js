import { StyleSheet } from "react-native";
import { normalize } from "../../../utils/helper";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    mainn: {
        flex: 1,
        borderRadius: normalize(8),
        borderWidth: 0.5,
        borderColor: "rgba(10, 44, 63, 0.75)",
        marginVertical: normalize(10),
        marginBottom: normalize(10),
        padding: normalize(10),
    },
    imgg: { height: normalize(110), width: normalize(110), borderRadius: normalize(8) },
    diseasee: { flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: '5%' },
    datee: {
        left: -40,
        width: normalize(90),
        height: normalize(80),
        borderWidth: 0.5,
        borderColor: "rgba(10, 44, 63, 0.12)",
        alignItems: "center",
        justifyContent: "center",
        borderTopEndRadius: 8,
        borderBottomRightRadius: 8,
    },
    time:{ justifyContent: 'center', alignSelf: 'center' },
    dt: { color: "#2E64A1", fontWeight: "bold", fontSize: normalize(16) },
    mont: {
        color: "rgba(10, 44, 63, 0.75)",
        fontWeight: "bold",
        fontSize: normalize(13),
    },
    box: { flexDirection: "row", justifyContent: "space-around" },
    title: {
        marginVertical: normalize(4),
        textAlign: "center",
        fontSize: normalize(12),
        fontWeight: "500",
    },
    button: (hello) => ({
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: normalize(12),
        paddingHorizontal: normalize(32),
        borderRadius: normalize(8),
        elevation: 3,
        backgroundColor: !hello ? "#2E64A1" : "#FFFF",
    }),
    text: (hello) => ({
        fontSize: normalize(12),
        fontWeight: "bold",
        color: hello ? "#2E64A1" : "#FFFF",
    }),
    butt: {
        marginVertical: normalize(10),
        justifyContent: "space-between",
        flexDirection: "row",
    },
});
