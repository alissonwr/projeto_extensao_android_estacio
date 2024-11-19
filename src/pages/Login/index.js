import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert, ActivityIndicator, Image } from "react-native";
import styles from "./style";
import { useNavigation } from "@react-navigation/native";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false); 
  const navigation = useNavigation();

  const handleLogin = () => {
    
    if (username === "admin" && password === "1234") {
      setLoading(true); 
      setTimeout(() => {
        setLoading(false); 
        navigation.navigate("Task"); 
      }, 2000); 
    } else {
      Alert.alert("Erro", "Usuário ou senha incorretos."); 
    }
  };

  return (
    <View style={styles.container}>
      {loading ? ( 
        <View style={styles.loaderContainer}>
          <ActivityIndicator size="large" color="#f92e6a" />
          <Text style={styles.loadingText}>Carregando...</Text>
        </View>
      ) : (
        <>
          <Image 
            source={require('../../assets/logo.png')} 
            style={styles.logo} 
          />
          <Text style={styles.title}>Bem vindo ao Osmar Task</Text>
          <TextInput
            style={styles.input}
            placeholder="Usuário"
            placeholderTextColor="#888"
            value={username}
            onChangeText={setUsername} 
          />
          <TextInput
            style={styles.input}
            placeholder="Senha"
            placeholderTextColor="#888"
            secureTextEntry
            value={password}
            onChangeText={setPassword} 
          />
          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttonText}>Entrar</Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
};

export default Login;
