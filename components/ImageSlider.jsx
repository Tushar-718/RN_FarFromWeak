import { View, Text } from 'react-native'
import Carousel, { ParallaxImage } from 'react-native-snap-carousel';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import React from 'react'
import { sliderImage } from '../constants/data';


const ImageSlider = () => {
    const ItemCard = ({ item, index }, parallaxProp) => {
        return (
            <View style={{ width: wp(100) - 70, height: hp(25) }}>
                <ParallaxImage
                    source={item}
                    containerStyle={{ borderRadius: 30, flex: 1 }}
                    style={{ resizeMode: 'contain' }}
                    parallaxFactor={0.5}
                    {...parallaxProp} />
            </View>
        )
    }
    return (
        <Carousel
            data={sliderImage}
            loop={true}
            autoplay={false}
            renderItem={ItemCard}
            hasParallaxImages={true}
            sliderWidth={wp(100)}
            firstItem={0}
            autoplayInterval={2000}
            itemWidth={wp(100) - 70}
            slideStyle={{ display: 'flex', alignItems: 'center' }}
        />
    )
}

export default ImageSlider