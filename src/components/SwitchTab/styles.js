import { StyleSheet } from "react-native";
import { normalize } from "../../utils/helper";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    barList: {
        height: normalize(34),
        width: "90%",
        backgroundColor: "rgba(243, 244, 246, 1)",
        flexDirection: "row",
        marginVertical: normalize(10),
        alignSelf: "center",
        borderColor: "#2E64A1",
        borderRadius: normalize(10),
        borderWidth: 1,
    },
    itemContainer: {
        alignItems: "center",
        justifyContent: "center",
        borderColor: "rgba(243, 244, 246, 1)",
        width: "50%",
    },
    tabText: {
        fontWeight: "600",
        fontSize: normalize(10),
        textAlign: 'center'
    },
});