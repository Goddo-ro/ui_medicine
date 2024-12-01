import { useLogin } from '@/pages/login/model/useLogin';

import GithubSvg from '@/shared/icons/github.svg';
import GoogleSvg from '@/shared/icons/google.svg';

import classes from './LoginAuthVariants.module.scss';

interface VariantModel {
  variantName: string;
  iconSrc: string;
  authMethod: () => Promise<unknown>;
}

export const LoginAuthVariants = () => {
  const { loginWithGoogle } = useLogin();

  const variants: VariantModel[] = [
    {
      variantName: 'Google',
      iconSrc: GoogleSvg,
      authMethod: loginWithGoogle,
    },
    {
      variantName: 'GitHub',
      iconSrc: GithubSvg,
      authMethod: loginWithGoogle,
    },
  ];

  return (
    <div className={classes.variants}>
      <div className={classes.variantsMessage}>
        <div className={classes.line}></div>
        <span>или</span>
        <div className={classes.line}></div>
      </div>
      {variants.map(({ variantName, iconSrc, authMethod }, index) => (
        <button
          key={index}
          className={classes.variant}
          onClick={() => authMethod()}
        >
          <img src={iconSrc} alt={variantName} />
          <span>
            Войти с помощью <b>{variantName}</b>
          </span>
        </button>
      ))}
    </div>
  );
};
