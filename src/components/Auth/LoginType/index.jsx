import cls from "../Auth.module.scss";

import TelegramLoginButton from "react-telegram-login";
import { useContext } from "react";
import { useRouter } from "next/router";

// components
import AuthWrapper from "../components/AuthWrapper";
import SecondaryButton from "components/UI/Buttons/SecondaryButton";
import { PhoneIcon } from "components/UI/Icons";

import { AuthContext } from "../context/AuthContext";
import { useSendClientsMutation } from "services/clients.service";

function LoginType() {
  const router = useRouter();
  const { setTabValue } = useContext(AuthContext);

  const { mutate: sendClients, isLoading } = useSendClientsMutation({
    onSuccess: (res) => {
      console.log("res clients", res);
    },
    onError: (err) => {
      console.log("err clients", err);
    },
  });

  return (
    <AuthWrapper title="Вход на сайт" description="Выберите способ регистрации">
      <SecondaryButton
        icon={<PhoneIcon />}
        onClick={() => {
          setTabValue(1);
        }}
        className={cls.btn}
        fullWidth
      >
        Войти через номер телефона
      </SecondaryButton>

      <div className={cls.tgBtn}>
        <TelegramLoginButton
          botName="paragraf_test_bot"
          dataOnauth={(e) => {
            console.log("data ===> ", e);
            sendClients({ full_name: e?.username, tg_id: e.id });
            router.push("/user");
          }}
        />
      </div>
    </AuthWrapper>
  );
}

export default LoginType;
