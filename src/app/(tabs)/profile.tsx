import { Text, View, ScrollView } from 'react-native';
import { Pressable } from 'react-native';
import { router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function ProfileScreen() {
  return (
    <View className="flex-1 bg-white">
      <StatusBar style="dark" />
      <View className="flex-1 items-center">
        <View className="w-full max-w-[430px] flex-1 overflow-hidden bg-white">
          <SafeAreaView className="flex-1">
            <ScrollView>
              <View className="items-start px-7 pt-3">
                <View className="w-full flex-row items-center justify-between px-3">
                <Text
                    className=" flex-1 text-center text-[30px] ml-10"
                    style={{
                        fontFamily: 'Georgia',
                        fontWeight: '500',
                        color: '#17395D',
                    }}
                >
                 Profile
                </Text>
                <Pressable
                    accessibilityRole="button"
                    accessibilityLabel="Search"
                    onPress={() => router.push('/profile')}
                    className="self-start mr-2"
                >
                    <Ionicons
                        name= "settings-outline"
                        size= {30}
                        color= '#17395D'
                    />
                </Pressable>
                </View>
              </View>
            </ScrollView>
          </SafeAreaView>
        </View>
      </View>
    </View>
  );
}