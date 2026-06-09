// Importamos o React e o useState
// useState serve para criar estados que podem mudar a tela
import React, { useState } from 'react'
// Importamos os componentes do React Native
import { Button, Image, ImageSourcePropType, StyleSheet, Text, View } from 'react-native'

// Criamos um tipo chamado Props 
// Ele define quais informações o componente vai receber
type Props = {
  // Nome do Anime -> texto
  nome: string
  // Imagem do anime
  // ImageSourcePropType é o tipo correto para imagens no React Native
  imagem: ImageSourcePropType

  descricao: string
}

// Criamos o componente AnimeCard
// Ele recebe nome imagem através das props
export default function AnimeCard({ nome, imagem, descricao }: Props) {
  // Estado para mudar a cor do fundo do card
  // Começa com cinza claro
  const [corFundo, setCorFundo] = useState('#eeeeee')
  // Estado para mostrar a avaliação do anime
  // Começa com a mensagem inicial

  const [avaliacao, setAvaliacao] = useState('Avalie este anime!')
  // O return mostra o que aparece na tela (renderiza)

  return (
    // View principal do card
    // Estamos trablhando com dois estilos:
    // styles.card -> estilos fixos
    // backgroundColor -> muda conforme o estado
    <View style={[styles.card, { backgroundColor: corFundo }]}>
      {/** Exibe a imagem do anime
             * Como a imagem vem de require(..),
             * Usamos source={imagem}
             */}
      <Image source={imagem} style={styles.image} />

      {/** Mostra o nome do anime */}

      <Text style={styles.nome}>{nome}</Text>

      <Text style={styles.descricao}>{descricao}</Text>
      <Text></Text>


      {/** Mostra a avaliação atual */}
      <Text style={styles.avaliacao}>{avaliacao}</Text>

      {/** Botão RUIM
              * Quando clicar:
              * - muda a cor do fundo
              * - muda o texto da avaliação
              */}

      <Button
        title="Não gaste seu tempo"
        onPress={() => {

          // Fundo vermelho claro
          setCorFundo('#000000')

          // Texto da avaliação

          setAvaliacao('👎 Nunca veja essa porcaria')
        }}
      />

      <Button
        title="Ruim"
        onPress={() => {

          // Fundo vermelho claro
          setCorFundo('#ef9a9a')

          // Texto da avaliação
          setAvaliacao('👎 Ruim')
        }}
      />

      {/* Botão REGULAR */}
      <Button
        title="Regular"
        onPress={() => {

          // Fundo amarelo claro
          setCorFundo('#fff59d')

          // Texto da avaliação
          setAvaliacao('😐 Regular')
        }}
      />

      {/* Botão BOM */}
      <Button
        title="Bom"
        onPress={() => {

          // Fundo verde claro
          setCorFundo('#a5d6a7')

          // Texto da avaliação
          setAvaliacao('👍 Bom')
        }}
      />

      <Button
        title="Incrivel"
        onPress={() => {

          // Fundo verde claro
          setCorFundo('#139115')

          // Texto da avaliação
          setAvaliacao('👍 Muito bom')
        }}
      />

      <Button
        title="Selo de aprovação do Lucca ✔️"
        onPress={() => {

          // Fundo verde claro
          setCorFundo('#4d0d73')

          // Texto da avaliação
          setAvaliacao('Eu recomendo muito assistir 💜')
        }}
      />


    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    width: 260,
    padding: 16,
    borderRadius: 25,
    alignItems: 'center',
    marginBottom: 20
  },
  image: {
    width: 180,
    height: 180,
    borderRadius: 12
  },
  nome: {
    fontSize: 22,
    fontWeight: 'bold',
    marginVertical: 10,
    color: '#ffffff'
  },
  avaliacao: {
    fontSize: 15,
    color: '#ffffff'
  },
  descricao: {
    fontSize: 15,
    color: '#ffffff'
  }
})