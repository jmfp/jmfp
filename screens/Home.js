import React, { useState, setState } from "react";
import { Modal, View, Text, Keyboard, TextInput, Button, TouchableOpacity, KeyboardAvoidingView, ScrollView  } from "react-native";
import { PlaidLink } from "react-native-plaid-link-sdk";
import styles from '../constants/theme.js'
import Transaction from '../components/Transaction'

export default function Home(){
    const [availableIncome, setAvailableIncome] = useState('0');
    const [currentExpenses, setCurrentExpenses] = useState('2');
    const [initialIncome, setInitialIncome] = useState('0');
    const [temporaryIncome, setTemporaryIncome] = useState('0');
    //setting up the list of transactions
    const [allTransactions, setAllTransaction] = useState([]);
    const [newTransaction, setNewTransaction] = useState();
    //setting up the modal
    const [modalVisible, setModalVisible] = useState(false);

    const handleAddIncome = () => {
        const availableInitial = new Number(initialIncome) + new Number(temporaryIncome)
        setInitialIncome(availableInitial.toString())
        if(initialIncome === ''){
            const leftoverIncome = (new Number(temporaryIncome) - new Number(currentExpenses))
            setAvailableIncome(leftoverIncome.toString())
        }else{
            const leftoverIncome = (new Number(initialIncome) - new Number(currentExpenses))
            setAvailableIncome(leftoverIncome.toString())
        }
        setAllTransaction([...allTransactions, newTransaction])
        setNewTransaction(null);
        setModalVisible(!modalVisible)
    }

    return(
        <View style={styles.statcontainer}>
        <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
            setModalVisible(!modalVisible);
        }}>
            <View style={styles.transactionmodal}>
                <TextInput style={styles.textinput} value={newTransaction} onChangeText={text => setTemporaryIncome(text)} placeholder={" Enter Transaction Amount"} keyboardType= 'numeric'/>
                <TextInput style={styles.textinput} placeholder={" (optional) Source ex: Won the Lottery!"}/>
                <TouchableOpacity style={styles.bottombuttonstyle} onPress={handleAddIncome}>

                </TouchableOpacity>
            </View>
        </Modal>
            <Text style={styles.uitext}>
               Monthly Income: {initialIncome} 
            </Text>
            <Text style={styles.uitext}>
               Expenses: {currentExpenses} 
            </Text>
            <Text style={styles.uitext}>
               Available Income: {availableIncome} 
            </Text>
            <View style={styles.scrollcontainer}>
                <ScrollView vertical={true} style={styles.transactionscroll}>{/*</ScrollView>pagingEnabled={true}>*/}
                    {
                        allTransactions.map((item, index) => {
                            return(
                                <TouchableOpacity key={index}>
                                    <Transaction text={item} />
                                </TouchableOpacity>
                            )
                        })    
                    }
                </ScrollView>
            </View>
            <KeyboardAvoidingView style={styles.bottomcontainer} behavior="padding">
                <TouchableOpacity style={styles.bottombuttonstyle} onPress={() => setModalVisible(!modalVisible)}>
                    <Text style={styles.buttontext} >
                        +
                    </Text>
                </TouchableOpacity>
            </KeyboardAvoidingView>
        </View>

        
    )
}
