import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import React from 'react'
import { bodyParts } from '../constants/data';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';

const BodyParts = () => {
    const router = useRouter()
    const BodyPartCard = ({ item, router, index }) => {
        return (
            <View>
                <TouchableOpacity
                    onPress={() => router.push({ pathname: '/exercises', params: item })}
                    style={{ width: wp(44), height: wp(52) }}
                    className="flex justify-end p-4 mb-4"
                >
                    <Image
                        source={item.src}
                        resizeMode='cover'
                        style={{ width: wp(44), height: wp(52) }}
                        className="rounded-[30px] absolute"
                    />
                    <LinearGradient
                        colors={['transparent', 'rgba(0,0,0,0.9)']}
                        style={{ width: wp(44), height: hp(15) }}
                        start={{ x: 0.5, y: 0 }}
                        end={{ x: 0.5, y: 1 }}
                        className="absolute bottom-0 rounded-b-[35px]"
                    />
                    <Text
                        style={{ fontSize: hp(2.2) }}
                        className="text-white font-semibold text-center tracking-wide"
                    >{item.name}</Text>
                </TouchableOpacity>
            </View>
        )
    }
    return (
        <View className="mx-4">
            <Text style={{ fontSize: hp(3) }} className="font-semibold text-white">Exercises</Text>
            <FlatList
                data={bodyParts}
                numColumns={2}
                keyExtractor={item => item.name}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: 50, paddingTop: 20 }}
                columnWrapperStyle={{
                    justifyContent: 'space-between'
                }}
                renderItem={({ item, index }) => <BodyPartCard router={router} index={index} item={item} />}
            />
        </View>
    )
}

export default BodyParts