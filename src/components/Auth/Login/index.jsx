import cls from "../Auth.module.scss";

import { useContext } from "react";
import { useRouter } from "next/router";
import useTranslation from "next-translate/useTranslation";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

// components
import MainButton from "components/UI/Buttons/MainButton";
import InputMask from "components/UI/Forms/InputMask";
import AuthWrapper from "../components/AuthWrapper";
import { AuthContext } from "../context/AuthContext";

// functions
import { useSendMessageMutation } from "services/auth.service";
import { replaceAll } from "utils/commonUtils";
import validationForm from "utils/validation";

export default function Login() {
  const router = useRouter();
  const { t } = useTranslation("common");

  const { setTabValue, setLoginData, setIsConfirm, setLoginResult } =
    useContext(AuthContext);

  const schemaValidation = yup
    .object()
    .shape({
      phone: validationForm("phoneNumber"),
    })
    .required();

  const { mutate: sendMessage, isLoading } = useSendMessageMutation({
    onSuccess: (res) => {
      setLoginResult(res.data);
      setIsConfirm(true);
      setTabValue(2);
    },
  });

  const { handleSubmit, watch, control } = useForm({
    reValidateMode: "onChange",
    defaultValues: {
      phone: "",
      register_type: "phone",
      client_type: "WEB_USER",
    },
    resolver: yupResolver(schemaValidation),
  });

  const onSubmit = (data) => {
    const values = {
      ...data,
      phone: replaceAll(data.phone),
    };
    setLoginData(values);
    sendMessage(values);
  };

  return (
    <AuthWrapper
      title="Вход на сайт"
      description="Войдите с вашим номером телефона"
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={cls.input}>
          <label htmlFor="phone">Номер телефона</label>
          <InputMask
            id="phone"
            mask={`+\\9\\9\\8 99 999 99 99`}
            placeholder={"Введите номер"}
            control={control}
            name="phone"
            required
          />
        </div>

        <MainButton
          loading={isLoading}
          type="submit"
          className={`${cls.btn} ${cls.mBtn}`}
          fullWidth
        >
          Выслать код
        </MainButton>
      </form>
    </AuthWrapper>
  );
}
