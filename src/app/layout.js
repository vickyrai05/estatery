import { Inter } from "next/font/google";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../public/styling/base/base.scss';
import '../../public/helper/reset.scss';
import Header from "../app/component/header/page";
import Footer from "../app/component/footer/page";
import '@fortawesome/fontawesome-svg-core/styles.css';
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.13.0/css/all.css" />
      </head>
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
