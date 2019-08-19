import React from 'react';
import {
    ScrollView,
    StyleSheet,
    Text,
    View,
    KeyboardAvoidingView,
    FlatList,
    ActivityIndicator,
    ListItem,
    TouchableOpacity
} from 'react-native';
import * as firebase from 'firebase'
import Firebase from '../Firebase';
export default class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentUser: null
        };
    }
    componentDidMount() {
        const { currentUser } = Firebase.auth;
        this.setState({ currentUser })
    }

    render() {
        const { currentUser } = this.state
        return (
            <KeyboardAvoidingView behavior='padding' style={styles.container} enabled>
                <View style={styles.contentContainer} >
                    <ScrollView
                        style={styles.container}>
                        <Text style={{ textAlign:'center'}}>Dashboard</Text>
                        <Text>
                            Bienvenue {currentUser && currentUser.email} !
                        </Text>
                        <Text>
                            Photo {currentUser && currentUser.photoURL}
                        </Text>
                        <Text>
                            Token {currentUser && currentUser.uid} !
                        </Text>
                        <TouchableOpacity onPress={()=>this.props.navigation.navigate('ModifyProfile')} style={styles.buttonModifyProf}><Text>Modifier mon profil</Text></TouchableOpacity>
                    </ScrollView>
                </View>
            </KeyboardAvoidingView>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    contentContainer: {
        flex: 1,
        marginTop: 20,
        color: '#FFF',
        fontSize: 25,
        alignItems: 'center',
    },
    text: {

    },
    buttonModifyProf:{
        padding:15,
        backgroundColor:'#ecf0f1'
    }
});