import React, { cloneElement, useEffect, useState } from 'react'
import { ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native'
import PrimaText from '../components/PrimaText'
import PrimaInput from '../components/PrimaInput'
import Header from '../components/Header'
import FullWidthButton from '../components/FullWidthButton'
import IconButton from '../components/IconButton'
import google from '../assets/icons/google.png'
import fb from '../assets/icons/facebook.png'
import { FalseIsLoginComplete, GetSignUpInput, LoginSubmit, SocialLoginSubmit } from '../redux/_redux/CommonAction'
// import { googleAuthProvider } from '../assets/function/firebase'
import { useDispatch, useSelector } from 'react-redux'
import { getData } from '../assets/function/helperFunction'

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
const SignInPage = ({ navigation }) => {
    const dispatch = useDispatch()
    const [createPassword, setCreatePassword] = useState(false)
    const [isShow, setShow] = useState(true)
    const [isGoogle, setGoogle] = useState(false)
    const [isFacebook, setFacebook] = useState(false)
    const loginInput = useSelector((state) => state.homeInfo.signUpInput);
    const isLoginLoading = useSelector((state) => state.homeInfo.isLoginLoading);
    const isLoginComplete = useSelector((state) => state.homeInfo.isLoginComplete);
    const userInfo = useSelector((state) => state.homeInfo.userInfo);

    const handleChange = (name, value) => {
        dispatch(GetSignUpInput(name, value))
    }
    //xscs
    const handleSubmit = () => {
        dispatch(LoginSubmit(loginInput, createPassword))
    }
    // const googleLogin = async () => {
    //     setGoogle(true)
    //     auth
    //         .signInWithPopup(googleAuthProvider)
    //         .then(async (result) => {
    //             console.log('result', result)
    //             // const { user } = result;
    //             // const idTokenResult = await user.getIdTokenResult();
    //             dispatch(SocialLoginSubmit(result))
    //         })
    //         .catch((err) => {
    //             console.log(err);
    //         });
    // };
    useEffect(() => {
        if (isLoginComplete) {
            // const reDetails = await getData("redirect_details") || ""
            // const reUrl = await getData("redirect_url") || ""
            setGoogle(false)
            setFacebook(false)
            // reDetails.length > 0 ? reUrl === "shop" ? navigation.navigate("ShopPage") : navigate(`/product-details/${reDetails}`) : navigate('/')
            // localStorage.setItem("redirect_details", "")
            navigation.navigate("Home")
            dispatch(FalseIsLoginComplete())
        }
    }, [isLoginComplete])
    // console.log('isLoginComplete', isLoginComplete)
    return (
        <View style={styles.container}>
            <Header navigation={navigation} />
            <ScrollView>
                <View style={styles.inputCon}>
                    <PrimaText
                        content='Welcome back, we missed you!'
                        fontSize={20}
                        fontWeight='medium'
                        color='#000'
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
                        value={loginInput.mailOrPhone}
                        onChange={(e) => handleChange("mailOrPhone", e)}
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
                        isPassword
                        value={loginInput.password}
                        onChange={(e) => handleChange("password", e)}
                    />

                    <FullWidthButton
                        content='Sign In'
                        marginTop={40}
                        //jjj
                        onPress={() => !isGoogle && !isFacebook && !isLoginLoading ? handleSubmit() : {}}
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
                            width={"100%"}
                        />
                        {/* <IconButton
                            width={88}
                            marginTop={20}
                            icon={fb}
                            imgHeight={26}
                            imgWidth={14}
                        /> */}
                    </View>
                    <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
                        <PrimaText
                            marginTop={32}
                            content='Already have an account? Sign in'
                            fontSize={20}
                            fontWeight='medium'
                        />
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    )
}

export default SignInPage