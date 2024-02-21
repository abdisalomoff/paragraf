import cls from "../Auth.module.scss";

import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { useContext } from "react";
// components
import AuthWrapper from "../components/AuthWrapper";
import Input from "components/UI/Forms/Input";
import MainButton from "components/UI/Buttons/MainButton";
import { AuthContext } from "../context/AuthContext";

//functions
import { useSendRegisterMutation } from "services/auth.service";
import { saveUserDetails } from "utils/userDetails";

function Registration() {
  const router = useRouter();
  const { handleSubmit, watch, control, setValue, register, errors } = useForm({
    reValidateMode: "onChange",
    defaultValues: {
      name: "",
    },
  });
  const today = Math.round(+new Date());

  const { loginData } = useContext(AuthContext);

  const { mutate: sendRegister, isLoading } = useSendRegisterMutation({
    onSuccess: (res) => {
      router.push("/");
      setValue("name", "");
      saveUserDetails(res.data); // save user data
    },
  });

  const onSubmit = (data) => {
    sendRegister({
      data: {
        register_type: "default",
        email: `user-${today}@mail.ru`,
        phone: loginData.phone,
        login: `user-${today}@login.ru`,
        name: data.name,
      },
      table_slug: "user",
    });
  };
  return (
    <AuthWrapper title="Регистрация" description="Войдите с вашим именем">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={cls.input}>
          <label htmlFor="name">{"Имя"}</label>
          <Input
            id="name"
            placeholder={"Введите ваше имя"}
            name="name"
            register={register}
            errors={errors}
            required
          />
        </div>

        <MainButton
          type="submit"
          loading={isLoading}
          disabled={!watch("name")}
          className={`${cls.btn} ${cls.mBtn}`}
          fullWidth
        >
          Подтвердить
        </MainButton>
      </form>
    </AuthWrapper>
  );
}

export default Registration;
