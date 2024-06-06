import { TextField } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Controller } from "react-hook-form";

const CustomTextField = styled(TextField)(({ theme }) => ({
  "& .MuiInputBase-root": {
    backgroundColor: "rgba(255, 255, 255, 0.08)",
    borderRadius: "8px",
    "&:before": {
      borderBottom: "none",
    },
    "&:after": {
      borderBottom: "none",
    },
    "&:hover:not(.Mui-disabled):before": {
      borderBottom: "none",
    },
  },
  "& .MuiInputBase-input": {
    color: "#fff",
    fontSize: "18px",
    fontStyle: "normal",
    fontWeight: 300,
    lineHeight: "28px",
    "&::placeholder": {
      color: "#fff",
      opacity: 0.26,
    },
  },
}));

export const FormInputField = ({ name, control, rules, ...props }) => {
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field, fieldState: { error } }) => (
        <CustomTextField
          hiddenLabel
          id="filled-hidden-label-normal"
          variant="filled"
          {...props}
          {...field}
        />
      )}
    />
  );
};
