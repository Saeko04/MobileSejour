import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  ScrollView,
  StatusBar,
} from 'react-native';

export default function App() {
  const [screen, setScreen] = useState('home');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const goToLogin = () => {
    setMessage('');
    setScreen('login');
  };

  const goToHome = () => {
    setMessage('');
    setScreen('home');
  };

  const handleLogin = () => {
    setMessage('Connexion en cours...');
    setTimeout(() => {
      setMessage('🔒 Connexion réussie (mode démo)');
    }, 800);
  };

  const menuItems = ['Accueil', 'Services', 'Équipe', 'Infos'];

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={styles.header.backgroundColor} />

      <View style={styles.header}>
        <Text style={styles.headerTitle}>HospiceTale</Text>
        <TouchableOpacity style={styles.headerButton} onPress={goToLogin}>
          <Text style={styles.headerButtonText}>Connexion</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.submenu}>
        {menuItems.map((item) => (
          <TouchableOpacity key={item} style={styles.submenuItem} onPress={() => setMessage(`${item} sélectionné`)}>
            <Text style={styles.submenuText}>{item}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        {screen === 'home' ? (
          <View style={styles.section}>
            <Text style={styles.pageTitle}>Bienvenue à HospiceTale</Text>
            <Text style={styles.bodyText}>
              Ici, chaque patient est accueilli avec bienveillance et professionnalisme.
              Utilisez le menu pour découvrir nos services, notre équipe et nos engagements.
            </Text>
          </View>
        ) : (
          <View style={styles.section}>
            <Text style={styles.pageTitle}>Connexion</Text>
            <TextInput
              style={styles.input}
              placeholder="E-mail"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
            />
            <TextInput
              style={styles.input}
              placeholder="Mot de passe"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
            />
            <TouchableOpacity style={styles.actionButton} onPress={handleLogin}>
              <Text style={styles.actionButtonText}>Se connecter</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.linkButton} onPress={goToHome}>
              <Text style={styles.linkButtonText}>← Retour à l'accueil</Text>
            </TouchableOpacity>
            {message ? <Text style={styles.message}>{message}</Text> : null}
          </View>
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f3f8',
  },
  header: {
    height: 70,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#2b5d91',
    paddingTop: 20,
  },
  headerTitle: {
    color: 'white',
    fontSize: 20,
    fontWeight: '700',
  },
  headerButton: {
    backgroundColor: 'rgba(255,255,255,0.2)',
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 999,
  },
  headerButtonText: {
    color: 'white',
    fontWeight: '600',
  },
  submenu: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingVertical: 12,
    backgroundColor: '#e8eef6',
    borderBottomWidth: 1,
    borderBottomColor: '#d1d9e4',
  },
  submenuItem: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.08,
    shadowRadius: 2,
    elevation: 2,
  },
  submenuText: {
    color: '#2b5d91',
    fontWeight: '600',
    fontSize: 13,
  },
  content: {
    padding: 20,
  },
  section: {
    backgroundColor: 'white',
    borderRadius: 16,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },
  pageTitle: {
    fontSize: 22,
    fontWeight: '700',
    marginBottom: 14,
    color: '#20334d',
  },
  bodyText: {
    fontSize: 16,
    lineHeight: 24,
    color: '#4a5a6a',
  },
  input: {
    backgroundColor: '#f7f9fc',
    borderRadius: 10,
    paddingHorizontal: 14,
    paddingVertical: 12,
    fontSize: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#d1d9e4',
  },
  actionButton: {
    backgroundColor: '#2b5d91',
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 6,
  },
  actionButtonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
  },
  linkButton: {
    marginTop: 14,
    alignItems: 'center',
  },
  linkButtonText: {
    color: '#2b5d91',
    fontWeight: '600',
  },
  message: {
    marginTop: 16,
    color: '#2b5d91',
    fontSize: 15,
    textAlign: 'center',
  },
});

