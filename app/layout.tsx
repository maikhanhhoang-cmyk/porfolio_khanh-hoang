import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Khánh Hoàng — Product Designer & Developer',
  description:
    'Portfolio của Khánh Hoàng, người thiết kế trải nghiệm số và xây dựng sản phẩm web.',
  openGraph: {
    title: 'Khánh Hoàng — Product Designer & Developer',
    description: 'Thiết kế có chủ đích. Sản phẩm tạo khác biệt.',
    locale: 'vi_VN',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body>{children}</body>
    </html>
  );
}
