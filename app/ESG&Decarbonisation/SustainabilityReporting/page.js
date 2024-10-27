"use client";
import Head from "next/head";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Image from "next/image";

export default function Page() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <div className="overflow-x-hidden min-h-screen bg-gray-100 py-8 px-4">
        <Head>
          <title> 		Sustainability Reporting </title>
          <meta
            name="description"
            content="Safety Integrity Level (SIL) Assessment Study"
          />
        </Head>

        <div className="max-w-5xl mx-auto bg-white p-8 shadow-lg">
          <h1 className="text-4xl font-bold text-center mb-8 text-[#0b8d7c] animate-scale-up">
          	Sustainability Reporting
          </h1>

          <Image
          src="/ESG-Decarbonisation/ESG-Sustainable Reporting.jpg"
          width="550"
          height="310"
          alt="HAZOP"
          className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center "
        
           data-aos="zoom-in-up"
            data-aos-duration="2000"
           
          />

          <section
            data-aos="fade-up"
            data-aos-duration="1000"
            className="mb-8 mt-6"
          >
        
            <p className="text-gray-700 mb-4">
              {`Every Company enhances Transparency, Accountability and Stakeholders Trust by disclosing their Organisation Environmental, Social, and Governance practises. We  M/s Aura Veritas will identify the social responsible investors, improve the risk management profile of the Organisation by providing the comprehensive Sustainability reporting via GRI, FASB, IFRS Standards and Tools.  `}
            </p>
       
          </section>

          <section data-aos="fade-up" data-aos-duration="1000" className="mb-8">


            <ul>
              <li>{`1.	Engagement of Stakeholders`}</li>
              <li>{`2.	Conduct Materiality Assessment`}</li>
              <li>{`3.	Data Collection and Analysing the data’s `}</li>
              <li>{`4.	Compiling the Report`}</li>
              <li>{`5.	Verify and Assurance `}</li>
              <li>{`6.	Communication `}</li>
              <li>{`7.	Improve and Iterate `}</li>
              
            </ul>
          </section>

   
        </div>
      </div>

      <style jsx>{`
        .animate-fade-in-slide {
          opacity: 1;
          transform: translateX(0);
          transition: opacity 0.6s ease-out, transform 0.6s ease-out;
        }

        .animate-on-scroll {
          opacity: 0;
          transform: translateX(-50px);
        }

        .animate-scale-up {
          animation: scale-up 0.8s ease-in-out forwards;
        }

        @keyframes scale-up {
          0% {
            transform: scale(0.9);
          }
          100% {
            transform: scale(1);
          }
        }
      `}</style>
    </>
  );
}
