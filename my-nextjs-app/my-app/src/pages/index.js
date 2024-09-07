import Image from "next/image";
import localFont from "next/font/local";
import Head from "next/head";
import { useState, useEffect, useRef } from "react";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Home() {
  const [currentDiv, setCurrentDiv] = useState(0);
  const intervalRef = useRef(null);

  const resetInterval = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    intervalRef.current = setInterval(() => {
      setCurrentDiv((prevDiv) => (prevDiv + 1) % 6);
    }, 2000);
  };

  const handleDocumentClick = () => {
    resetInterval();
    setCurrentDiv((prevDiv) => (prevDiv + 1) % 6);
  };

  const handleKeyDown = (event) => {
    resetInterval();
    if (event.key === 'ArrowRight') {
      setCurrentDiv((prevDiv) => (prevDiv + 1) % 6);
    } else if (event.key === 'ArrowLeft') {
      setCurrentDiv((prevDiv) => (prevDiv - 1 + 6) % 6);
    }
  };

  useEffect(() => {
    resetInterval();
    document.addEventListener('click', handleDocumentClick);
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('click', handleDocumentClick);
      window.removeEventListener('keydown', handleKeyDown);
      clearInterval(intervalRef.current);
    };
  }, []);

  return (

    <div className={`${geistSans.variable} ${geistMono.variable} `}>
      <Head>
        <title>CirclePe</title>
      </Head>
      <main className="page">
        <div className={`page-1 ${currentDiv === 0 ? 'visible' : 'hidden'}`}>
          <div className="circle-1"></div>
          <div className="container-1">
            <div className="line-1">
              <p className="how">How does it
                <span className="work"> Work </span>
                <span className="mark">?</span>
              </p>
            </div>
            <div className="line"></div>
            <div className="line-2">
              <p>We make it possible in a quick and easy few steps process, takes max 5 mins</p>
            </div>
          </div>
          <Image
            className="mobile-1"
            src="/mobile1.svg"
            alt="Mobile-1"
            width={180}
            height={38}
          />
        </div>
        <div className={`page-2 ${currentDiv === 1 ? 'visible' : 'hidden'}`}>
          <div className="circle-2 "></div>
          <div className="container-2">
            <div className="step1">
              <p className="how">Step
                <span className="work"> 1</span>
              </p>
            </div>
            <div className="line"></div>
            <div className="step1-list">
              <ul>
                <li className="text selected">Tenant selects the property</li>
                <li className="text">Tenant selects flexible rent tenure & corresponding amount</li>
              </ul>
            </div>
          </div>
          <Image className="step1a "
            src="/step1a.svg"
            alt="Step1-a Arrow"
            width={2}
            height={5}
          />
          <Image
            className="mobile-2 "
            src="/mobile2.svg"
            alt="Mobile-2"
            width={180}
            height={38}
          />

        </div>
        <div className={`page-3 ${currentDiv === 2 ? 'visible' : 'hidden'}`}>
          <div className="circle-2 "></div>
          <div className="container-2 ">
            <div className="step1">
              <p className="how">Step
                <span className="work"> 1</span>
              </p>
            </div>
            <div className="line"></div>
            <div className="step1-list">
              <ul>
                <li className="text">Tenant selects the property</li>
                <li className="text selected">Tenant selects flexible rent tenure & corresponding amount</li>
              </ul>
            </div>
          </div>
          <Image className="step1b"
            src="/step1b.svg"
            alt="Step1-b Arrow"
            width={2}
            height={5}
          />
          <Image
            className="mobile-3 "
            src="/mobile3.svg"
            alt="Mobile-3"
            width={180}
            height={38}
          />
        </div>
        <div className={`page-4 ${currentDiv === 3 ? 'visible' : 'hidden'}`}>
          <div className="circle-2 "></div>
          <div className="container-4 ">
            <div className="step2">
              <p className="step">Step
                <span className="work"> 2</span>
              </p>
            </div>
            <div className="line"></div>
            <div className="step1-list">
              <ul>
                <li className="selected2">Tenant selects Pay with Circle enabling :</li>
                <div className="step2-list">
                  <li >Zero security deposit move-in</li>
                  <li >Reduced rent offer</li>
                  <li >3 months salary cover</li>
                </div>

              </ul>
            </div>
          </div>
          <Image className="step2a "
            src="/step2.svg"
            alt="Step2 Arrow"
            width={2}
            height={5}
          />
          <Image
            className="mobile-4 "
            src="/mobile4.svg"
            alt="Mobile-4"
            width={180}
            height={38}
          />


        </div>
        <div className={`page-5 ${currentDiv === 4 ? 'visible' : 'hidden'}`}>
          <div className="circle-3 "></div>
          <div className="container-5 ">
            <div className="step2">
              <p className="step">Step
                <span className="work"> 3</span>
              </p>
            </div>
            <div className="line"></div>
            <div className="step3-list">
              <ul>
                <li className="selected2">Smooth Onboarding for the Tenant begins</li>
              </ul>
            </div>
          </div>
          <Image className="step3a "
            src="/step3a.svg"
            alt="Step3 Arrow"
            width={2}
            height={5}
          />
          <Image
            className="mobile-5 "
            src="/mobile5.svg"
            alt="Mobile-5"
            width={180}
            height={38}
          />


        </div>

        <div className={`page-6 ${currentDiv === 5 ? 'visible' : 'hidden'}`}>
          <div className="circle-4"></div>
          <div className="container-4 ">
            <div className="step2">
              <p className="step">Step
                <span className="work"> 4</span>
              </p>
            </div>
            <div className="line"></div>
            <div className="step1-list step-margin">
              <ul>
                <li className="selected2">Tenant gets approved to move-in :</li>
                <div className="step4-list">
                  <li >Gets Zero-security deposit approval</li>
                  <li >Zero cost EMI = Monthly Rent</li>
                </div>

              </ul>
            </div>
          </div>
          <Image className="step4 "
            src="/step4.svg"
            alt="Step4 Arrow"
            width={2}
            height={5}
          />
          <Image
            className="mobile-6 "
            src="/mobile6.svg"
            alt="Mobile-6"
            width={180}
            height={38}
          />

        </div>

        <div className="box">
        </div>
        <div className="bar">
          <div className="slider"></div>
          <div className="ball"></div>
        </div>

      </main>
    </div>

  );
}
