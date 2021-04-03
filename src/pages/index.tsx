import { Content } from '../components/Content';
import { Introduction } from '../components/Content/Introduction';
import { Projects } from '../components/Content/Projects';
import { Navbar } from '../components/Navbar';

export default function Home() {
  return (
    <>
      <Navbar />
      <Introduction />
      <Projects>
        <Content />
      </Projects>
    </>
  );
}