 import { StyleSheet } from "react-native";
 const styles = StyleSheet.create({
    search: {
        height: 45,
        borderColor: 'lightgray',
        borderWidth: 1,
        borderRadius: 10,
        backgroundColor: 'white',
        paddingHorizontal: 12,
        fontSize: 16,
        color: 'grey',
        marginBottom: 20,
        shadowColor: 'grey',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 2,
      },
      
    upperSection:{
        flex: 1, padding: 20 
    },
    bTitle:{
        fontSize: 20,
        fontWeight: 'bold',
    },
    headerRow: {
        flexDirection: 'row',         
        alignItems: 'center',         
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        marginBottom: 20,
      },
      noUserLable:{
        textAlign: 'center'      }
  
  });
  export default styles;