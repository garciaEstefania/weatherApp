import { StyleSheet, Dimensions } from 'react-native';

const WIDTH = Dimensions.get("window").width;
const HEIGHT = Dimensions.get("window").height;

const styles = StyleSheet.create({
    mainContainerHome:{
        flex: 1,
        justifyContent: "flex-start",
        //alignItems: "flex-start",
        paddingHorizontal: 20,
        paddingVertical: 20,
        backgroundColor: "#f7f7f7",
    },
    containerDefaultCity:{
        flex: 0.3,
        justifyContent: "center",
        alignItems: "center",
    },
    defaultCityTitle:{
        fontSize: HEIGHT * 0.05,
    },
    defaultCityText:{
        fontSize: HEIGHT * 0.025,
    },
    inputContainer:{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: 20,
        //backgroundColor: "#fff",
    },
    inputEnterCity:{
        flex: 0.9,
        borderColor: "#030303",
        borderWidth: 0.5,
        borderRadius: 5,
        paddingLeft: 20,
    },
    viewBtnAdd:{
        flex: 0.1,
    },
    btnAdd:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    btnImage:{
        width: WIDTH*0.09,
        height: WIDTH*0.09,
    },
    viewBtnTemps:{
        flexDirection: "row",
        justifyContent: "space-between",
        marginVertical: 20,
    },
    textConvert:{
        fontSize: HEIGHT * 0.02,
    },
    btnTempActive:{
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 40,
        paddingVertical: 5,
        borderRadius: 10,
        backgroundColor: "#1E95BE",
    },
    btnTemp:{
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 40,
        paddingVertical: 5,
        borderRadius: 10,
        backgroundColor: "#A6D0DF",
    },
    textTemp:{
        color: "#fff",
    },
    cityItem:{
        flex: 0.6,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "flex-start",
        paddingHorizontal: 20,
        paddingVertical: 20,
        marginVertical: 15,
        borderRadius: 10,
        backgroundColor: "#fff",
    },
    intemInfo:{
        flex: 0.7,
    },
    itemOptions:{
        flex: 0.3,
        height: "100%",
        flexDirection: "row",
        //justifyContent: "center",
        //alignItems: "center",
    },
    cityTitle:{
        fontSize: HEIGHT * 0.020,
    },
    tempTitle:{
        fontSize: HEIGHT * 0.04,
    },
})

export default styles;