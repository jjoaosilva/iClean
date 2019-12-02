import React from 'react';
import { Text, View, ActivityIndicator, Modal, TouchableOpacity} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {styles} from './styles'
import Answer from '../../components/Answer'

const questions = [
    {
        question: 'Quais gases agravam o efeito estufa?',
        answers: [
            { answer: 'Dióxido de Carbono e Metano.', correct: true },
            { answer: 'Nitrogênio e Metano.', correct: false },
            { answer: 'Dióxido de Carbono e Ozônio.', correct: false },
            { answer: 'Dióxido de Carbono e Gás de Amônia.', correct: false },
        ] 
    },
    {
        question: 'Quais os pricipais tipos de poluição causados pelos veículos automotores?',
        answers: [
            { answer: 'Visual e dos solos.', correct: false },
            { answer: 'Sonora e visual.', correct: false },
            { answer: 'Atmosférica e sonora.', correct: true },
            { answer: 'Visual e das águas.', correct: false },
        ] 
    },
    {
        question: 'Qual foi a primeira conferência mundial ambiental?',
        answers: [
            { answer: 'Eco-92.', correct: false },
            { answer: 'Conferência de Estocolmo.', correct: true },
            { answer: 'Protocolo de kyoto.', correct: false },
            { answer: 'Rio+10', correct: false },
        ] 
    },
    {
        question: 'Em qual conferência foi criada a Agenda 21?',
        answers: [
            { answer: 'Eco-92.', correct: true },
            { answer: 'Conferência de Estocolmo.', correct: false },
            { answer: 'Protocolo de kyoto.', correct: false },
            { answer: 'Rio+10', correct: false },
        ] 
    },
    {
        question: 'A queima de combustíveis  fósseis eleva as concentrações de SO2 e CO2 na atmosfera, que causam, respectivamente:',
        answers: [
            { answer: 'Afeito estufa e aumento da temperatura atmosférica.', correct: false },
            { answer: 'Chuva ácida e efeito estufa.', correct: true },
            { answer: 'Degradação da camada de ozônio e efeito estufa.', correct: false },
            { answer: 'Degradação da camada de ozônio e chuva ácida.', correct: false },
        ] 
    },
    {
        question: 'O acidente ocorrido de Chernobyl em 1986 foi um exemplo de que tipo de poluição?',
        answers: [
            { answer: 'Térmica.', correct: false },
            { answer: 'Sonora.', correct: false },
            { answer: 'Aquática.', correct: false },
            { answer: 'Radioativa.', correct: true },
        ] 
    },
    {
        question: 'Qual das alternativas NÃO apresenta uma forma de diminuir a poluição dos solos?',
        answers: [
            { answer: 'Reciclagem.', correct: false },
            { answer: 'Aumento do número de lixões.', correct: true },
            { answer: 'Reutilização de produtos.', correct: false },
            { answer: 'Saneamento básico.', correct: false },
        ] 
    },
    {
        question: 'O excesso de CO2 na atmosfera pode contribuir para:',
        answers: [
            { answer: 'Resfriamento global.', correct: false },
            { answer: 'Diminuição da fotossíntese.', correct: false },
            { answer: 'Aumento da camada de ozônio.', correct: false },
            { answer: 'Aquecimento global.', correct: true },
        ] 
    },
    {
        question: 'Qual dessas alternativas não indica um poluente atmosférico?',
        answers: [
            { answer: 'Gás nitrogênio.', correct: true },
            { answer: 'Óxido de nitrogênio.', correct: false },
            { answer: 'Dióxido de enxofre.', correct: false },
            { answer: 'Monóxio de carbono.', correct: false },
        ] 
    },
    {
        question: 'Qual o perfil do resíduo produzido no Brasil?',
        answers: [
            { answer: 'Comida, metais ferrosos, vidro, rejeitos e plástico.', correct: false },
            { answer: 'Papelão, metais ferrosos, vidro, rejeitos e plástico.', correct: true },
            { answer: 'Sapatos, vidro, rejeitos e plástico.', correct: false },
            { answer: 'Couro, vidro, rejeitos e plástico.', correct: false },
        ] 
    }
]

export default class Quiz extends React.Component {
    
    constructor(props){
        super(props);
        
        this.state = {
            loader: true,
            index: 0,
            points: 0,
            modalVisible: false
        };
    }

    componentDidMount(){
        this.initialize();
    }

    initialize = () => {
        this.setState({ loader: false })
    }

    verifyQuestion = (item) => {
        console.log("veriy")
        this.setState({ loader: true })

        setTimeout(() => {
            this.setState({
                loader: false,
                points: item ? this.state.points + 10 : this.state.points
            })

            if(this.state.index + 1 == questions.length){
                this.setState({ modalVisible: true })
            }else{
                this.setState({ index: this.state.index + 1 })
            }
        }, 500);
    }

    setModalVisible = (value) => {
        this.setState({ modalVisible: value })
    }

    render(){
        return (
          <View style={styles.container}>
            <MaterialCommunityIcons style={styles.titleIcon} name="comment-question-outline" />
            {
                this.state.loader ? 
                    <ActivityIndicator size="large" color="white" />
                    :
                    <View>
                        <Text style={styles.title} >{questions[this.state.index].question}</Text>
                        <Answer verify={this.verifyQuestion} answers={questions[this.state.index].answers}/>
                    </View>
            }

            <Modal
                animationType="slide"
                transparent={false}
                visible={this.state.modalVisible}
            >
                <View style={styles.container}>
                    <MaterialIcons style={styles.titleIcon} name="question-answer" />
                    <Text style={styles.titleModal}>Resultado: {this.state.points}/{questions.length*10}</Text>
                    
                    <TouchableOpacity 
                        style={styles.button}
                        onPress={() => this.props.navigation.navigate('Home')}
                    >
                        <Text style={styles.textButton}>Voltar</Text>
                    </TouchableOpacity>
                </View>
            </Modal>
          </View>
        );
    }
}


