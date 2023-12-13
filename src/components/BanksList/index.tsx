import { Button, FlatList, StyleSheet, Text } from "react-native";
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
export function BankList() {
  const [modalVisible, setModalVisible] = useState(false);

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

  return (
    <SafeAreaView>
      <Container>
        <ReactNativeModal
          animationIn={"slideInRight"}
          animationOut={"slideOutRight"}
          animationOutTiming={450}
          animationInTiming={450}
          isVisible={modalVisible}
          onBackButtonPress={() => setModalVisible(!modalVisible)}
          style={{ backgroundColor: "white", margin: 0 }}
        >
          <ModalContainer>
            <BackButtonContainer>
              <GoBackButton onPress={() => setModalVisible(!modalVisible)} />
              <TopTitle>Contas</TopTitle>
              <ButtonIcon icon="add" type="SECONDARY" />
            </BackButtonContainer>
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
                onPress={() => setModalVisible(!modalVisible)}
                title="Gerenciar Contas"
              >
                <Text>Clica</Text>
              </NoColorButton>
            }
          />
        </ContentWrapper>
      </Container>
    </SafeAreaView>
  );
}
