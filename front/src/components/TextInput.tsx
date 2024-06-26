import {ChangeEventHandler} from "react";
import {ResponsiveValue, Textarea} from "@chakra-ui/react";

export const TextInput = (
    {
        value,
        placeholder,
        handleInputChange,
        size = 'sm',
        resize = undefined
    }: {
        value?: string,
        placeholder?: string,
        handleInputChange?: ChangeEventHandler<HTMLTextAreaElement>
        size?: ResponsiveValue<string>
        resize?: 'none' | 'horizontal' | 'vertical' | undefined
    }
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
            />
        </>
    )
}