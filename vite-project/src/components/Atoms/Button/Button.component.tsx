import { default as MuiButton, ButtonProps } from "@mui/material/Button";

interface IProps extends ButtonProps {
    id: string; //? Makes the id required for buttons
}

const Button = (props: IProps) => {
    return <MuiButton {...props} />;
};

export default Button;
