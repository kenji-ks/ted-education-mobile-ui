import { Text, View, ScrollView } from 'react-native';
import { Pressable } from 'react-native';
import { router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import LearnCard from '@/components/learncard';
import CategoryTab from '@/components/categorytab';
import { useState } from 'react';

export default function LearnScreen() {
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
                <Text
                    className="flex-1 text-center text-[30px]"
                    style={{
                        fontFamily: 'Georgia',
                        fontWeight: '500',
                        color: '#1F2933',
                    }}
                >
                 Learn
                </Text>
                <Pressable
                    accessibilityRole="button"
                    accessibilityLabel="Search"
                    onPress={() => router.push('/learnsearch')}
                    className="mt-3 self-start"
                >
                    <MaterialCommunityIcons
                        name= "magnify"
                        size= {30}
                        color= '#1F2933'
                    />
                </Pressable>
                </View>
                <LearnCard
                    thumbnail={require('../../../assets/images/what-is-ted-image.jpg')}
                    name="What is TED?"
                    accessibilityLabel="What is TED?"
                    description="Helpful information about TED."
                    link="/(tabs)/learn"
                />
                <LearnCard
                    thumbnail={require('../../../assets/images/patient-resources-image.jpg')}
                    name="TED Patient Resources"
                    accessibilityLabel="TED Patient Resources"
                    description="Look at resources available for TED patients."
                    link="/(tabs)/learn"
                />
                <LearnCard
                    thumbnail={require('../../../assets/images/support-groups-image.jpg')}
                    name="TED Support Groups"
                    accessibilityLabel="TED Support Groups"
                    description="Find support groups for TED patients."
                    link="/(tabs)/learn"
                />
                <LearnCard
                    thumbnail={require('../../../assets/images/lifestyle-considerations-image.jpg')}
                    name="Treatment Options"
                    accessibilityLabel="Treatment Options"
                    description="Find treatment options and medication information for TED."
                    link="/(tabs)/learn"
                />
                <LearnCard
                    thumbnail={require('../../../assets/images/risk-factors-image.jpg')}
                    name="Specialties Involved in Treating TED"
                    accessibilityLabel="TED Specialists"
                    description="Find specialists involved in treating TED."
                    link="/(tabs)/learn"
                />
              </View>
            </ScrollView>
          </SafeAreaView>
        </View>
      </View>
    </View>
  );
}