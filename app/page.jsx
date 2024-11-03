import { Button } from "@/components/ui/button";
import Photo from "@/components/Photo";
import Social from "@/components/Social";
import Stats from "@/components/Stats";

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">"od A do Z"</span>
            <h1 className="h1 mb-6">
              Witaj, jesteśmy <br />
              <span className="text-pink">GoldenEdge</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              Jesteśmy Twoimi profesjonalnymi doradzcami w zakresie
              nieruchomości, kredytów i ubezpieczeń
            </p>
            <div className="mb-8 xl:mb-0">
              <Social
                containerStyles="flex gap-6"
                iconStyles="w-9 h-9 border border-yellow rounded-full flex justify-center items-center text-yellow text-base hover:bg-yellow hover:text-primary hover:transition-all duration-500"
              />
            </div>
          </div>
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
};

export default Home;
