import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Pressable} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  const HomeScreen = ({navigation}) => {
    return (
      <View style={styles.container}>
        <View style={styles.quadrado}>
          <Image
            source={require('./wallpaper.jpg')}
            style={{ width: '100%', height: '100%', position: 'absolute'}}
          />
          <View style={styles.quadradosup1}>
          <Text style={{ marginLeft:20, marginTop:15, color:'white', fontWeight: 'bold',fontSize: 25 }}>Inicio</Text>

          </View>
          <View style={styles.quadradosup2}>

          <Image
              source={require('./user.png')}
              style={{ width: 50, height: 50, marginTop:15}}
            />

          </View>
          <View style={styles.quadrado2}>
            <Image
              source={require('./user.png')}
              style={{ width: 200, height: 200, marginTop:-250}}
            />
            <Text style={{ marginTop:10 }}>Nome</Text>
            <View style={styles.botao1}>
              <Pressable onPress={() => navigation.navigate('Cong')} style={{color:'white', marginTop:5}}>Informações pessoais</Pressable>
            </View>

            <View style={styles.botao2}>
              <Pressable onPress={() => navigation.navigate('Talks')} style={{color:'white', marginTop:5}}>Ímoveis cadastrados</Pressable>
            </View>

            </View>
          </View>
        <StatusBar style="auto" />
        
      </View>
    );
  };
  const ChatScreen = ({navigation}) => {
    return (
      <View style={styles.container}>
        <View style={styles.quadradochat}>
          <View style={styles.quadradosup1}>
          <Text style={{ marginLeft:20, marginTop:15, color:'white', fontWeight: 'bold',fontSize: 25 }}>Inicio</Text>

          </View>
          <View style={styles.quadradosup2}>

          <Image
              source={require('./user.png')}
              style={{ width: 50, height: 50, marginTop:15}}
            />

          </View>

          <View style={styles.botaochat}>
            <Text style={{position: 'absolute', left: 5, top: 5, color: '#888' }}>Insira seu nome para iniciar a conversa!</Text>
            <Image
              source={require('./msg.png')}
              style={{ width: 30, height: 30, position: 'absolute', right: 5}}
            />
          </View>
        </View>
          
        <StatusBar style="auto" />
        
      </View>
    );
  };
  const TalksScreen = ({navigation}) => {
    return (
      <View style={styles.container}>
        <View style={styles.quadradochat}>
          <View style={styles.quadradosup1}>
          <Text style={{ marginLeft:20, marginTop:15, color:'white', fontWeight: 'bold',fontSize: 25 }}>Inicio</Text>

          </View>
          <View style={styles.quadradosup2}>
          <Image
              source={require('./user.png')}
              style={{ width: 50, height: 50, marginTop:15}}
            />
          </View>
          <View style={styles.quadradoinf1}>

          <Image
              source={require('./user.png')}
              style={{ width: 60, height: 60, marginLeft: 10}}
            />
          
          </View>
          <View style={styles.quadradoinf2}>
            <Text style={{ marginLeft:10, marginTop:1, color:'white', fontWeight: 'bold', fontSize:20 }}>Nome</Text>
            <Text style={{ marginLeft:10, marginTop:3, color:'#DDD'}}>Qual valor á vista da casa?</Text>
          </View>
        </View>
          
        <StatusBar style="auto" />
        
      </View>
    );
  };
  const InitialScreen = ({navigation}) => {
    return (
      <View style={styles.container}>
        <View style={styles.quadradobranco}>
          
          <View style={styles.quadradosup1}>
            <Text style={{ marginLeft:20, marginTop:15, color:'white', fontWeight: 'bold',fontSize: 25 }}>Inicio</Text>

          </View>
          <View style={styles.quadradosup2}>

            <Image
              source={require('./user.png')}
              style={{ width: 50, height: 50, marginTop:15}}
            />

          </View>
          <View style={styles.filtro}>
            <Pressable onPress={() => navigation.navigate('Home')} style={{color:'white', marginLeft:135}}>Filtro</Pressable>
          </View>
          <View style={styles.buscar}>
          <Text style={{ marginLeft:25, color:'#777', fontWeight: 'bold'}}>Buscar</Text>
          </View>
          <View style={styles.imagem1}>
            <Image
              source={require('./casa2.jpg')}
              style={{ width: '100%', height: '70%', marginTop:0}}
            />
          </View>
          <View style={styles.imagem2}>
          <Image
              source={require('./casa3.jpg')}
              style={{ width: '100%', height: '70%', marginTop:0}}
            />
          </View>
        </View>
        <StatusBar style="auto" />
        
      </View>
    );
  };
    const AdvertScreen = ({navigation}) => {
    return (
      <View style={styles.container}>
        <View style={styles.quadrado}>
        <View style={styles.quadradosup1}>
          <Pressable onPress={() => navigation.navigate('Initial')} style={{ marginLeft:20, marginTop:15, color:'white', fontWeight: 'bold',fontSize: 25 }}>Voltar</Pressable>

          </View>
          <View style={styles.quadradosup2}>
          <Image
              source={require('./user.png')}
              style={{ width: 50, height: 50, marginTop:15}}
            />
          </View>
          <Image
            source={require('./casa.jpg')}
            style={{ width: '90%', height: '75%', position: 'absolute', marginTop:110}}
          />  
          
        </View>
        <StatusBar style="auto" />
        
      </View>
    );
  };
  const SettingsScreen = ({navigation}) => {
    return (
      <View style={styles.container}>
        <View style={styles.quadradoverde}>
        <View style={styles.quadradosup1}>
          <Pressable onPress={() => navigation.navigate('Home')} style={{ marginLeft:20, marginTop:15, color:'white', fontWeight: 'bold',fontSize: 25 }}>Inicio</Pressable>

          </View>
          <View style={styles.quadradosup2}>
          <Image
              source={require('./user.png')}
              style={{ width: 50, height: 50, marginTop:15}}
            />
          </View>
          <Pressable onPress={() => navigation.navigate('Initial')} style={{ marginLeft:-20, marginTop:115, color:'white', fontWeight: 'bold', fontSize: 30 }}>Perfil</Pressable>
          <Pressable onPress={() => navigation.navigate('Talks')} style={{ marginLeft:-20, marginTop:50, color:'white', fontWeight: 'bold', fontSize: 30 }}>Mensagens</Pressable>
          <Pressable onPress={() => navigation.navigate('Advert')} style={{ marginLeft:-20, marginTop:50, color:'white', fontWeight: 'bold', fontSize: 30 }}>Meus Anúncios</Pressable>
          <Pressable onPress={() => navigation.navigate('Cong')} style={{ marginLeft:-20, marginTop:50, color:'white', fontWeight: 'bold', fontSize: 30 }}>Agradecimentos</Pressable>
          <Pressable onPress={() => navigation.navigate('Chat')} style={{ marginLeft:-20, marginTop:50, color:'white', fontWeight: 'bold', fontSize: 30 }}>Chat</Pressable>

        </View>
        <StatusBar style="auto" />
        
      </View>
    );
  };
  const CongScreen = ({navigation}) => {
    return (
      <View style={styles.container}>
        <View style={styles.quadradoverde}>
        <View style={styles.quadradosup1}>
          <Pressable onPress={() => navigation.navigate('Initial')} style={{ marginLeft:20, marginTop:15, color:'white', fontWeight: 'bold',fontSize: 25 }}>Inicio</Pressable>

          </View>
          <View style={styles.quadradosup2}>
          <Image
              source={require('./user.png')}
              style={{ width: 50, height: 50, marginTop:15}}
            />
          </View>
          <View style={styles.quadrado2}>
            <Text style={{ marginLeft:25, color:'white', fontSize:20}}>Feito: Luis Henrique Batista e Vinicius Andriani Mazera</Text>
            <Text style={{ marginLeft:25, marginTop: 20, color:'white', fontSize:13}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi condimentum ligula mauris,Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi condimentum ligula mauris, eu venenatis diam pharetra tristique. Vivamus nec mattis tortor. Integer semper augue vel accumsan imperdiet. Integer non sollicitudin ex. Sed ornare in magna id semper. Nam non congue magna. Morbi ultrices a nisl eu suscipit. Nunc odio orci, lobortis ac felis sed, varius dignissim ante. Aenean eget dolor leo. Morbi auctor, enim quis porttitor convallis, ex velit vehicula eros, at facilisis leo arcu tristique elit. Duis diam arcu, vulputate laoreet rutrum sed, dapibus eu magna. Morbi tincidunt sem enim, sit amet ultricies enim ultricies eu. Phasellus lacus magna, feugiat quis interdum vel, fermentum eu massa. Nullam vulputate erat nec pharetra auctor.</Text>
          </View>
          
          
        </View>
        <StatusBar style="auto" />
        
      </View>
    );
  };
  return (
    <>
    <NavigationContainer>
      <Stack.Navigator 
      initialRouteName="Settings" screenOptions={{ headershown:false}}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Chat" component={ChatScreen} />
        <Stack.Screen name="Talks" component={TalksScreen} />
        <Stack.Screen name="Initial" component={InitialScreen} />
        <Stack.Screen name="Advert" component={AdvertScreen} />
        <Stack.Screen name="Settings" component={SettingsScreen} />
        <Stack.Screen name="Cong" component={CongScreen} />
      </Stack.Navigator>
    </NavigationContainer>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  quadrado: {
    width: 350,
    height: 700,
    backgroundColor: '#000',
    alignItems: 'center',
  },
  quadradoverde: {
    width: 350,
    height: 700,
    backgroundColor: '#0ed',
    alignItems: 'center',

    
  },
  quadradobranco: {
    width: 350,
    height: 700,
    backgroundColor: '#fff',
    alignItems: 'center',

    
  },
  quadrado2: {
    width: 300,
    height: 500,
    backgroundColor: '#0ed',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: 100,
    left: 25,
  },
  quadradosup1: {
    width: '80%',
    height: 65,
    backgroundColor: '#077',
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    left: 0,
  },
  quadradosup2: {
    width: '20%',
    height: 65,
    backgroundColor: '#077',
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    left: '80%',
  },

  botao1: {
    width: '90%',
    height: 25,
    backgroundColor: '#077',
    alignItems: 'center',
    position: 'absolute',
    top: 320,
  },
  botao2: {
    width: '90%',
    height: 25,
    backgroundColor: '#077',
    alignItems: 'center',
    position: 'absolute',
    top: 400,
  },
  quadradochat: {
    width: 350,
    height: 700,
    backgroundColor: '#0ed',
    alignItems: 'center',
  },
  botaochat: {
    width: '90%',
    height: 30,
    backgroundColor: '#fff',
    alignItems: 'center',
    position: 'absolute',
    top: 630,
  },
  quadradoinf1: {
    width: '20%',
    height: 80,
    backgroundColor: '#0aa',
    justifyContent: 'center',
    position: 'absolute',
    top: 65,
    left: 0,
  },
  quadradoinf2: {
    width: '80%',
    height: 80,
    backgroundColor: '#0aa',
    justifyContent: 'center',
    position: 'absolute',
    top: 65,
    left: '20%',
  },
  filtro: {
    width: '90%',
    height: 35,
    backgroundColor: '#0ed',
    justifyContent: 'center',
    position: 'absolute',
    top: 100,
    left: '5%',
  },
  buscar: {
    width: '90%',
    height: 50,
    backgroundColor: '#DDD',
    justifyContent: 'center',
    position: 'absolute',
    top: 160,
    left: '5%',
  },
  imagem1: {
    width: '90%',
    height: 170,
    backgroundColor: '#DDD',
    position: 'absolute',
    top: 220,
    left: '5%',
  },
  imagem2: {
    width: '90%',
    height: 170,
    backgroundColor: '#DDD',
    position: 'absolute',
    top: 400,
    left: '5%',
  },
}
);