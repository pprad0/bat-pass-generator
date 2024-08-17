import React from "react";
import { TextInput } from "react-native";

import { styles } from "./Styles";

interface BatTextInputProps{
  pass:string
}

export function BatTextInput(props:BatTextInputProps) {
  return <TextInput 
  placeholder="SENHA" 
  style={styles.inputer}
  value={props.pass}
  editable={false} 
  />;
}
