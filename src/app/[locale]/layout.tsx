import type { ReactNode } from 'react';

import { NextIntlClientProvider, useMessages } from 'next-intl';

type Props = {
  children: ReactNode;
  params: { locale: string };
};

export default function AuthLayout({ children, params: { locale } }: Props) {
  const messages = useMessages();

  return (
    <div
      className="w-full lg:max-w-[600px] lg:rounded-[30px] mx-auto mt-[2.5vh] h-[95vh] flex flex-col transition-all duration-300"
      style={{
        background: `radial-gradient(124.23% 171.99% at 100% -3.39%, #1F4247 0%, #0D1D23 56.18%, #09141A 100%)`,
      }}
    >
      <div className="relative flex-1 pt-3 pb-6 flex flex-col overflow-auto">
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </div>
    </div>
  );
}
