import '../../global.css';
import {useState} from 'react';
import { Text, View, ScrollView, Pressable, TextInput } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import LearnCard from '../components/learncard';
import { router } from 'expo-router';

export default function LearnSearchScreen() {
  const [searchQuery, setSearchQuery] = useState('');
  const text = 'What is TED? Helpful Information about TED.';
  const text2 = 'TED Patient Resources Look at resources available for TED patients.';
  const text3 = 'TED Support Groups Find support groups for TED patients.';
  const text4 = 'Treatment Options Find treatment options and medication information for TED.';
  const text5 = 'Specialties involved in Treating TED Find specialists involved in treating TED.';
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
                  <View className="w-full flex-row items-center justify-between px-4">
                    <TextInput
                      placeholder="Search"
                      placeholderTextColor='#1F2933'
                      clearButtonMode="always"
                      autoCapitalize='none'
                      autoCorrect={false}
                      value={searchQuery}
                      onChangeText={setSearchQuery}
                      style={{
                        paddingHorizontal: 20,
                        paddingVertical: 10,
                        borderWidth: 1,
                        borderRadius: 10,
                        borderColor: 'black',
                        flex: 1
                      }}
                    />
                  </View>
                </View>
              </View>
              {searchQuery.length >= 3 &&
                text.toLowerCase().trim().includes(searchQuery.trim().toLowerCase()) && (
                  <LearnCard
                    thumbnail={require('../../assets/images/what-is-ted-image.jpg')}
                    name="What is TED?"
                    accessibilityLabel="What is TED?"
                    description="Helpful information about TED."
                    link="/whatisted"
                  />
                )}
              {searchQuery.length >= 3 &&
                text2.toLowerCase().trim().includes(searchQuery.trim().toLowerCase()) && (
                  <LearnCard
                    thumbnail={require('../../assets/images/patient-resources-image.jpg')}
                    name="TED Patient Resources"
                    accessibilityLabel="TED Patient Resources"
                    description="Look at resources available for TED patients."
                    link="/tedresources"
                  />
                )}
              {searchQuery.length >= 3 &&
                text3.toLowerCase().trim().includes(searchQuery.trim().toLowerCase()) && (
                  <LearnCard
                    thumbnail={require('../../assets/images/support-groups-image.jpg')}
                    name="TED Support Groups"
                    accessibilityLabel="TED Support Groups"
                    description="Find support groups for TED patients."
                    link="/tedsupport"
                  />
                )}
              {searchQuery.length >= 3 &&
                text4.toLowerCase().trim().includes(searchQuery.trim().toLowerCase()) && (
                  <LearnCard
                    thumbnail={require('../../assets/images/lifestyle-considerations-image.jpg')}
                    name="Treatment Options"
                    accessibilityLabel="Treatment Options"
                    description="Find treatment options and medication information for TED."
                    link="/treatment"
                  />
                )}
              {searchQuery.length >= 3 &&
                text5.toLowerCase().trim().includes(searchQuery.trim().toLowerCase()) && (
                  <LearnCard
                    thumbnail={require('../../assets/images/risk-factors-image.jpg')}
                    name="Specialties Involved in Treating TED"
                    accessibilityLabel="TED Specialists"
                    description="Find specialists involved in treating TED."
                    link="/tedspecialist"
                  />
                )}
            </ScrollView>
          </SafeAreaView>
        </View>
      </View>
    </View>
  );
}