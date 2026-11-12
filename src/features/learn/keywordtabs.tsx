import {ScrollView, Text, View} from "react-native";

type KeywordTabsProps = {
    keywords: string[];
};

const KeywordTabs = ({ keywords }: KeywordTabsProps) => {
    return(
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <View className="flex-row flex-wrap items-center justify-center px-2">
            {keywords.map((keyword) => (
                <View
                    key={keyword}
                    className="mt-2 mx-1 min-h-[50px] py-2 px-4 flex-row items-center justify-center rounded-2xl bg-gray-200"              >
                    <Text
                        className="text-[12px] font-light"
                        style={{
                            fontFamily: 'Georgia',
                            fontWeight: '300',
                            color: '#17395D',
                        }}
                    >
                        {keyword}
                    </Text>
                </View>
            ))}
        </View>
        </ScrollView>
    );
}

export default KeywordTabs;