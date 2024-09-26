'use client';
import { useRouter } from 'next/navigation';
import { useTranslations } from 'next-intl';

import BackButton from '@/components/Common/BackButon';
import RainbowButton from '@/components/Common/RainbowButton';
import GoldenText from '@/components/Common/GoldenText';
import { PasswordField, TextField } from '@/components/Inputs';
import { useState } from 'react';

export default function LoginPage() {
  const router = useRouter();
  const t = useTranslations('Global');

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const doLogin = () => {};

  return (
    <>
      <div className="absolute left-0 top-0 bottom-0 flex items-center justify-center">
        <BackButton onClick={() => router.back()} label={t('back')} />
      </div>
      <div className="flex-1 flex flex-col justify-center px-[18px]">
        <h3 className="mb-[25px]">{t('login')}</h3>

        <div className="flex flex-col gap-4 mb-8">
          <TextField
            value={email}
            placeholder={t('enter-username-email')}
            large
            onInput={(newVal) => setEmail(newVal)}
          />

          <PasswordField
            value={password}
            placeholder={t('enter-password')}
            large
            onInput={(newVal) => setPassword(newVal)}
            onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
              e.key === 'Enter' && doLogin();
            }}
          />
        </div>

        <RainbowButton
          disabled={false || !email || !password}
          isLoading={false}
          onClick={() => {}}
        >
          {t('login')}
        </RainbowButton>

        <p className="mt-[52px] flex items-center justify-center gap-1 text-[13px] font-medium">
          <span>{t('no-account')}</span>
          <GoldenText
            className="cursor-pointer"
            onClick={() => router.replace('/register')}
          >
            {t('register-here')}
          </GoldenText>
        </p>
      </div>
    </>
  );
}
