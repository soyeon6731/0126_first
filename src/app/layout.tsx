import type { Metadata } from 'next';
import './globals.css';
import Providers from './providers';
import { Toaster } from '@/components/ui/toaster';

export const metadata: Metadata = {
  title: 'KURATION - K-POP AI 큐레이터',
  description: '당신만을 위한 K-POP 음악 추천 서비스',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning lang="ko">
      <head>
        {/* Pretendard Variable Font */}
        <link
          rel="stylesheet"
          as="style"
          crossOrigin="anonymous"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable.min.css"
        />
        {/* DungGeunMo Pixel Font for headings */}
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/galmuri@latest/dist/galmuri.css"
        />
      </head>
      <body className="font-body antialiased">
        <Providers>
          {children}
          <Toaster />
        </Providers>
      </body>
    </html>
  );
}
