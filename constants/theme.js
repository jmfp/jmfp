import { StyleSheet } from "react-native";

export default StyleSheet.create({
    statcontainer:{
        padding: 10,
        width: "100%",
        height: "100%",
        alignItems: 'center',
        backgroundColor: '#26C165',
        justifyContent: 'space-between'
    },
    addTransactionButton:{
        padding: 10,
        height: 5,
        width: 5,
        backgroundColor:"#131A22"
    },
    bottomcontainer: {
        padding:10,
        position: 'absolute',
        bottom: 0,
        backgroundColor: "#131A22",
        height: "15%",
        width: "100%",
        borderWidth: 4,
        borderLeftColor: '#4CD080',
        borderRightColor: '#4CD080',
        borderTopColor: '#4CD080',
        borderBottomColor: '#131A22',
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        alignItems: 'center',
        justifyContent: 'center'
    },
    bottombuttonstyle:{
        backgroundColor: '#4CD080',
        marginTop: 10,
        width : 50,
        height: 50,
        borderWidth: 1,
        borderColor: '#4CD080',
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center'
    },
    textinput: {
        backgroundColor: "#FFF",
        marginTop: 10,
        borderRadius: 6,
        width: "90%",
        height: 30,
    },
    buttontext: {
        color: '#FFF'
    },
    scrollcontainer: {
        backgroundColor: '#FFF',
        width: '100%',
        height: '80%',
        borderRadius: 50,
        marginTop: 10,
    },
    uitext: {
        marginRight: 5,
        flex: 1,
        flexDirection: "row"
    },
    transaction: {
        alignSelf: 'center',
        backgroundColor: '#131A22',
        padding: 15,
        width: '95%',
        borderRadius: 10,
        borderWidth: 3,
        borderColor: '#4CD080',
        shadowColor: 'black',
        shadowOffset: {width: 4, height: 8},
        shadowOpacity: 0.4,
        shadowRadius: 3,
        flexDirection: 'row',
        alignItems:'center',
        justifyContent: 'space-between',
        marginTop: 20,
    },
    transactionmodal: {
        width: '60%',
        height: '30%',
        borderRadius: 50,
        borderWidth: 1,
        borderColor: '#4CD080',
        backgroundColor: '#131A22',
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '75%'
    },
    transactionscroll: {
        alignSelf: 'center',
        width: '90%',
        marginTop: '10%',
    }
})