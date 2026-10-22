    import { Text, View, ScrollView } from 'react-native';
    import { Pressable } from 'react-native';
    import { router } from 'expo-router';
    import { StatusBar } from 'expo-status-bar';
    import { SafeAreaView } from 'react-native-safe-area-context';
    import LearnCard from '@/features/learn/learncard';
    import AppIcon from '@/components/ui/AppIcon';

    export default function LearnScreen() {
    return (
        <View className="flex-1 bg-white">
        <StatusBar style="dark" />
        <View className="flex-1 items-center">
            <View className="w-full max-w-[430px] flex-1 overflow-hidden bg-white">
            <SafeAreaView className="flex-1">
                <ScrollView>
                <View className="items-center px-7 pt-3">
                    <View className="w-full flex-row items-center justify-between">
                    <Pressable
                        accessibilityRole="button"
                        accessibilityLabel="Back"
                        onPress={() => router.back()}
                        className="h-10 w-10 items-center justify-center"
                    >
                        <AppIcon
                            iconname='back'
                            color='#17395D'
                            size={25}
                            strokeWidth={2}
                        />
                    </Pressable>
                    <Text
                        className="flex-1 text-center text-[25px]"
                        style={{
                            fontFamily: 'Georgia',
                            fontWeight: '400',
                            color: '#17395D',
                        }}
                    >
                    Learn
                    </Text>
                    <Pressable
                        accessibilityRole="button"
                        accessibilityLabel="Search"
                        onPress={() => router.push('/learnsearch')}
                        className="h-10 w-10 items-center justify-center"
                    >
                        <AppIcon
                            iconname='search'
                            size={25}
                            color='#17395D'
                            strokeWidth={2}
                        />
                    </Pressable>
                    </View>
                    <LearnCard
                        thumbnail={require('../../../assets/images/what-is-ted-image.jpg')}
                        name="What is TED?"
                        accessibilityLabel="What is TED?"
                        description="Helpful information about TED."
                        link="/whatisted"
                    />
                    <LearnCard
                        thumbnail={require('../../../assets/images/patient-resources-image.jpg')}
                        name="TED Patient Resources"
                        accessibilityLabel="TED Patient Resources"
                        description="Look at resources for TED patients."
                        link="/tedresources"
                    />
                    <LearnCard
                        thumbnail={require('../../../assets/images/support-groups-image.jpg')}
                        name="TED Support Groups"
                        accessibilityLabel="TED Support Groups"
                        description="Find support groups for TED patients."
                        link="/tedsupport"
                    />
                    <LearnCard
                        thumbnail={require('../../../assets/images/lifestyle-considerations-image.jpg')}
                        name="Treatment Options"
                        accessibilityLabel="Treatment Options"
                        description="Find treatments and medications for TED."
                        link="/treatment"
                    />
                    <LearnCard
                        thumbnail={require('../../../assets/images/risk-factors-image.jpg')}
                        name="Specialties Treating TED"
                        accessibilityLabel="TED Specialists"
                        description="Find Specialists treating TED."
                        link="/tedspecialist"
                    />
                </View>
                </ScrollView>
            </SafeAreaView>
            </View>
        </View>
        </View>
    );
    }