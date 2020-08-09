import { StyleSheet } from 'react-native';

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        backgroundColor: '#f0f0f7',
    },

    filterBlock:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingRight: 5,
        paddingBottom: 18,
    },

    upDown:{
        flexDirection: 'row',
    },

    filtersText: {
        paddingRight: 40,
        color: '#D4C2FF',
        fontFamily: 'Archivo_400Regular',
        fontSize: 16
    },

    line: {
        borderTopColor: '#9871F5',
        borderTopWidth: 1,
        paddingBottom: 18
    },

    teacherList: {
        marginTop: -40,
    },

    searchForm: {
        marginBottom: 8,
    },

    label: {
        color: '#d4c2ff',
        fontFamily: 'Poppins_400Regular'
    },

    inputGroup: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    inputBlock: {
        width: '48%'
    },

    filterButton:{
        backgroundColor: '#6842C2',
    },

    input: {
        height: 54,
        backgroundColor: '#FFF',
        borderRadius: 8,
        justifyContent: 'center',
        paddingHorizontal: 16,
        marginTop: 4,
        marginBottom: 16
    },
    
    submitButton:{
        backgroundColor: "#04d361",
        height: 56,
        borderRadius: 8,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },

    submitButtonText:{
        color: '#FFF',
        fontFamily: 'Archivo_700Bold',
        fontSize: 16
    }
})

export default styles;