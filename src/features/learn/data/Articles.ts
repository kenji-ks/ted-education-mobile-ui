import { ImageSourcePropType } from 'react-native';
import { Href } from 'expo-router';

export interface ArticleData {
    key: string;
    thumbnail: ImageSourcePropType;
    accessibilityLabel: string;
    name: string;
    description: string;
    link: Href;
};

export const Articles: ArticleData[] = [
    {
        key: "What is TED? Helpful information about TED.",
        thumbnail: require('../../../../assets/images/what-is-ted-image.jpg'),
        name: "What is TED?",
        accessibilityLabel: "What is TED?",
        description: "Helpful information about TED.",
        link: "/whatisted"
    },
    {
        key: "TED Patient Resources Look at resources for TED patients",
        thumbnail: require('../../../../assets/images/patient-resources-image.jpg'),
        name: "TED Patient Resources",
        accessibilityLabel: "TED Patient Resources",
        description: "Look at resources for TED patients.",
        link: "/tedresources"
    },
    {
        key: "TED Support Groups Find support groups for TED patients.",
        thumbnail: require('../../../../assets/images/support-groups-image.jpg'),
        name: "TED Support Groups",
        accessibilityLabel: "TED Support Groups",
        description: "Find support groups for TED patients.",
        link: "/tedsupport"
    },
    {
        key: "Treatment Options Find treatment options and medications for TED.",
        thumbnail: require('../../../../assets/images/lifestyle-considerations-image.jpg'),
        name: "Treatment Options",
        accessibilityLabel: "Treatment Options",
        description: "Find treatments and medications for TED.",
        link: "/treatment"
    },
    {
        key: "Specialties Treating TED Find Specialists treating TED.",
        thumbnail: require('../../../../assets/images/risk-factors-image.jpg'),
        name: "Specialties Treating TED",
        accessibilityLabel: "TED Specialists",
        description: "Find specialists treating TED.",
        link: "/tedspecialist"
    },
];