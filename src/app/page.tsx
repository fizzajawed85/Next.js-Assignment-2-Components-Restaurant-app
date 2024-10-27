import Feature from "@/components/Feature/Feature";
import Hero from "@/components/Hero/Hero";
import Services from "./Services/page";
import Menu from "./Menu/page";
import Survey from "./Survey/page";
import Image from "next/image";


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
