import { Button, FlatList, ScrollView, StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native";
import { useState, useCallback, useEffect } from "react";

import {
  Container,
  ContentWrapper,
  Title,
  ModalContainer,
  BackButtonContainer,
  TopTitle,
} from "./styles";
import { theme } from "../../theme";

import { NoColorButton } from "@components/NoColorButton";
import { ReactNativeModal } from "react-native-modal";
import { GoBackButton } from "@components/GoBackButton";
import { ButtonIcon } from "@components/ButtonAdd";

import { BanksAddModal } from "@components/BanksAddModal";
import useModalStore from "../../store";
import { banksGetAll } from "@storage/bank/bankGetAll";
import { BankCard } from "@components/BankCard";

export function BankList() {
  const [modalAVisible, setModalAVisible] = useState(false);
  const { modalVisible, toggleModal } = useModalStore();
  const [banks, setBanks] = useState<string[]>([]);

  function onPressHandle() {
    setModalAVisible(!modalAVisible);
  }

  function onPressHandleGoB() {
    toggleModal(modalVisible);
  }

  async function fetchBanks() {
    try {
      const data = await banksGetAll();
      setBanks(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if (!modalVisible) {
      fetchBanks();
      console.log("useEffect Executou");
    }
  }, [modalVisible]);

  return (
    <>
      <SafeAreaView>
        <Container>
          <ReactNativeModal
            animationIn={"slideInRight"}
            animationOut={"slideOutRight"}
            isVisible={modalAVisible}
            onBackButtonPress={() => onPressHandle()}
            style={{
              backgroundColor: `${theme.COLORS.WHITE_100}`,
              margin: modalVisible ? 10 : 0,
              borderRadius: modalVisible ? 10 : 0,
              overflow: "hidden",
            }}
          >
            <ModalContainer>
              <BackButtonContainer>
                <GoBackButton onPress={() => onPressHandle()} />
                <TopTitle>Contas</TopTitle>
                <ButtonIcon
                  icon="add"
                  type="SECONDARY"
                  onPress={onPressHandleGoB}
                />
              </BackButtonContainer>
              <Text>Modal 1</Text>
              <FlatList
                data={banks}
                keyExtractor={(item) => item}
                style={{ width: "100%" }}
                renderItem={({ item }) => (
                  <BankCard title={item} onPress={() => console.log("abrir")} />
                )}
                contentContainerStyle={banks.length === 0 && { flex: 1 }}
                showsHorizontalScrollIndicator={false}
              />
            </ModalContainer>
          </ReactNativeModal>

          <ContentWrapper>
            <Title>Minhas Contas</Title>
            <FlatList
              data={banks}
              keyExtractor={(item) => item}
              renderItem={({ item }) => (
                <BankCard title={item} onPress={() => console.log("abrir")} />
              )}
              contentContainerStyle={banks.length === 0 && { flex: 1 }}
              showsHorizontalScrollIndicator={false}
              scrollEnabled={false}
              ListFooterComponent={
                <NoColorButton
                  onPress={() => setModalAVisible(!modalAVisible)}
                  title="Gerenciar Contas"
                >
                  <Text>Clica</Text>
                </NoColorButton>
              }
            />
          </ContentWrapper>
        </Container>
      </SafeAreaView>

      <ScrollView>
        <ReactNativeModal
          backdropOpacity={0}
          isVisible={modalVisible}
          animationInTiming={300}
          animationOutTiming={500}
          onBackButtonPress={() => onPressHandleGoB()}
          style={{
            margin: 0,
            marginTop: 20,
            marginBottom: 0,
            marginLeft: 0,
            marginRight: 0,
            borderTopRightRadius: 10,
            borderTopLeftRadius: 10,
            overflow: "hidden",
          }}
        >
          <BanksAddModal />
        </ReactNativeModal>
      </ScrollView>
    </>
  );
}
