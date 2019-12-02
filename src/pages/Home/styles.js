
import {StyleSheet} from 'react-native'

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#b6ff9e',
      alignItems: 'center',
      justifyContent: 'center',
    },
    containerTitle:{
      flexDirection: 'row',
      marginBottom: 20
    },
    title:{
      color: 'white',
      fontWeight: 'bold',
      fontSize: 52,
      padding: 0,
      margin: 0,
    },
    titleIcon:{
      alignSelf: 'center',
      fontSize: 42,
      color: 'white',
      marginBottom: 0,
      paddingBottom: 0,
    },
    button: {
        backgroundColor: "white", 
        padding: 5,
        borderRadius: 5,
        elevation: 2
    },
    textButton: {
        color: '#b6ff9e',
        fontWeight: 'bold',
        fontSize: 25,
        
    }
  });