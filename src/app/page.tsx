import Feature from "@/components/Feature";
import Hero from "@/components/Hero";
import Services from "./Services/page";
import Menu from "./Menu/page";
import Survey from "./Survey/page";



export default function Home() {
  return (
    <main>
      <Hero/>
      <Feature/>
      <Services/>
      <Menu/>
      <Survey/>

    </main>
  );
}
