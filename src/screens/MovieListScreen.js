//Importar los modulos necesarios
import React from "react";
import {StyleSheet, Text, Image, View, Dimensions, TouchableWithoutFeedback} from "react-native";
import { Container, Input, Item, Header, Icon, Button, Form, H1, Left, Right, Label } from "native-base";

//Es lo mismo
const { width, heigth } = Dimensions.get("window");
//const width1 = Dimensions.get("window").width;
//const heigth1 = Dimensions.get("window").heigth;

//Variable que contiene la pantalla
const MovieListScreen = () => {
    return <Container>
        <Header style={styles.header}>
            <Left>
                <Item>
                    <Icon name="search"/>
                    <Input style={styles.search} inlineLabel placeholder="Buscar..."/>
                </Item>
            </Left>
            <Right>
                <Button style={{backgroundColor: "red"}}>
                    <Text>Buscar</Text>
                </Button>
            </Right>
        </Header>
        <H1 style={{marginTop: 20}}>Ultimas Peliculas</H1>
        <Image source={require("../../assets/cap.png")} style={styles.movieImage}/>
        <Text>Titulo</Text>
        <Text>Valoracion</Text>
    </Container>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    movieImage: {
        width: width,
        height: "100%",
        marginTop: -240,
        marginBottom: -220,
        resizeMode: "center",
    },
    search: {
        fontSize: 20,
        color: "#264503",
    },
    header: {
        backgroundColor: "#ddddbb",
    }
});

export default MovieListScreen;
