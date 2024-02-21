import cls from "../Auth.module.scss";

import { useState, useContext } from "react";
import { useRouter } from "next/router";
import useTranslation from "next-translate/useTranslation";
import { useForm } from "react-hook-form";

// components
import { AuthContext } from "../context/AuthContext";
import AuthWrapper from "../components/AuthWrapper";
import MainButton from "components/UI/Buttons/MainButton";
import InputMask from "components/UI/Forms/InputMask";

// functions
import formatCodeExpireDuration from "utils/formatCodeExpireDuration";
import useCodeExpire from "hooks/useCodeExpire";
import { useSendOTPMutation } from "services/auth.service";
import { saveUserDetails } from "utils/userDetails";
import { isObjectEmpty } from "utils/isObjectEmpty";
import { useSendMessageMutation } from "services/auth.service";

export default function OTP() {
  const router = useRouter();
  const [seconds, setSeconds] = useState(5);
  const [expired, setExpired] = useState(false);
  const { t } = useTranslation("common");

  const { mutate: sendOTP, isLoading } = useSendOTPMutation({
    onSuccess: (res) => {
      if (res.data === "User verified but not found") {
        setTabValue(3);
      } else if (res.data && res.data?.token) {
        saveUserDetails(res.data); // save user data
        router.push("/");
      }
    },
  });

  const { mutate: sendMessage } = useSendMessageMutation({});

  const { loginData, setTabValue, loginResult } = useContext(AuthContext);

  let isConfirm = true;

  const { handleSubmit, watch, control } = useForm({
    reValidateMode: "onChange",
    defaultValues: {
      code: "",
    },
  });

  useCodeExpire({
    seconds,
    setExpired,
    isConfirm,
    setSeconds,
  });

  const resendNumber = () => {
    if (expired) {
      setExpired(false);
      setSeconds(5);
    }
    // sendMessage(loginData);
  };

  const onSubmit = (data) => {
    sendOTP({
      data: {
        data: isObjectEmpty(loginResult.data) ? {} : loginResult.data,
        register_type: "phone",
        tables: [],
      },
      sms_id: loginResult?.sms_id,
      otp: data.code,
    });
  };

  return (
    <AuthWrapper
      title="Вход на сайт"
      description="Код отправили сообщением на номер"
      phone={loginData.phone}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={cls.input}>
          <label htmlFor="code">Код подтверждения</label>
          <InputMask
            id="code"
            mask="999999"
            placeholder={"Введите номер"}
            control={control}
            name="code"
            required
          />
        </div>

        <div className={cls.timer}>
          {expired ? (
            <span onClick={resendNumber}>Отправить ещё раз</span>
          ) : (
            formatCodeExpireDuration(seconds)
          )}
        </div>

        <MainButton
          loading={isLoading}
          type="submit"
          className={`${cls.btn} ${cls.mBtn}`}
          fullWidth
          disabled={watch("code").length < 6}
        >
          Подтвердить
        </MainButton>
      </form>
    </AuthWrapper>
  );
}
