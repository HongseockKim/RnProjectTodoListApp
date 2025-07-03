import React from 'react';
import {
    StyleSheet,
    TextStyle,
    View,
    ViewStyle,
    Text,
    TouchableOpacity,
    StatusBar,
    Image,
    ImageStyle
} from "react-native";
import {IMAGES} from "../../constants/images.ts";

type HeaderStylesType = {
    logo: ImageStyle;
    container: ViewStyle;
    content: ViewStyle;
    leftSection: ViewStyle;
    centerSection: ViewStyle;
    rightSection: ViewStyle;
    title: TextStyle;
    backButton: ViewStyle;
    menuButton: ViewStyle;
}

const HeaderStyles = StyleSheet.create<HeaderStylesType>({
    container: {
        width: '100%',
        height: 60,
        backgroundColor: '#ff7227',
        borderBottomWidth: 1,
        borderBottomColor: '#dee2e6',
        paddingTop: StatusBar.currentHeight || 0,
    },
    logo:{
        width:40,
        height:60,
    },
    content: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 16,
    },
    leftSection: {
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'center',
    },
    centerSection: {
        flex: 2,
        alignItems: 'center',
    },
    rightSection: {
        flex: 1,
        alignItems: 'flex-end',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#343a40',
    },
    backButton: {
        padding: 8,
    },
    menuButton: {
        padding: 8,
    },
});



const Header = () => {
    return (
        <View style={HeaderStyles.container}>
            <View style={HeaderStyles.content}>
                <View style={HeaderStyles.leftSection}>
                    <Image style={HeaderStyles.logo} source={IMAGES.LOGO}/>
                </View>
            </View>
        </View>
    );
};

export default Header;