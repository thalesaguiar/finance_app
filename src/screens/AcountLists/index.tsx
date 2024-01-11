import { Container, NavigationTab, Text } from "./styles";
import { GoBackButton } from "@components/GoBackButton";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import { ButtonIcon } from "@components/ButtonAdd";
import { Modal, ScrollView, TouchableOpacity, View } from "react-native";
import { useState, useCallback } from "react";
import { banksGetAll } from "@storage/bank/bankGetAll";
import { BankCard } from "@components/BankCard";
import { Feather } from "@expo/vector-icons";

export function BankList() {
  const navigation = useNavigation();
  const [banks, setBanks] = useState<string[]>([]);
  const [index, setIndex] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);

  function saveData(bankName: string) {
    console.log("bankName function", bankName);
    navigation.navigate("EditBanks", { bankName });
  }
  async function fetchBanks() {
    try {
      const data = await banksGetAll();
      console.log("data", data);
      setBanks(data);
    } catch (error) {
      console.log(error);
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
        {banks.map(
          (item, index) => (
            console.log(`index`, index),
            (
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
                  amount={""}
                  goTo={() => {
                    setIndex(index);
                    saveData(item);
                  }}
                  openModal={() => setModalVisible(true)}
                />
              </View>
            )
          )
        )}
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
            backgroundColor: "rgba(0, 0, 0, 0.5)",
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
            <TouchableOpacity onPress={() => setModalVisible(false)}>
              <Feather name="x" size={20} />
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </Container>
  );
}
