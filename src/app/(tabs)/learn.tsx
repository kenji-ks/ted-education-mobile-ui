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
  const [selectedCategory, setSelectedCategory] =
    useState<'all' | 'basics' | 'symptoms' | 'resources' | '' | null>(null);
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
                <ScrollView horizontal showsHorizontalScrollIndicator={false} className="w-full"
                    contentContainerStyle={{
                        alignItems: 'center',
                        gap: 10,
                    }}
                >
                    <Pressable
                        accessibilityRole="button"
                        accessibilityLabel="all"
                        className="mt-2 min-h-[50px] py-2 flex-row items-center justify-center rounded-2xl active:opacity-80"
                        onPress={() => {
                            if (selectedCategory === 'all') {
                                setSelectedCategory(null);
                            } else {
                                setSelectedCategory('all');
                            }
                        }}
                        style={{
                          backgroundColor: selectedCategory === 'all' ? '#618FA7' : '#F4EFE6',
                        }}
                    >
                        <View className="flex-row items-center justify-between px-4">
                            <Text
                                className="text-[20px] font-light"
                                style={{ 
                                    fontFamily: 'Georgia',
                                    fontWeight: '300',
                                    color: '#1F2933',
                                }}
                            >
                                All
                            </Text>       
                        </View>
                    </Pressable>
                    <Pressable
                        accessibilityRole="button"
                        accessibilityLabel="all"
                        className="mt-2 min-h-[50px] py-2 flex-row items-center justify-center rounded-2xl active:opacity-80"
                        onPress={() => {
                            if (selectedCategory === 'basics') {
                                setSelectedCategory(null);
                            } else {
                                setSelectedCategory('basics');
                            }
                        }}
                        style={{
                          backgroundColor: selectedCategory === 'basics' ? '#618FA7' : '#F4EFE6',
                        }}
                    >
                        <View className="flex-row items-center justify-between px-4">
                            <Text
                                className="text-[20px] font-light"
                                style={{ 
                                    fontFamily: 'Georgia',
                                    fontWeight: '300',
                                    color: '#1F2933',
                                }}
                            >
                                TED Basics
                            </Text>       
                        </View>
                    </Pressable>
                    <Pressable
                        accessibilityRole="button"
                        accessibilityLabel="all"
                        className="mt-2 min-h-[50px] py-2 flex-row items-center justify-center rounded-2xl active:opacity-80"
                        onPress={() => {
                            if (selectedCategory === 'symptoms') {
                                setSelectedCategory(null);
                            } else {
                                setSelectedCategory('symptoms');
                            }
                        }}
                        style={{
                          backgroundColor: selectedCategory === 'symptoms' ? '#618FA7' : '#F4EFE6',
                        }}
                    >
                        <View className="flex-row items-center justify-between px-4">
                            <Text
                                className="text-[20px] font-light"
                                style={{ 
                                    fontFamily: 'Georgia',
                                    fontWeight: '300',
                                    color: '#1F2933',
                                }}
                            >
                                Symptoms & Risks
                            </Text>       
                        </View>
                    </Pressable>
                    <Pressable
                        accessibilityRole="button"
                        accessibilityLabel="all"
                        className="mt-2 min-h-[50px] py-2 flex-row items-center justify-center rounded-2xl active:opacity-80"
                        onPress={() => {
                            if (selectedCategory === 'resources') {
                                setSelectedCategory(null);
                            } else {
                                setSelectedCategory('resources');
                            }
                        }}
                        style={{
                          backgroundColor: selectedCategory === 'resources' ? '#618FA7' : '#F4EFE6',
                        }}
                    >
                        <View className="flex-row items-center justify-between px-4">
                            <Text
                                className="text-[20px] font-light"
                                style={{ 
                                    fontFamily: 'Georgia',
                                    fontWeight: '300',
                                    color: '#1F2933',
                                }}
                            >
                                Patient Resources
                            </Text>       
                        </View>
                    </Pressable>
                </ScrollView>
                {(selectedCategory === 'all' || selectedCategory === 'basics') &&
                    <LearnCard
                        thumbnail={require('../../../assets/images/what-is-ted-image.jpg')}
                        name="What is TED?"
                        accessibilityLabel="What is TED?"
                        description="Helpful information about TED."
                        link="/(tabs)/learn"
                        category="TED Basics"
                    />

                }
                {(selectedCategory === 'all' || selectedCategory === 'symptoms') &&
                <LearnCard
                    thumbnail={require('../../../assets/images/common-symptoms-image.jpg')}
                    name="Common Symptoms of TED"
                    accessibilityLabel="Common Symptoms of TED"
                    description="Learn about the common symptoms of TED."
                    link="/(tabs)/learn"
                    category="Symptoms & Risks"
                />
                }
                {(selectedCategory === 'all' || selectedCategory === 'basics') &&
                    <LearnCard
                    thumbnail={require('../../../assets/images/active-vs-inactive-image.jpg')}
                    name="Active vs. Inactive TED"
                    accessibilityLabel="Active vs. Inactive TED"
                    description="Learn about the difference between active and inactive TED."
                    link="/(tabs)/learn"
                    category="TED Basics"
                    />
                }
                {(selectedCategory === 'all' || selectedCategory === 'symptoms') &&
                <LearnCard
                    thumbnail={require('../../../assets/images/risk-factors-image.jpg')}
                    name="TED Risk Factors"
                    accessibilityLabel="TED Risk Factors"
                    description="Learn about the risk factors associated with TED."
                    link="/(tabs)/learn"
                    category="Symptoms & Risks"
                />
                }
                {(selectedCategory === 'all' || selectedCategory === 'resources') &&
                <LearnCard
                    thumbnail={require('../../../assets/images/lifestyle-considerations-image.jpg')}
                    name="TED Lifestyle Considerations"
                    accessibilityLabel="TED Lifestyle Considerations"
                    description="Learn about the lifestyle factors that may influence TED."
                    link="/(tabs)/learn"
                    category="Patient Resources"
                />
                }
                {(selectedCategory === 'all' || selectedCategory === 'resources') &&
                <LearnCard
                    thumbnail={require('../../../assets/images/patient-resources-image.jpg')}
                    name="TED Patient Resources"
                    accessibilityLabel="TED Patient Resources"
                    description="Look at resources available for TED patients."
                    link="/(tabs)/learn"
                    category="Patient Resources"
                />
                }
                {(selectedCategory === 'all' || selectedCategory === 'resources') &&
                <LearnCard
                    thumbnail={require('../../../assets/images/support-groups-image.jpg')}
                    name="TED Support Groups"
                    accessibilityLabel="TED Support Groups"
                    description="Find support groups for TED patients."
                    link="/(tabs)/learn"
                    category="Patient Resources"
                />
                }
              </View>
            </ScrollView>
          </SafeAreaView>
        </View>
      </View>
    </View>
  );
}