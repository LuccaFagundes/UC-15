import { SectionList, StyleSheet, Text, View } from 'react-native'

// Componente que exibe uma lista separada por seções
export default function ListaSecoes() {

    // Dados da SectionList
    // Cada objeto representa uma seção 
    const dados = [
        {
            title: 'Front-End',

            data: [
                'HTML',
                'CSS',
                'JavaScript',
                'React Native'
            ]
        },

        {
            title: 'Back-End',

            data: [
                'Node.js',
                'Express',
                'TypeScript',
                'MySQL'
            ]
        }
    ]

    return (

        // Lista divida em seções
        <SectionList

            // Dados que serão exibidos
            sections={dados}

            // Cria uma chave única para cada item
            keyExtractor={(item, index) => item + index}

            // Renderiza o cabeçalho de cada seção
            renderSectionHeader={({ section }) => (

                <Text style={styles.header}>

                    {/** Exibe o título da seção */}
                    {section.title}

                </Text>
            )}

            // Renderiza cada item da lista
            renderItem={({ item }) => (
                // Card individual de cada tecnologia
                <View style={styles.card}>

                    <Text style={styles.item}>
                        {/** Exibe o nome do item */}
                        {item}

                    </Text>

                </View>
            )}
        />
    )
}

const styles = StyleSheet.create({

    header: {
        fontSize: 25,

        fontWeight: 'bold',

        backgroundColor: '#D1FAE5',

        padding: 10,

        borderRadius: 8,

        marginTop: 15,

        color: '#065F46'
    },

    // Estilo do card de cada item
    card: {

        // Cor de fundo do card
        backgroundColor: '#FFFFFF',

        // Espaçamento interno
        padding: 15,

        // Espaçamento vertical entre os cards
        marginVertical: 6,

        // Bordas arredondadas
        borderRadius: 10
    },

    // Estilo do texto dos itens
    item: {
        // Tamanho da fonte
        fontSize: 18,

        // Cor do texto
        color: '#111827'
    }
})
