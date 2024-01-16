import { Container, NavigationTab, Text } from "./styles";
import { GoBackButton } from "@components/GoBackButton";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import { ButtonIcon } from "@components/ButtonAdd";
import { Modal, ScrollView, TextInput, TouchableOpacity, View } from "react-native";
import { useState, useCallback } from "react";
import { banksGetAll } from "@storage/bank/bankGetAll";
import { BankCard } from "@components/BankCard";
import { Feather, FontAwesome, MaterialIcons } from "@expo/vector-icons";
import BankamountInput from "@components/BankAmountInput";
import { SubmitButton } from "@components/SubmitButton";
import { GraySubmitButton } from "@components/GraySubmitButton";
import { bankAmountSet } from "@storage/bank/bankAmountSet";

export function BankList() {
  const navigation = useNavigation();
  const [banks, setBanks] = useState<string[]>([]);
  const [index, setIndex] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);
  const [bankNameModal, setBankNameModal] = useState("");
  const [bankAmount, setBankAmount] = useState('0');

  function saveData(bankName: string) {
    navigation.navigate("EditBanks", { bankName });
  }
  async function fetchBanks() {
    try {
      const data = await banksGetAll();
      setBanks(data); 
    } catch (error) {
      console.log(error);
    }
  }

  const handleTextChange = (text: string) => {
    setBankAmount(text);
    console.log('Text', text);
  }

  async function amountSet(bankName:string, amount:string) {
    try {
      const amountData = await bankAmountSet(bankName, amount);
    }catch(error){
      throw error
    }
  }

  useFocusEffect(
    useCallback(() => {
      fetchBanks();
    }, [])
  );
  return (
    <Container>
      <NavigationTab>
        <GoBackButton
          type="SECONDARY"
          onPress={() => navigation.navigate("HomeScreen")}
        />
        <Text>Contas</Text>
        <ButtonIcon
          icon="add"
          type="SECONDARY"
          onPress={() => navigation.navigate("AddBanks")}
        />
      </NavigationTab>
      <ScrollView
        style={{
          flex: 1,
          marginBottom: 20,
        }}
      >
        {banks.map((item, index) => (
          <View
            key={item}
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              marginTop: 20,
            }}
          >
            <BankCard
              title={item}
              amount={bankAmount}
              goTo={() => {
                setIndex(index);
                saveData(item);
              }}
              openModal={() => {
                setModalVisible(true);
                setBankNameModal(item);
              }}
            />
          </View>
        ))}
      </ScrollView>
      <Modal
        animationType="fade"
        transparent
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View
          style={{
            width: "100%",
            height: "100%",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgba(0, 0, 0, 0.6)",
          }}
        >
          <View
            style={{
              width: 350,
              height: 350,
              backgroundColor: "#fff",
              padding: 20,
              borderRadius: 12,
            }}
          >
            <TouchableOpacity
              onPress={() => setModalVisible(false)}
              style={{ alignItems: "flex-end" }}
            >
              <Feather name="x" size={20} />
            </TouchableOpacity>
            <View style={{ justifyContent: "center", alignItems: "center" }}>
              <FontAwesome name="bank" size={48} style={{ marginBottom: 15 }} />
              <Text
                style={{
                  color: "black",
                  textAlign: "center",
                  fontWeight: "bold",
                  fontSize: 20,
                  marginBottom: 10,
                }}
              >
                {bankNameModal}
              </Text>
              <Text
                style={{
                  color: "#36393b",
                  textAlign: "center",
                }}
              >
                Defina seu novo saldo
              </Text>
              <TextInput
                style={{ width:'80%', padding: 10,  justifyContent:"center", color:'red', borderColor:'red',  borderWidth: 1}}
                onChangeText={handleTextChange}
              />
            </View>
             <GraySubmitButton onPress={() => amountSet(bankNameModal, bankAmount)} />
          </View>
        </View>
      </Modal>
    </Container>
  );
}
