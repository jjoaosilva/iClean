import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import {styles} from './styles'

export default class Answer extends React.Component {

    render(){
        return (
          <View>
            {
                this.props.answers.map(item => (
                    <TouchableOpacity style={styles.item} onPress={() => {this.props.verify(item.correct)}}>
                        <Text style={styles.textItem}>{item.answer}</Text>
                    </TouchableOpacity>
                ))
            }
          </View>
        );
    }
}


