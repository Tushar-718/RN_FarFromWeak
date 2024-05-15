import { View, Text } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ImageSlider from '../components/ImageSlider';
import BodyParts from '../components/BodyParts';

const home = () => {
    return (
        <SafeAreaView className="flex-1 bg-[#27272a] flex space-y-5" edges={['top']}>
            <StatusBar style='light' />
            <View className="flex-row justify-between items-center mx-5">
                <View className="space-y-1">
                    <Text style={{ fontSize: hp(4) }} className="font-bold tracking-wider text-white">WELCOME TO</Text>
                    <Text style={{ fontSize: hp(3.5) }} className="font-bold tracking-wider text-purple-500">FAR FROM WEAK</Text>
                </View>
                <View className="flex justify-center items-center space-y-3">
                    <FontAwesome name="user-circle" size={hp(3)} color="#fff" />
                    <View className="bg-neutral-200 rounded-full flex justify-center items-center"
                    >
                        <Ionicons name="notifications-circle" size={hp(3)} color="#000" />
                    </View>
                </View>
            </View>

            <View>
                <ImageSlider/>
            </View>

            <View className="flex-1">
                <BodyParts/>
            </View>
        </SafeAreaView>
    )
}

export default home