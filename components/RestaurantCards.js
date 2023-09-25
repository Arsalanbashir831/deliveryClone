import { View, Text, Image, TouchableOpacity } from "react-native";
import {
StarIcon,
MapPinIcon,

} from "react-native-heroicons/solid"
import { urlFor } from "../sanity";
// id,
// imgUrl,
// title,
// rating,
// genre,
// address,
// short_description,
// dishes,
// long,
// lat,

const RestaurantCards = (props) => {
    return ( 
        <TouchableOpacity className = "bg-white mr-3 shadow">
            {/* <Image 
            source = {{
                uri : urlFor(imgUrl).url(),
            }}
            className = "h-36 w-64 rounded-sm"
            /> */}
            <View className = "px-3 pb-4">
                <Text className = "font-bold text-lg pt-2">{props.title}</Text>
                <View className = "flex-row items-center space-x-1">
                    <StarIcon color = "green" opacity={0.5} size={22} />
                    <Text><Text className = "text-green-500">4</Text> . genre</Text>
                </View>
                <View>
                    <MapPinIcon color="gray" opacity={0.4} size={22} />
                    <Text className = "text-xs text-gray-500">Nearby . address</Text>
                </View>
            </View>
        </TouchableOpacity>
     );
}
 
export default RestaurantCards;