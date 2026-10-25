import {ImageSourcePropType} from 'react-native';
import { Href } from 'expo-router';

export interface mockArticleData {
  thumbnail: ImageSourcePropType;
  accessibilityLabel: string;
  name: string;
  description: string;
  link: Href;
};

export const mockArticles: mockArticleData[] = [
    {
        thumbnail: require('../../../assets/images/what-is-ted-image.jpg'),
        name: "What is TED?",
        accessibilityLabel: "What is TED?",
        description: "Helpful information about TED.",
        link: "/whatisted"
    },
];