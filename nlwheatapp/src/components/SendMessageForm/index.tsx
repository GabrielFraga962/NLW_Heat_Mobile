import React, { useState } from 'react';
import { View, TextInput, Alert, Keyboard } from 'react-native';
import { styles } from './styles';
import { Button } from '../Button';
import { COLORS } from '../../theme';
import { api } from '../../services/api';

export function SendMessageForm(){
  const [message, setMessage] = useState('');
  const [sendingMessage, setSendingMessage] = useState(false);

  async function handleMessageSubmit() {
    const messageFormatter = message.trim();
    

    if(messageFormatter.length > 0) {
      setSendingMessage(true);
      await api.post("/messages", { message: messageFormatter });

      setMessage("");
      Keyboard.dismiss();
      setSendingMessage(false);
      Alert.alert("Mensagem enviada com sucesso!");
    }else{
      Alert.alert('Escreve a mensagem para enviar.');
    }
  }

  return (
    <View style={styles.container}>
        <TextInput
            keyboardAppearance="dark"
            placeholder="Qual a sua expectativa para o evento?"
            placeholderTextColor={COLORS.GRAY_PRIMARY}
            multiline
            maxLength={150}
            onChangeText={setMessage}
            value={message}
            style={styles.Input}
            editable={!sendingMessage}
        />
        <Button
            title="ENVIAR MESAGEM"
            backgroundColor={COLORS.PINK}
            color={COLORS.WHITE}
            isLoading={sendingMessage}
            onPress={handleMessageSubmit}
        />
    </View>
  );
}