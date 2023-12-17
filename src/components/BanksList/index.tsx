import { Button, FlatList, ScrollView, StyleSheet, Text } from "react-native";
import {
  Container,
  ContentWrapper,
  Title,
  ModalContainer,
  BackButtonContainer,
  TopTitle,
} from "./styles";
import { NoColorButton } from "@components/NoColorButton";
import { useState } from "react";
import { ReactNativeModal } from "react-native-modal";
import { GoBackButton } from "@components/GoBackButton";
import { SafeAreaView } from "react-native";
import { ButtonIcon } from "@components/ButtonAdd";
import { theme } from "../../theme";
import { BanksAddModal } from "@components/BanksAddModal";
import useModalStore from "../../store";

export function BankList() {
  const [modalAVisible, setModalAVisible] = useState(false);
  const { modalVisible, toggleModal } = useModalStore();

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 22,
    },
    item: {
      padding: 10,
      fontSize: 18,
      height: 44,
    },
  });

  function onPressHandle() {
    setModalAVisible(!modalAVisible);
  }

  function onPressHandleGoB() {
    toggleModal(modalVisible);
  }

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
            </ModalContainer>
          </ReactNativeModal>
          <ContentWrapper>
            <Title>Minhas Contas</Title>
            <FlatList
              scrollEnabled={false}
              data={[
                { key: "Nubank" },
                { key: "Banco do Brasil" },
                { key: "Caixa" },
                { key: "PicPay" },
                { key: "Cofre" },
                { key: "Inter" },
              ]}
              renderItem={({ item }) => (
                <Text style={styles.item}>{item.key}</Text>
              )}
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
