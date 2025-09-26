import React, { useState, useCallback, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native';
import { GlobalStyles, Colors, FontSizes, Fonts } from '../../constants/Styles'; // Corregido

const ChatScreen = ({ navigation }) => {
  const [messages, setMessages] = useState([
    { id: '1', text: '¡Hola! ¿Cómo puedo ayudarte hoy?', sender: 'other', timestamp: '10:00 AM' },
    { id: '2', text: 'Hola, tengo una pregunta sobre mi pedido.', sender: 'me', timestamp: '10:01 AM' },
    { id: '3', text: 'Claro, dime tu número de pedido por favor.', sender: 'other', timestamp: '10:02 AM' },
  ]);
  const [inputText, setInputText] = useState('');

  const sendMessage = () => {
    if (inputText.trim().length > 0) {
      const newMessage = {
        id: String(messages.length + 1),
        text: inputText.trim(),
        sender: 'me',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages((prevMessages) => [...prevMessages, newMessage]);
      setInputText('');
    }
  };

  const renderMessage = ({ item }) => (
    <View style={[styles.messageBubble, item.sender === 'me' ? styles.myMessage : styles.otherMessage]}>
      <Text style={styles.messageText}>{item.text}</Text>
      <Text style={styles.timestamp}>{item.timestamp}</Text>
    </View>
  );

  return (
    <KeyboardAvoidingView
      style={GlobalStyles.screenContainer}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 60 : 0}
    >
      <View style={GlobalStyles.headerContainer}>
        <Text style={GlobalStyles.screenTitle}>Chat</Text>
      </View>

      <FlatList
        data={messages}
        renderItem={renderMessage}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.messagesContainer}
        inverted // To show latest messages at the bottom
      />

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Escribe un mensaje..."
          value={inputText}
          onChangeText={setInputText}
          multiline
        />
        <TouchableOpacity style={styles.sendButton} onPress={sendMessage}>
          <Text style={styles.sendButtonText}>Enviar</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  messagesContainer: {
    flexGrow: 1,
    paddingHorizontal: 10,
    paddingVertical: 5,
    justifyContent: 'flex-end',
  },
  messageBubble: {
    maxWidth: '80%',
    padding: 10,
    borderRadius: 15,
    marginBottom: 10,
  },
  myMessage: {
    alignSelf: 'flex-end',
    backgroundColor: Colors.primary,
    borderBottomRightRadius: 2,
  },
  otherMessage: {
    alignSelf: 'flex-start',
    backgroundColor: Colors.lightGray,
    borderBottomLeftRadius: 2,
  },
  messageText: {
    fontFamily: Fonts.regular,
    fontSize: FontSizes.medium,
    color: Colors.white,
  },
  timestamp: {
    fontFamily: Fonts.light,
    fontSize: FontSizes.small,
    color: Colors.white,
    alignSelf: 'flex-end',
    marginTop: 5,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: Colors.lightGray,
    backgroundColor: Colors.white,
  },
  textInput: {
    flex: 1,
    maxHeight: 100,
    minHeight: 40,
    borderColor: Colors.lightGray,
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingTop: 10,
    paddingBottom: 10,
    marginRight: 10,
    fontFamily: Fonts.regular,
    fontSize: FontSizes.medium,
  },
  sendButton: {
    backgroundColor: Colors.primary,
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sendButtonText: {
    color: Colors.white,
    fontFamily: Fonts.bold,
    fontSize: FontSizes.medium,
  },
});

export default ChatScreen;