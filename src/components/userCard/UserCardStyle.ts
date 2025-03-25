import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    card: {
      backgroundColor: '#f9f9f9',
      padding: 16,
      marginVertical: 8,
      borderRadius: 8,
      elevation: 3, 
      shadowColor: '#000', 
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
    },
    name: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 8,
    },
    label: {
      fontWeight: 'bold',
    },
    link: {
      color: '',
      textDecorationLine: 'underline',
      marginTop: 4,
    },
    address: {
      marginTop: 8,
    },
  });
  export default styles;