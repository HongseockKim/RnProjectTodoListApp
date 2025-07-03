import React from 'react';
import {Image, ImageStyle, StatusBar, StyleSheet, TextStyle, View, ViewStyle} from "react-native";
import {IMAGES} from "../../constants/images.ts";
import {useAppDispatch, useAppSelector} from "../store/hooks/hooks.ts";
import {useNavigation} from "@react-navigation/native";
import {setLogoShow} from "../store/slice/systemSlice.ts";
import Icon from 'react-native-vector-icons/MaterialIcons';

type HeaderStylesType = {
    logo: ImageStyle;
    container: ViewStyle;
    content: ViewStyle;
    leftSection: ViewStyle;
    centerSection: ViewStyle;
    rightSection: ViewStyle;
    title: TextStyle;
    backButton: ViewStyle; // ViewStyle로 변경
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
        overflow:'hidden'
    },
    logo:{
        width: 40,
        height: 60,
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
        flex: 0,
        alignItems: 'flex-end',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign:'center',
        color: '#343a40',
    },
    backButton: {
        height:50,
        alignItems: 'center',
        justifyContent: 'center',
    },
    menuButton: {
        padding: 8,
    },
});

const Header = () => {
    const logoShow = useAppSelector(state => state.system.logoShow);
    const navigation = useNavigation();
    const dispatch = useAppDispatch();

    const handleBackPress = () => {
        dispatch(setLogoShow(true));
        navigation.goBack();
    }

    return (
        <View style={HeaderStyles.container}>
            <View style={HeaderStyles.content}>
                <View style={HeaderStyles.leftSection}>
                    {
                        logoShow
                            ? <Image style={HeaderStyles.logo} source={IMAGES.LOGO}/>
                            : <Icon name="chevron-left" size={40} color="white" style={HeaderStyles.backButton} onPress={handleBackPress} />
                    }
                </View>
            </View>
        </View>
    );
};

export default Header;