import React from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import PrimaText from '../components/PrimaText'
import PrimaInput from '../components/PrimaInput'
import Header from '../components/Header'
import FullWidthButton from '../components/FullWidthButton'
import IconButton from '../components/IconButton'
import google from '../assets/icons/google.png'
import fb from '../assets/icons/facebook.png'
const styles = StyleSheet.create({
    container: {
        backgroundColor: "#FAFAFA"
    },
    inputCon: {
        padding: 16,
        backgroundColor: "#FFF",
        marginBottom: 200
    },
    social: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    or: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center'
    }
})
const SignUpPage = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Header navigation={navigation} />
            <ScrollView>
                <View style={styles.inputCon}>
                    <PrimaText
                        content='Create your Sellkon account'
                        fontSize={20}
                        fontWeight='medium'
                        color='#000'
                    />
                    <PrimaText
                        content='Full Name'
                        fontSize={16}
                        fontWeight='medium'
                        color='#959595'
                        marginTop={40}
                    />
                    <PrimaInput
                        type={"text"}
                        placeholder='Enter full name'
                        height={56}
                        width={"100%"}
                        marginTop={10}
                    />
                    <PrimaText
                        content='Mail or Phone'
                        fontSize={16}
                        fontWeight='medium'
                        color='#959595'
                        marginTop={24}
                    />
                    <PrimaInput
                        type={"text"}
                        placeholder='Enter mail or phone'
                        height={56}
                        width={"100%"}
                        marginTop={10}
                    />
                    <PrimaText
                        content='Password'
                        fontSize={16}
                        fontWeight='medium'
                        color='#959595'
                        marginTop={24}
                    />
                    <PrimaInput
                        type={"password"}
                        placeholder='password'
                        height={56}
                        width={"100%"}
                        marginTop={10}
                    />
                    <PrimaText
                        content='Confirm Password'
                        fontSize={16}
                        fontWeight='medium'
                        color='#959595'
                        marginTop={24}
                    />
                    <PrimaInput
                        type={"password"}
                        placeholder='confirm password'
                        height={56}
                        width={"100%"}
                        marginTop={10}
                    />
                    <FullWidthButton
                        content='Sign up'
                        marginTop={40}
                    />
                    <View style={styles.or}>
                        <PrimaText
                            fontSize={16}
                            content='OR'
                            marginTop={20}
                        />
                    </View>
                    <View style={styles.social}>
                        <IconButton
                            isText
                            content='Continue with google'
                            marginTop={20}
                            icon={google}
                            width={270}
                        />
                        <IconButton
                            width={88}
                            marginTop={20}
                            icon={fb}
                            imgHeight={26}
                            imgWidth={14}
                        />
                    </View>
                    <PrimaText
                        marginTop={32}
                        content='Already have an account? Sign in'
                        fontSize={20}
                        fontWeight='medium'
                    />
                </View>
            </ScrollView>
        </View>
    )
}

export default SignUpPage