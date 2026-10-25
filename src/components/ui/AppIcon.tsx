import { Search, ArrowRight, ChevronLeft, House, Pill, Book, ChartNoAxesColumn, HeartPulse, UserRound, BookBookmark, Activity, Share, BriefcaseMedical, Check} from 'lucide-react-native';
import type { ColorValue } from "react-native";

type AppIconProps ={
    iconname: keyof typeof icons;
    size: number;
    color: ColorValue;
    strokeWidth: number;
};

const icons = { 
    search: Search, 
    arrow: ArrowRight, 
    back: ChevronLeft, 
    home: House, 
    LearnTab: Book, 
    TrackTab: ChartNoAxesColumn, 
    HealthTab: HeartPulse, 
    Profile: UserRound, 
    HomeLearn: BookBookmark, 
    HomeTrack: Activity,
    HomeHealth: BriefcaseMedical,
    HomeShare: Share,
    select:  Check,
    Treatment: Pill
};

const AppIcon = (props: AppIconProps) => {
    const Icon = icons[props.iconname];
    return(
        <Icon
            size={props.size}
            color={props.color}
            strokeWidth={props.strokeWidth}
        />
    );
}

export default AppIcon;