import { Text, View, Image, TouchableOpacity } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { LinearGradient } from 'expo-linear-gradient';
import Animated, { FadeIn, FadeInDown, FadeInUp, FadeOut } from 'react-native-reanimated';
import { useRouter } from 'expo-router';


const Index = () => {
    const router=useRouter();
    return (
        <View className="flex-1 justify-end">
            <StatusBar style='light' />
            <Image className="h-full w-full absolute" source={require('../assets/images/img8.jpeg')} />
            <LinearGradient
                colors={['transparent', '#18181b']}
                style={{ width: wp(100), height: hp(70) }}
                start={{ x: 0.5, y: 0 }}
                end={{ x: 0.9, y: 0.8 }}
                className="flex justify-end pb-12 space-y-8"
            >
                <Animated.View entering={FadeInUp.delay(800).springify()} className="flex items-center">
                    <Text style={{ fontSize: hp(3.5) }} className="text-white font-bold tracking-normal">Your Daily <Text className="text-purple-500">Fitness App</Text></Text>
                </Animated.View>
                <Animated.View entering={FadeInUp.delay(500).springify()} >
                    <TouchableOpacity style={{ height: hp(6), width: wp(75) }}
                        className="bg-purple-700 flex justify-center items-center mx-auto rounded-md"
                        onPress={()=>router.push('home')}
                    >
                        <Text style={{ fontSize: hp(2) }} className="text-white tracking-normal">Get Started</Text>
                    </TouchableOpacity>
                </Animated.View>
            </LinearGradient>
        </View>
    )
}

export default Index
