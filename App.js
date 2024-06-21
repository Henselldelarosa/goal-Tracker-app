import { StatusBar } from 'expo-status-bar';
import { StyleSheet, TextInput, Text, View, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.appContainer}>

      <View style={styles.inputContainer}>
        <TextInput
          placeholder='Your Course goal!'
          style={styles.textInput}
        />
        <Button title='Add Goal'/>
      </View>

      <View style={styles.goalsContainer}>
        <Text>List of goals...</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({

  appContainer: {
    flex:1,
    paddingTop: 60,
    paddingHorizontal:16
  },

  inputContainer: {
    flex:1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: 'center',
    marginBottom:24,
    borderBottomWidth:1,
    borderBottomColor:'#cccccc'
  },

  textInput: {
    borderWidth: 1,
    borderBlockColor: "#cccccc",
    width: "70%",
    marginRight: 8,
    padding: 8
  },

  goalsContainer:{
    flex: 5
  }
});
