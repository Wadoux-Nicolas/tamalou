import CustomButton from './CustomButton';

const SlideButton = ({ icon, text, iconColor, bgColor, borderColor, badgeContent, onToggle }) => {
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