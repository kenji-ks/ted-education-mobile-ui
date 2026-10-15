import { Pressable, Text, View } from 'react-native';

type CategoryTabProps ={
    accessibilityLabel: string;
    name: string;
};

const CategoryTab = (props: CategoryTabProps) => {
    return(
        <Pressable
            accessibilityRole="button"
            accessibilityLabel={props.accessibilityLabel}
            className=" mt-2 min-h-[50px] py-2 flex-row items-center justify-center rounded-2xl active:opacity-80"
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
                        {props.name}
                      </Text>
                    
                  </View>
                </Pressable>
    );
}

export default CategoryTab;
