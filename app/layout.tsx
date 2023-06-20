import Header from "@/components/Header";
import "./globals.css";
import Widget from "@/components/Widget";

export const metadata = {
  title: "Trung tâm tiếng Nhật Đà Nẵng - Sakuranbo",
  description:
    "Sakuranbo - Trung tâm Nhật Ngữ Đà Nẵng, Học tiếng nhật tại đà nẵng: Sakuranbo, Trung tâm nhật ngữ Đà Nẵng, Hoc tieng nhat uy tin gia re tai da nang, Lop hoc tieng Nhat da nang: Sakuranbo, nên học tiếng Nhật ở đâu tại đà nẵng",
  keywords:
    "Sakuranbo - Trung tâm Nhật Ngữ Đà Nẵng, Học tiếng nhật đà nẵng, lớp học tiếng nhật tại đà nẵng, Học tiếng nhật giá rẻ tại Đà Nẵng, nên học tiếng nhật ở đâu tại đà nẵng",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi">
      <body>
        <Header />
        <Widget />
        {children}
      </body>
    </html>
  );
}
