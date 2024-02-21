import cls from "../Auth.module.scss";
import { useRouter } from "next/router";
import { CloseIcon } from "components/UI/Icons";
import { LogoIcon, BackArrowIcon } from "components/UI/Icons";
import { useContext } from "react";
import { AuthContext } from "..//AuthContext";
import { useMediaQuery } from "react-recontextsponsive";

export default function AuthWrapper({
  title,
  description,
  children,
  phone,
  className,
}) {
  const { tabValue, setTabValue } = useContext(AuthContext);
  const router = useRouter();

  const isMobile = useMediaQuery({ maxWidth: 480 });

  const handleBack = () => {
    if (tabValue === 1) {
      setTabValue(0);
    } else if (tabValue === 2) {
      setTabValue(1);
    }
  };

  return (

    <div className={`${cls.authWrapper} ${className}`}>
      <div className={cls.header}>
        {isMobile && (
          <>
            <span onClick={handleBack} className={cls.back}>
              <BackArrowIcon />
            </span>

            <span className={cls.logo}>
              <LogoIcon />
            </span>
          </>
        )}

        <div className={cls.close} onClick={() => router.push("/")}>
          <CloseIcon />
        </div>
      </div>

      <h1 className={cls.title}>{title}</h1>

      <p className={cls.description}>{description}</p>

      <p className={cls.phone}>{phone}</p>

      {children}
    </div>
    
  );
}
