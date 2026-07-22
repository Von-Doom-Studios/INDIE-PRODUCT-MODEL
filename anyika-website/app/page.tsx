import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Spotlight from '@/components/Spotlight';
import Editorial from '@/components/Editorial';
import SearchBlock from '@/components/SearchBlock';
import Story from '@/components/Story';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <Story />
      <Editorial />
      <SearchBlock />
      <Spotlight />
      <Footer />
    </main>
  );
}
