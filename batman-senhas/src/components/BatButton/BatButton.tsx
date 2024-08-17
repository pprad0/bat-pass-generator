import React, { useState } from "react";
import { Text, Pressable } from "react-native";
import { styles } from "./Styles";
import * as Clipboard from 'expo-clipboard';
import { BatTextInput } from "../BatTextInput/BatTextInput";
import generatePass from "../../services/passwordService";

export function BatButton() {
  const [pass, setPass] = useState('')
  
  function handleGenerateButton() {
    setPass(generatePass())
  }

  async function handleCopyButton() {
    await Clipboard.setStringAsync(pass);
  }

  return (
    <>
    <BatTextInput pass={pass} /> 
      <Pressable
        style={styles.button}
        onPress={handleGenerateButton}
      >
        <Text style={styles.text}>📋 GERAR SENHA</Text>
      </Pressable>

      <Pressable style={styles.button} onPress={handleCopyButton}>
        <Text style={styles.text}>⚡ COPIAR</Text>
      </Pressable>
    </>
  );
}