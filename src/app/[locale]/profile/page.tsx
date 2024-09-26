'use client';
import { useMemo, useState } from 'react';

import { useRouter } from 'next/navigation';

import EditIcon from '@icons/Edit.svg';
import LoadingIcon from '@icons/Loading.svg';
import { Card } from '@/components/Panes';
import GoldenText from '@/components/Common/GoldenText';
import { Placeholder } from '@/components/Placeholder';
import BackButton from '@/components/Common/BackButon';

export default function ProfilePage() {
  const router = useRouter();
  const [isFetching, setIsFetching] = useState(true);
  const [about, setAbout] = useState<'empty' | 'edit' | 'display'>('empty');

  const [interest, setInterest] = useState<'empty' | 'edit' | 'display'>(
    'empty'
  );

  const [isSaving, setIsSaving] = useState(false);

  const [profile, setProfile] = useState<Profile>({
    email: '',
    username: '',
    interests: [],

    //
    name: '',
    birthday: '',
    height: 0,
    weight: 0,

    //
    gender: undefined,
    image: undefined,
  });

  const hasAbout = useMemo(() => {
    const { name, birthday, height, weight } = profile;

    return !!name && !!birthday && !!height && !!weight;
  }, [profile]);

  const [temp, setTemp] = useState<Profile>({
    email: '',
    username: '',
    name: '',
    birthday: '',
    height: 0,
    weight: 0,
    interests: [],
  });

  const saveProfile = () => {};

  return (
    <>
      <div className="absolute left-0 top-0 bottom-0 flex items-center justify-center">
        <BackButton onClick={() => router.back()} label={t('back')} />
      </div>
      <div
        className="flex-1 flex flex-col justify-start gap-6 px-2"
        style={{
          opacity: interest === 'edit' ? 0 : 1,
          transition: 'opacity 0.6s ease, height 0.6s ease',
        }}
      ></div>
    </>
  );
}
