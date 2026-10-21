import { Search, ArrowRight, ChevronLeft, House, Book, ChartNoAxesColumn, HeartPulse, UserRound, BookBookmark, Activity, Share, BriefcaseMedical, Check} from 'lucide-react-native';

type AppIconProps ={
    iconname: keyof typeof icons;
    size: number;
    color: string;
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
    ProfileTab: UserRound, 
    HomeLearn: BookBookmark, 
    HomeTrack: Activity,
    HomeHealth: BriefcaseMedical,
    HomeShare: Share,
    select:  Check,
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