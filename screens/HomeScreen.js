import { useNavigation } from "@react-navigation/native";
import { useEffect, useLayoutEffect, useState } from "react";
import { View, Text, Image, TextInput, ScrollView, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import {
    UserIcon,
    ChevronDownIcon,
    MagnifyingGlassIcon,
    AdjustmentsVerticalIcon,

} from "react-native-heroicons/solid"
import Categories from "../components/Categories";
import FeaturedRow from "../components/FeaturedRow";
import { SanityClient, createClient } from "@sanity/client";
// import featured from "../deliveryappclone/schemas/featured";










const HomeScreen = () => {
    const navigation = useNavigation();
    const [featuredCategories, setFeaturedCategories] = useState([]);
    const client = createClient({
        projectId : "1t3r08rj",
        dataset: "production",
        useCdn: true, // set to `false` to bypass the edge cache
        apiVersion: '2023-05-03',
    })

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,

        })
    }, []);
    
// useEffect only used once when componenet is loaded
    useEffect (() => { 
        const fetchData = async () => {
            try {
                await client.fetch(
                    `*[_type == 'featured'] {
                        ...,
                        restaurants [] -> {
                          ...,
                          dishes [] -> 
                        }
                      }`
                ).then((data) => {
                    setFeaturedCategories(data)

                }).catch((err) => {
                    
                });
            } catch (error) {
                
            }
        
    }

    fetchData();
}, [])
    

    
    //safeAreaView makes sure that it give top and below margin
    //UseLayout effect allow us to apply function when screen is rendered
    return (
        <SafeAreaView className=" bg-white pt-5">
            {/* Header */}
                <View className="flex-row pb-3 items-center mx-4 space-x-2 ">
                    <Image source={{
                        uri: 'https://links.papareact.com/wru'
                    }}
                        className="h-7 w-7 bg-gray-300 p-4 rounded-full"
                    />
                    {/* When we did flex-1 our components got to each side thereby taking most of the area*/}
                    <View className="flex-1">
                        <Text className="font-bold text-gray-400 text-xs">
                            Deliver Now
                        </Text>
                        <Text className="font-bold text-xl ">
                            Current Location
                            <ChevronDownIcon size={20} color="#00CCBB" />
                        </Text>
                    </View>
                    <UserIcon size={35} color="#00CCBB" />

                </View>
                <View className = "flex-row items-center space-x-2 pb-2 mx-4 ">
                    <View className="flex-row flex-1 space-x-2 bg-gray-200 p-3 ">
                        <MagnifyingGlassIcon color="gray" />

                        <TextInput placeholder="Restaurant and Cuisines" keyboardType="default"/>
                    </View>
                    <AdjustmentsVerticalIcon color="#00CCBB" />
                </View>
{/* Body */}

<ScrollView className = "bg-gray-100"
contentContainerStyle = {{
    paddingBottom:100,
}}
>
    {/* categories */}
    <Categories />

    {/* Feature Rows */}

{featuredCategories.map((categories) => (
<FeaturedRow key = {categories._id} id = {categories._id} title = {categories.name} description = {categories.short_description} />

))}
{/* <FlatList 
data={featuredCategories}
renderItem={({featured} )
(
<FeaturedRow key = "123" id = "123" title = {featured.name} description = "axss"/>
 
)
}
/> */}



{/* <FeaturedRow 
id = "1234"
title = "Tasty Discounts"
description = "Everyone's been enjoying these juicy discounts"


/>
<FeaturedRow 
id = "12345"
title = "Offers Near you"
description = "Why not support your local restaurant tonight !"


/> */}
</ScrollView>
     
        </SafeAreaView>
    );
}

export default HomeScreen;