import '../../global.css';
import {useState} from 'react';
import { Text, View, ScrollView, Pressable, TextInput } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import LearnCard from '../components/learncard';
import { router } from 'expo-router';

export default function LearnScreen() {
  const [query, setQuery] = useState('');
  return (
    <View className="flex-1 bg-white">
      <StatusBar style="dark" />
      <View className="flex-1 items-center">
        <View className="w-full max-w-[430px] flex-1 overflow-hidden bg-white">
          <SafeAreaView className="flex-1">
            <ScrollView>
              <View className="items-start px-7 pt-3">
                <View className="w-full flex-row items-center justify-between px-4">
                <Pressable
                    accessibilityRole="button"
                    accessibilityLabel="Back"
                    onPress={() => router.back()}
                    className="mt-3 self-start"
                >
                    <Text
                        className="text-left flex-1 text-[30px] leading-[25px]"
                        style={{
                            fontFamily: 'Georgia',
                            fontWeight: '500',
                            color: '#1F2933',
                        }}
                    >
                     ˂
                    </Text>
                </Pressable>
                <SafeAreaView style={{flex:1, marginHorizontal:20}}>
                  <TextInput
                    placeholder="Search"
                    clearButtonMode="always"
                    value={query}
                    onChangeText={setQuery}
                    style={{
                      paddingHorizontal: 20,
                      paddingVertical: 10,
                      borderWidth: 1,
                      borderRadius: 10,
                      borderColor: 'black',
                    }}
                  />
                </SafeAreaView>
                </View>
              </View>
            </ScrollView>
          </SafeAreaView>
        </View>
      </View>
    </View>
  );
}