import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import React from 'react'
import { useRouter } from 'expo-router'
import { Image } from 'expo-image'

const ExerciseList = ({ data }) => {
    const router = useRouter();
    return (
        <View>
            <FlatList
                data={data}
                numColumns={2}
                keyExtractor={item => item.name}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: 60, paddingTop: 20 }}
                columnWrapperStyle={{
                    justifyContent: 'space-between'
                }}
                renderItem={({ item, index }) => <ExerciseCard router={router} index={index} item={item} />}
            />
        </View>
    )
}

export default ExerciseList

const ExerciseCard = ({ item, router, index }) => {
    return (
        <View>
            <TouchableOpacity onPress={() => router.push({ pathname: '/exerciseDetails', params: item })} className="flex py-3 space-y-2">
                <View className="bg-white shadow rounded-[25px]">
                    <Image
                        source={{ uri: item.gifUrl }}
                        contentFit='cover'
                        style={{ width: wp(44), height: wp(52) }}
                        className="rounded-[25px]"
                    />
                </View>
                <Text style={{ fontSize: hp(1.7) }} className="text-white font-semibold ml-1 tracking-wide">
                    {
                        item?.name?.length > 20 ? item.name.slice(0, 20) + '...' : item.name
                    }
                </Text>
            </TouchableOpacity>
        </View>
    )
}