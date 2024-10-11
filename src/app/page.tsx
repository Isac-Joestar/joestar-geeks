import Header from "@/components/header";
import Home from "@/components/home"
import Section from "@/components/section";
import Getmanga from '@/services/manga/getReleases'
{/* <Header/>
      <Home/>
      <Section/> */}
export default function App() {
  return (
    <>
      
      <Getmanga/>
    </>
  );
}
