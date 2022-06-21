import { ThemeButton } from "./style";

function Button({children, graySchema = false, ...rest}){
    return(
        <ThemeButton graySchema={graySchema} type="button" {...rest}>
            {children}
        </ThemeButton>
    )
}
export default Button