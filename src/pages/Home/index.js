import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import {styles} from './styles'

export default class Home extends React.Component {

    render(){
        return (
          <View style={styles.container}>
            <View style={styles.containerTitle}>
                <Text style={styles.title}>iClean</Text>
                <Entypo style={styles.titleIcon} name="leaf" />
            </View>
            <TouchableOpacity 
                style={styles.button}
                onPress={() => this.props.navigation.navigate('Quiz')}
            >
                <Text style={styles.textButton}>Jogar</Text>
            </TouchableOpacity>
          </View>
        );
    }
}


