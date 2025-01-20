import Image from "next/image";
import Hero from "./homepage/hero";
import SecTwo from "./homepage/secTwo";
// import SecThree from "./homepage/secThree";
import SecFour from "./homepage/secFour";
import SecFive from "./homepage/secFive";
import SecThree from "./pages/page";

export default function Home() {
  return (
    <div>
      <Hero />
      <SecTwo />
      {/* <SecThree /> */}
      <SecThree />
      <SecFour />
      <SecFive />
    </div>
  );
}
