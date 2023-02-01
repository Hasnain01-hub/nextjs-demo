import "remixicon/fonts/remixicon.css";
import { motion } from "framer-motion";
import React, { useMemo } from "react";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";
import getScrollAnimation from "../utils/getScrollAnimation";
import Link from "next/link";
import { data } from "../pages/data";
import Head from "next/head";
import AOS from "aos";
import "aos/dist/aos.css";

const Products = () => {
  React.useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
    });
  }, []);

  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <>
      <ScrollAnimationWrapper>
        <motion.div
          // variants={scrollAnimation}
          className="bg-gradient-to-b from-white-300 to-white-500 w-full py-14"
        >
          <h3
            className="text-2xl sm:text-3xl text-center lg:text-4xl font-medium text-black-600 leading-relaxed w-9/12 sm:w-6/12 lg:w-4/12 mx-auto"
            id="Machinery"
          >
            Machinery
          </h3>
          <div className="flex gap-6 flex-wrap flex-row smallscreen">
            {data.map((item) => {
              return (
                <>
                  <motion.div
                    key={item.id}
                    data-aos="fade-up"
                    data-aos-offset="200"
                    data-aos-delay="50"
                    
                    class="max-w-sm bg-white border border-gray-200 rounded-lg dark:bg-gray-800 smallscreen-center"
                    style={{
                      boxShadow: "0 36px 28px -10px rgb(0 0 0 / 20%)",
                      border: "none",

                      marginTop: "5vh",
                    }}
                  >
                    <img
                      alt="Product"
                      style={{
                        backgroundPosition: "center",
                        height: "230px",
                        width: "330px",
                        borderRadius: "10px",
                        objectFit: "cover",
                        transform: "translate(25px)",
                      }}
                      class="rounded-t-lg"
                      src={item.images[0].url}
                    />

                    <div class="p-5">
                      <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {item.name}
                      </h5>

                      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                        {item.description.substring(0, 50)}...
                      </p>
                      <Link href={`/Product/${item.id}`} class="buttons">
                        View&nbsp;<i class="ri-arrow-right-fill"></i>
                      </Link>
                    </div>
                  </motion.div>
                </>
              );
            })}
          </div>
        </motion.div>
      </ScrollAnimationWrapper>
    </>
  );
};

export default Products;
