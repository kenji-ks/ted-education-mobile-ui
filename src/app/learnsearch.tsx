import '../../global.css';
import {useState} from 'react';
import { View, ScrollView, Pressable, TextInput } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import LearnCard from '@/features/learn/learncard';
import { router } from 'expo-router';
import AppIcon from '@/components/ui/AppIcon';

export default function LearnSearchScreen() {
const [searchQuery, setSearchQuery] = useState('');
const [submittedQuery, setSubmittedQuery] = useState('');
const text = 'What is TED? Helpful Information about TED.';
const text2 = 'TED Patient Resources Look at resources for TED patients.';
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
          <View className="items-center px-7 pt-3">
            <View className="w-full flex-row items-center">
              <Pressable
                accessibilityRole="button"
                accessibilityLabel="Back"
                onPress={() => router.back()}
                className="h-10 w-10 items-center justify-center"
              >
              <AppIcon
                  iconname='back'
                  color='#1F2933'
                  size={25}
                  strokeWidth={2}
              />
              </Pressable>
                <TextInput
                  placeholder="Press Enter To Search"
                  placeholderTextColor='#1F2933'
                  clearButtonMode="always"
                  autoCapitalize='none'
                  autoCorrect={false}
                  value={searchQuery}
                  onChangeText={setSearchQuery}
                  onSubmitEditing={() => setSubmittedQuery(searchQuery.trim())}
                  style={{
                    flex: 1,
                    marginLeft: 12,
                    paddingHorizontal: 20,
                    paddingVertical: 10,
                    borderWidth: 1,
                    borderRadius: 10,
                    borderColor: 'black',
                  }}
                />
            </View>
        <View className="w-full">
          {submittedQuery.length >= 1 &&
            text.toLowerCase().trim().includes(submittedQuery.trim().toLowerCase()) && (
              <LearnCard
                thumbnail={require('../../assets/images/what-is-ted-image.jpg')}
                name="What is TED?"
                accessibilityLabel="What is TED?"
                description="Helpful information about TED."
                link="/whatisted"
              />
            )}
          {submittedQuery.length >= 1 &&
            text2.toLowerCase().trim().includes(submittedQuery.trim().toLowerCase()) && (
              <LearnCard
                thumbnail={require('../../assets/images/patient-resources-image.jpg')}
                name="TED Patient Resources"
                accessibilityLabel="TED Patient Resources"
                description="Look at resources for TED patients."
                link="/tedresources"
              />
            )}
          {submittedQuery.length >= 1 &&
            text3.toLowerCase().trim().includes(submittedQuery.trim().toLowerCase()) && (
              <LearnCard
                thumbnail={require('../../assets/images/support-groups-image.jpg')}
                name="TED Support Groups"
                accessibilityLabel="TED Support Groups"
                description="Find support groups for TED patients."
                link="/tedsupport"
              />
            )}
          {submittedQuery.length >= 1 &&
            text4.toLowerCase().trim().includes(submittedQuery.trim().toLowerCase()) && (
              <LearnCard
                thumbnail={require('../../assets/images/lifestyle-considerations-image.jpg')}
                name="Treatment Options"
                accessibilityLabel="Treatment Options"
                description="Find treatments and medications for TED."
                link="/treatment"
              />
            )}
          {submittedQuery.length >= 1 &&
            text5.toLowerCase().trim().includes(submittedQuery.trim().toLowerCase()) && (
              <LearnCard
                thumbnail={require('../../assets/images/risk-factors-image.jpg')}
                name="Specialties Involved in Treating TED"
                accessibilityLabel="TED Specialists"
                description="Find specialists treating TED."
                link="/tedspecialist"
              />
            )}
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  </View>
</View>
);
}