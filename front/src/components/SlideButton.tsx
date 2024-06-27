import CustomButton from './CustomButton';
import { IconType } from "react-icons";

type Props = {
    icon: IconType,
    bgColor: string,
    text: string,
    badgeContent: number
    onToggle: ( ) => void
    borderColor: string
    iconColor?: string
}

const SlideButton = ({ icon, text, iconColor, bgColor, borderColor, badgeContent, onToggle }: Props) => {
    return (
        <CustomButton
            icon={icon}
            text={text}
            iconColor={iconColor}
            bgColor={bgColor}
            borderColor={borderColor}
            badgeContent={badgeContent}
            onClick={onToggle}
        />
    );
};

export default SlideButton;