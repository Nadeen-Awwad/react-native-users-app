import { StyleSheet, Text, View } from "react-native";
import MainSection from "../../components/MainSection/MainSection";

function  HomeScreen(){
return (
    <View style={styles.container}>
        <MainSection />
    </View>
);
};
const styles =StyleSheet.create({
    container:{
     flex:1,
     padding:20,
     paddingTop:50
    }
});

export default HomeScreen;