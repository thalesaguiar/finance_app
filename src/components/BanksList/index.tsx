import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import { Container, ContentWrapper, Title } from "./styles";

export function BankList() {
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
          ]}
          renderItem={({ item }) => <Text style={styles.item}>{item.key}</Text>}
        />
      </ContentWrapper>
      <ContentWrapper>
        <Title>Outra lista</Title>
        <FlatList
          scrollEnabled={false}
          data={[
            { key: "Nubank" },
            { key: "Banco do Brasil" },
            { key: "Caixa" },
            { key: "PicPay" },
            { key: "Cofre" },
          ]}
          renderItem={({ item }) => <Text style={styles.item}>{item.key}</Text>}
        />
      </ContentWrapper>
    </Container>
  );
}
