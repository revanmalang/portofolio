import { Sora } from "next/font/google";
import Head from "next/head";

import Header from "../components/Header";
import Nav from "../components/Nav";
import TopLeftImg from "../components/TopLeftImg";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

const Layout = ({ children }) => {
  return (
    <main
      className={`page bg-site text-white bg-cover bg-no-repeat ${sora.variable} font-sora relative`}
    >
      <Head>
        <title>Moch Revano Budiansyah | Portfolio</title>
        <meta
          name="description"
          content="Saya adalah Junior Full Stack Developer yang berdedikasi dengan keahlian dalam membangun aplikasi web yang responsif, scalable, dan mudah digunakan oleh berbagai macam pengguna. Saya berfokus pada penerapan teknologi modern dan praktik terbaik agar aplikasi yang dikembangkan tidak hanya menarik secara tampilan tetapi juga handal, cepat, dan nyaman digunakan. Di dalam portofolio ini, saya menampilkan hasil kerja dan berbagai proyek yang pernah saya kerjakan sebagai bukti nyata dari kemampuan dan komitmen saya dalam dunia pengembangan aplikasi."
        />
        <meta
          name="keywords"
          content="react, next, nextjs, html, css, javascript, js, modern-ui, modern-ux, portfolio, framer-motion, 3d-website, particle-effect"
        />
        <meta name="author" content="Moch Revano Budiansyah" />
        <meta name="theme-color" content="#f13024" />
      </Head>

      <TopLeftImg />
      <Nav />
      <Header />

      {children}
    </main>
  );
};

export default Layout;
