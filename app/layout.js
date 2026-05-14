import "./globals.css";

export const metadata = {
  title: "Nexora Services",
  description: "Premium Digital Services UI",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
