import React from "react";
import { TextField } from "@mui/material";
import ReportGmailerrorredRoundedIcon from "@mui/icons-material/ReportGmailerrorredRounded";

const FormInput = ({ label, type, register, errorMessage, ...otherProps }) => {
  return (
    <TextField
      sx={{ width: "350px", backgroundColor: "white" }}
      error={!!errorMessage && true}
      label={label}
      variant="outlined"
      type={type}
      autoComplete="on"
      helperText={
        errorMessage && (
          <span className="flex items-center justify-center gap-1">
            <ReportGmailerrorredRoundedIcon style={{ fontSize: "20px" }} />
            {errorMessage}
          </span>
        )
      }
      {...register}
      {...otherProps}
    />
  );
};

export default FormInput;
