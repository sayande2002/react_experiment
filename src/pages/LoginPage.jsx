import React from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import FormInput from "components/FormInput";
import Button from "components/button";
import { logInSchema } from "lib/yup";
import { useForm } from "react-hook-form";

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(logInSchema),
  });

  const onSubmit = async ({ email, password }) => {
    console.log({ email, password });
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col items-center justify-center mt-6 gap-3"
    >
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
      <div className="flex gap-3">
        <Button buttonType="inverted" type="submit">
          Log In
        </Button>
        <Button buttonType="inverted" onClick={() => reset()}>
          Reset
        </Button>
      </div>
    </form>
  );
};

export default LoginPage;
