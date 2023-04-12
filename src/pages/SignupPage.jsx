import React from "react";
import FormInput from "components/FormInput";
import Button from "components/button";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { signUpSchema } from "lib/yup";
import { FormControlLabel, Radio, RadioGroup } from "@mui/material";
import ReportGmailerrorredRoundedIcon from "@mui/icons-material/ReportGmailerrorredRounded";

const SignupPage = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(signUpSchema),
  });

  const onSubmit = async ({ name, email, password, userType }) => {
    console.log({ name, email, password, userType });
    reset();
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col items-center justify-center mt-6 gap-3"
    >
      <FormInput
        label="Full Name"
        type="text"
        variant="outlined"
        register={{ ...register("name") }}
        errorMessage={errors?.name?.message}
      />
      <FormInput
        label="Email Address"
        type="text"
        variant="outlined"
        register={{ ...register("email") }}
        errorMessage={errors?.email?.message}
      />
      <FormInput
        label="Password"
        type="password"
        variant="outlined"
        register={{ ...register("password") }}
        errorMessage={errors?.password?.message}
      />
      <FormInput
        label="Confirm Password"
        type="password"
        variant="outlined"
        register={{ ...register("confirmPassword") }}
        errorMessage={errors?.confirmPassword?.message}
      />
      <RadioGroup row aria-labelledby="demo-row-radio-buttons-group-label">
        <FormControlLabel
          name="userType"
          value="Doctor"
          control={<Radio />}
          label="Doctor"
          {...register("userType")}
        />
        <FormControlLabel
          name="userType"
          value="Patient"
          control={<Radio />}
          label="Patient"
          {...register("userType")}
        />
      </RadioGroup>
      <p>
        <span className="flex -mt-3 items-center justify-center gap-1">
          {errors?.userType?.message && (
            <span className="flex items-center justify-center gap-1 text-red-600">
              <ReportGmailerrorredRoundedIcon style={{ fontSize: "20px" }} />
              {errors?.userType?.message}
            </span>
          )}
        </span>
      </p>

      <div className="flex gap-3">
        <Button buttonType="inverted" type="submit">
          Sign Up
        </Button>
        <Button buttonType="inverted" onClick={() => reset()}>
          Reset
        </Button>
      </div>
    </form>
  );
};

export default SignupPage;
