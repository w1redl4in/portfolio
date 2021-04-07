import { Content } from '../components/Content';
import { Introduction } from '../components/Content/Introduction';
import { Footer } from '../components/Footer';
import { Navbar } from '../components/Navbar';

export default function Home() {
  return (
    <>
      <Navbar />
      <Introduction />
      <Content />
      <Footer />
    </>
  );
}
