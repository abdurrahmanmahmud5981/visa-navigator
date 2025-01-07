import { Link, useLoaderData } from "react-router-dom";
import { Helmet } from "react-helmet";
import { FaArrowRight } from "react-icons/fa6";
import { Player } from "@lottiefiles/react-lottie-player";
import Banner from "../components/Banner";
import VisaCard from "../components/VisaCard";
import Destinations from "../components/Destinations";
import TravelTimelineExplorer from "../components/TravelTimelineExplorer";
import animationData from "../assets/loadingAnimation.json";
import { Typewriter } from "react-simple-typewriter";
import TeamSection from "../components/TeamSection";
import Achievement from "../components/Achievement";
import ClientTestimonial from "../components/ClientTestimonial";

const Home = () => {
  const visaCollection = useLoaderData();

  return (
    <>
      <Helmet>
        <title>Welcome - Visa Navigator</title>
        <meta
          name="description"
          content="Discover the world's best visas, book travel plans, and apply for visas easily."
        />
        <meta property="og:title" content="Welcome to Visa Navigator app" />
        <meta
          property="og:description"
          content="Discover the world's best visas, book travel plans, and apply for visas easily."
        />
      </Helmet>

      <div className="space-y-12 sm:space-y-16 my-6 mt-2">
        <Banner />
        <section>
          <Achievement />
        </section>
        <section className="space-y-7 dark:bg-neutral dark:text-base-content sm:py-10 sm:bg-slate-50 sm:px-8 rounded-2xl">
          <h2 className="text-3xl font-bold text-center mb-5">
            <Typewriter
              words={[
                "Discover the world's best visas",
                "Book travel plans",
                "Apply for visas easily",
                "Discover the world's best visas",
                " Discover Our Top And Latest Visas",
              ]}
              loop={5}
              cursor
              cursorStyle="|"
              typeSpeed={90}
              deleteSpeed={90}
              delaySpeed={1000}
            />
          </h2>
          {/* Lottie Animation */}
          <div className="flex justify-center mb-8">
            <Player
              autoplay
              loop
              src={animationData}
              style={{ height: "300px", width: "300px" }}
            />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {visaCollection &&
              visaCollection.map((visa) => (
                <VisaCard key={visa?._id} visa={visa} />
              ))}
          </div>
          <div className="w-full mx-auto grid justify-center !mt-12">
            <Link to={`/allVisas`}>
              <button className="btn btn-neutral text-lg px-10 mx-auto dark:bg-base-100">
                See all visas <FaArrowRight className="animate-pulse" />
              </button>
            </Link>
          </div>
        </section>

        <section>
          <Destinations />
        </section>
        <section>
          <TravelTimelineExplorer />
        </section>
        <section>
          <TeamSection />
        </section>
        <section>
          <ClientTestimonial/>
        </section>
      </div>
    </>
  );
};

export default Home;
