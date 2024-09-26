'use client';
import { useState } from 'react';

import { useRouter } from 'next/navigation';

import { useTranslations } from 'next-intl';

import BackButton from '@/components/Common/BackButon';
import RainbowButton from '@/components/Common/RainbowButton';
import GoldenText from '@/components/Common/GoldenText';
import { PasswordField, TextField } from '@/components/Inputs';

export default function RegisterPage() {
  const router = useRouter();
  const t = useTranslations('Global');

  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const doRegister = () => {};

  return (
    <>
      <div className="absolute left-0 top-0 bottom-0 flex items-center justify-center">
        <BackButton onClick={() => router.back()} label={t('back')} />
      </div>
      <div className="flex-1 flex flex-col justify-center px-[18px]">
        <h3 className="mb-[25px]">{t('register')}</h3>

        <div className="flex flex-col gap-4 mb-8">
          <TextField
            value={email}
            placeholder={t('enter-email')}
            large
            onInput={(newVal) => setEmail(newVal)}
          />

          <TextField
            value={username}
            placeholder={t('create-username')}
            large
            onInput={(newVal) => setUsername(newVal)}
          />

          <PasswordField
            value={password}
            placeholder={t('create-password')}
            large
            onInput={(newVal) => setPassword(newVal)}
          />

          <PasswordField
            value={confirmPassword}
            placeholder={t('confirm-password')}
            large
            onInput={(newVal) => setConfirmPassword(newVal)}
            onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
              e.key === 'Enter' && doRegister();
            }}
          />
        </div>

        <RainbowButton
          disabled={!email || !username || !password || !confirmPassword}
          onClick={doRegister}
        >
          {t('register')}
        </RainbowButton>

        <p className="mt-[52px] flex items-center justify-center gap-1 text-[13px] font-medium">
          <span>{t('have-an-account')}</span>

          <GoldenText
            className="cursor-pointer"
            onClick={() => router.replace('/login')}
          >
            {t('login-here')}
          </GoldenText>
        </p>
      </div>
    </>
  );
}
