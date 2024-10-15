'use client';

import { useRouter } from 'next/navigation';

import { useTranslations } from 'next-intl';
import { useForm } from 'react-hook-form';

import BackButton from '@/components/Common/BackButon';
import RainbowButton from '@/components/Common/RainbowButton';
import GoldenText from '@/components/Common/GoldenText';
import { useAuthSignin } from '@/query/query/auth';
import type { LoginReqDto } from '@/query/dto/auth.dto';
import TextField from '@/components/Inputs/TextField';

export default function LoginPage() {
  const router = useRouter();
  const t = useTranslations('Global');

  const { mutate: login, isPending } = useAuthSignin();

  const { getValues, control, formState } = useForm<LoginReqDto>();

  const doLogin = () => {
    login({
      username: getValues('username'),
      password: getValues('password'),
    });
  };

  return (
    <div className="flex flex-col py-[3em] px-2 text-white h-full">
      <div className="flex items-center justify-start">
        <BackButton onClick={() => router.back()} label={t('back')} />
      </div>
      <div className="flex flex-col justify-center h-full px-4">
        <h3 className="mb-7 ml-7 text-md font-bold">{t('login')}</h3>

        <div className="flex flex-col gap-4 mb-8">
          <TextField
            control={control}
            name={'username'}
            rules={{ required: 'Username is required' }}
            placeholder={t('enter-username-email')}
          />

          <TextField
            control={control}
            name={'password'}
            type={'password'}
            placeholder={t('enter-password')}
            rules={{ required: 'Password is required' }}
            onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
              e.key === 'Enter' && doLogin();
            }}
          />
        </div>

        <RainbowButton
          disabled={Object.keys(formState.errors).length > 0 || isPending}
          isLoading={isPending}
          onClick={doLogin}
        >
          {t('login')}
        </RainbowButton>

        <p className="mt-[52px] flex items-center justify-center gap-1 text-sm font-medium">
          <span>{t('no-account')}</span>
          <GoldenText
            className="cursor-pointer"
            onClick={() => router.replace('/register')}
          >
            {t('register-here')}
          </GoldenText>
        </p>
      </div>
    </div>
  );
}
