'use client';

import { useMemo, useState } from 'react';

import { useRouter } from 'next/navigation';

import BackButton from '@/components/Common/BackButon';

export default function ProfilePage() {
  const router = useRouter();

  return (
    <div>
      <div className="absolute left-0 top-0 bottom-0 flex items-center justify-center">
        <BackButton onClick={() => router.back()} label={t('back')} />
      </div>
      <div className="flex-1 flex flex-col justify-start gap-6 px-2"></div>
    </div>
  );
}
