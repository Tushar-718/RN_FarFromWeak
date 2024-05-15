import { View, Text, TouchableOpacity, Image } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import React, { useEffect, useState } from 'react'
import { useLocalSearchParams, useRouter } from 'expo-router'
import { fetchExerciseByBodyPart } from '../api/exerciseDB';
import { demoExercises } from '../constants/dummyData';
import { StatusBar } from 'expo-status-bar';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ExerciseList from '../components/ExerciseList';
import { ScrollView } from 'react-native-virtualized-view';

const Exercises = () => {
  const [exercises, setExercises] = useState(demoExercises);
  const router = useRouter();
  const item = useLocalSearchParams();
  console.log('got item:', item);

  useEffect(() => {
    // if(item) getExercises(item.name);
  }, [item])

  const getExercises = async (bodypart) => {
    let data = await fetchExerciseByBodyPart(bodypart);
    // console.log('got data: ',data);
    setExercises(data);
  }
  return (
    <ScrollView className="bg-[#27272a]">
      <StatusBar style='light' />
      <Image
        source={item.image}
        style={{ width: wp(100), height: hp(45) }}
        className="rounded-b-[40px]"
      />
      <TouchableOpacity
        onPress={() => router.back()}
        className="bg-purple-500 mx-4 absolute rounded-full flex justify-center items-center pr-1.5"
        style={{ height: hp(5.5), width: hp(5.5), marginTop: hp(7) }}
      >
        <Ionicons name="caret-back-outline" size={hp(4)} color="#000" />
      </TouchableOpacity>

      <View className="mx-4 space-y-3 mt-4">
        <Text style={{ fontSize: hp(3) }} className="font-semibold text-purple-500">
          {item.name} exercises
        </Text>
        <View className="mb-10">
          <ExerciseList data={exercises}/>
        </View>
      </View>
    </ScrollView>
  )
}

export default Exercises