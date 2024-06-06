import {
  Checkbox,
  ListItemText,
  MenuItem,
  OutlinedInput,
  Select,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Controller } from "react-hook-form";

const CustomOutlinedInput = styled(OutlinedInput)(({ theme }) => ({
  "& .MuiOutlinedInput-notchedOutline": {
    border: "none",
  },
  backgroundColor: "rgba(255, 255, 255, 0.08)",
  "& .MuiInputBase-input": {
    fontSize: "18px",
    fontStyle: "normal",
    fontWeight: 325,
    lineHeight: "28px",
  },
  borderRadius: "8px",
}));

const CustomSelect = styled(Select)(({ theme }) => ({
  "& .MuiOutlinedInput-root": {
    backgroundColor: "#f0f0f0",
    borderRadius: "8px",
    "&:hover .MuiOutlinedInput-notchedOutline": {
      border: "none",
    },
    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
      border: "none",
    },
  },
  "& .MuiInputBase-input": {
    color: "#333",
    "&::placeholder": {
      color: "#a0a0a0",
    },
  },
  "& .MuiSvgIcon-root": {
    color: "#D9D9D9",
  },
}));

const CustomMenuItem = styled(MenuItem)(({ theme }) => ({
  "&:hover": {
    backgroundColor: "#9789C7",
  },
  "&.Mui-selected": {
    backgroundColor: "#9789C7",
    "&:hover": {
      backgroundColor: "#9789C7",
    },
  },
}));

const CustomCheckbox = styled(Checkbox)(({ theme }) => ({
  color: "#fff",
  "&.Mui-checked": {
    color: "#fff",
  },
}));

const CustomListItemText = styled(ListItemText)(({ theme }) => ({
  color: "#fff",
}));

const MenuProps = {
  PaperProps: {
    // style: {
    //   maxHeight: 48 * 4.5 + 8,
    //   width: 250,
    // },
  },
};
const names = ["Oliver", "Harry", "George", "Jack", "Jacob"];

export const CustomFormSelect = ({
  name,
  control,
  rules,
  placeholder,
  ...props
}) => {
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field }) => {
        return (
          <CustomSelect
            {...props}
            {...field}
            displayEmpty
            labelId="demo-multiple-checkbox-label"
            id="demo-multiple-checkbox"
            value={field.value ? field.value : props.multiple ? [] : ""}
            input={<CustomOutlinedInput />}
            renderValue={(selected) => {
              if (selected.length === 0) {
                return (
                  <span style={{ color: "#fff", opacity: 0.26 }}>
                    {placeholder}
                  </span>
                );
              }
              return (
                <span style={{ color: "#fff" }}>
                  {props.multiple ? selected?.join(", ") : selected}
                </span>
              );
            }}
            IconComponent={(props) => <KeyboardArrowDownIcon {...props} />}
            MenuProps={MenuProps}
          >
            {names.map((name) => (
              <CustomMenuItem key={name} value={name}>
                {props.multiple && (
                  <CustomCheckbox checked={field.value?.indexOf(name) > -1} />
                )}
                <CustomListItemText primary={name} />
              </CustomMenuItem>
            ))}
          </CustomSelect>
        );
      }}
    />
  );
};
