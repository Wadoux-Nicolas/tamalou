import {ChangeEventHandler, ForwardedRef, forwardRef} from "react";
import {ResponsiveValue, Textarea} from "@chakra-ui/react";

export const TextInput = forwardRef((
    {
        value,
        placeholder,
        handleInputChange,
        size = 'sm',
        resize = undefined,
        focusBorderColor
    }: {
        value?: string,
        placeholder?: string,
        handleInputChange?: ChangeEventHandler<HTMLTextAreaElement>
        size?: ResponsiveValue<string>
        resize?: 'none' | 'horizontal' | 'vertical' | undefined,
        focusBorderColor?: string
    },
    ref: ForwardedRef<HTMLTextAreaElement>
) => {
    return (
        <>
            <Textarea
                value={value}
                onChange={handleInputChange}
                placeholder={placeholder}
                size={size}
                resize={resize}
                borderRadius={12}
                p={4}
                ref={ref}
                focusBorderColor={focusBorderColor}
            />
        </>
    )
})