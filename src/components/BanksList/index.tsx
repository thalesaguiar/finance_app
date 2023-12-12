import { FlatList, Modal, StyleSheet, Text } from "react-native";
import { Container, ContentWrapper, Title, AcountsModal } from "./styles";
import { NoColorButton } from "@components/NoColorButton";
import { useState } from "react";
import { ReactNativeModal } from "react-native-modal";

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
        <Text>Conteudo do modal</Text>
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
          renderItem={({ item }) => <Text style={styles.item}>{item.key}</Text>}
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
  );
}
