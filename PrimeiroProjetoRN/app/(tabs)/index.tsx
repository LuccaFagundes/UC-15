// import React, { useState } from 'react';
// import { View, ScrollView, StyleSheet, Alert } from 'react-native';

// // Importando todos os componentes criados
// import Header from '@/components/ui/Header';
// import Card from '@/components/ui/Card';
// import ButtonPrimary from '@/components/ui/ButtonPrimary';
// import InputField from '@/components/ui/InputField';
// import Footer from '@/components/ui/Footer';

// export default function Index() {
//   // useState cria um estado para armazenar o nome digitado
//   const [name, setName] = useState<string>('');

//   // Função chamada ao clicar no botão
//   const handlePress = () => {
//     Alert.alert('Message', `${name} has arrived`);
//   };

//   return (
//     <View style={styles.container}>
//       {/* Cabeçalho */}
//       <Header title="Welcome to the jungle" />

//       {/* Scroll permite rolar a tela */}
//       <ScrollView contentContainerStyle={styles.content}>
//         {/* Campo de input */}
//         <InputField
//           placeholder="Write out your pseudonym"
//           value={name}
//           onChangeText={setName}
//         />

//         {/* Botão */}
//         <ButtonPrimary
//           title="Send"
//           onPress={handlePress}
//         />

//         {/* Cards de exemplo */}
//         <Card
//           title="UC4"
//           content="Desenvolver código orientado a objetos."
//         />

//         <Card
//           title="UC5"
//           content="Inglês"
//         />

//         <Card
//           title="UC12"
//           content="Desenvolver e organizar interface de usuário e elementos visuais para aplicações web (front-end)"
//         />

//         <Card
//           title="UC13"
//           content="Programar aplicativos computacionais com integração de banco de dados para web. (back-end)"
//         />


//       </ScrollView>

//       {/* Rodapé */}
//       <Footer />
//     </View>
//   );
// }

// // Estilos da tela principal
// const styles = StyleSheet.create({
//   container: {
//     flex: 1, // ocupa toda a tela
//     backgroundColor: '#F3F4F6',
//   },
//   content: {
//     padding: 16,
//   },
// });

// App CardsAnime

import { ScrollView, SectionList, StyleSheet, Text } from 'react-native'

// Importamos o componente AnimeCard
import AnimeCard from '@/components/ui/AnimeCard'
import ListaSecoes from '@/components/ui/ListaSecoes'

// Cria a exporta a tela
export default function Index() {
  return (
    // ScrollView para a rolagem vertical da tela
    // contentContainerStyle estiliza o conteúdo interno
    <ScrollView contentContainerStyle={styles.container}>
      {/** título da tela */}

      <Text style={styles.title}>
        Classificador de Anime
      </Text>

      {/** Card de anime que criamos */}
      <AnimeCard

        // Nome que será mostrado
        nome="Naruto"
        // Caminho da imagem local
        imagem={require('../../assets/images/narutoUzumaki.png')}

        descricao="Garoto esquizofrenico vira presidente de vila de esquizofrenicos lançando simbolos de gangue."

      ></AnimeCard>

      <AnimeCard

        // Nome que será mostrado
        nome="Dungeon Meshi"
        // Caminho da imagem local
        imagem={require('../../assets/images/dungeonMeshi.jpg')}

        descricao='Mano louco com fetiche de comer leva seus amigos a loucura e alimenta-los corpos de monstros'

      ></AnimeCard>

      <AnimeCard

        // Nome que será mostrado
        nome="Gachiakuta"
        // Caminho da imagem local
        imagem={require('../../assets/images/guitaDragon.webp')}

        descricao='Garoto apegado ao lixão é condenado a ser jogado num poço e vira um ghost buster usando seu odor que infecta objetos'

      ></AnimeCard>

      <AnimeCard

        // Nome que será mostrado
        nome="Wotakoi - O Amor é Difícil para Otaku"
        // Caminho da imagem local
        imagem={require('../../assets/images/wotakoi.jpg')}
        
        descricao='Adultos otakus descobrem romance'

      ></AnimeCard>

      <AnimeCard

        // Nome que será mostrado
        nome="Ruri Dragon"
        // Caminho da imagem local
        imagem={require('../../assets/images/ruriDragon.webp')}

        descricao='Garota de raça mista descobre sobre sua descendencia e taca o caos em sua escola'

      ></AnimeCard>

      <AnimeCard

        // Nome que será mostrado
        nome="Rent a girlfriend"
        // Caminho da imagem local
        imagem={require('../../assets/images/trash.jpg')}

        descricao='Garoto idiota decide cavar mais fundo seu poço de perdedor e contrata acompanhantes'

      ></AnimeCard>

      <ListaSecoes/>

    </ScrollView>

    
      
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center',
    backgroundColor: '#F3F4F6',
    flexGrow: 1 // faz o conteúdo ocupar toda a tela
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#111827'
  }
})