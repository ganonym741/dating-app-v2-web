'use client';

import { useRouter } from 'next/navigation';

import { useTranslations } from 'next-intl';
import { useForm } from 'react-hook-form';

import BackButton from '@/components/Common/BackButon';
import RainbowButton from '@/components/Common/RainbowButton';
import GoldenText from '@/components/Common/GoldenText';
import { TextField } from '@/components/Inputs';
import type { RegisterUserDto } from '@/query/dto/user.dto';
import { useRegister } from '@/query/query/user';

export default function RegisterPage() {
  const router = useRouter();
  const t = useTranslations('Global');

  const { mutate: register, isPending } = useRegister();

  const { getValues, control, formState } = useForm<RegisterUserDto>();

  const doRegister = () => {
    register({
      email: getValues('email'),
      username: getValues('username'),
      password: getValues('password'),
      confirmPassword: getValues('confirmPassword'),
    });
  };

  return (
    <div className="flex flex-col py-[3em] px-2 text-white h-full">
      <div className="flex items-center justify-start">
        <BackButton onClick={() => router.back()} label={t('back')} />
      </div>
      <div className="flex-1 flex flex-col justify-center px-[18px]">
        <h3 className="mb-7 ml-7 text-md font-bold">{t('register')}</h3>

        <div className="flex flex-col gap-4 mb-8">
          <TextField
            control={control}
            name={'email'}
            placeholder={t('enter-email')}
            rules={{ required: 'Email is required' }}
          />

          <TextField
            control={control}
            name={'username'}
            placeholder={t('create-username')}
            rules={{ required: 'Username is required' }}
          />

          <TextField
            control={control}
            name={'password'}
            type={'password'}
            placeholder={t('create-password')}
            rules={{ required: 'Password is required' }}
          />

          <TextField
            control={control}
            type={'password'}
            name={'confirmPassword'}
            placeholder={t('confirm-password')}
            rules={{ required: 'Confirm Password is required' }}
            onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
              e.key === 'Enter' && doRegister();
            }}
          />
        </div>

        <RainbowButton
          disabled={Object.keys(formState.errors).length > 0 || isPending}
          isLoading={isPending}
          onClick={doRegister}
        >
          {t('register')}
        </RainbowButton>

        <p className="mt-[52px] flex items-center justify-center gap-1 text-sm font-medium">
          <span>{t('have-account')}</span>

          <GoldenText
            className="cursor-pointer"
            onClick={() => router.replace('/login')}
          >
            {t('login-here')}
          </GoldenText>
        </p>
      </div>
    </div>
  );
}
