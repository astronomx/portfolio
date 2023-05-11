import React, { Suspense } from "react";
import Fade from 'react-reveal/Fade';
import Head from "next/head";

import { Canvas } from '@react-three/fiber';
import { OrbitControls } from "@react-three/drei";

import Box from '@/components/Box';
import SphereComponent from "@/components/SphereComponent";
import Intro from "@/components/Intro";
import AnimatedSphere from "@/components/AnimatedSphere";
import TorusKnot from "@/components/TorusKnot";


export default function Home() {
  return (
    <>
      <div className="min-h-screen bg-[url('../../images/landingpicture.jpg')] bg-fixed bg-no-repeat bg-cover bg-center">
        <Head>
          <title>Quentin Valen</title>
          <link rel="icon" href="public/images/favicon.ico" />
        </Head>

        <div className="flex flex-row justify-center items-center">
          <div className="absolute h-[17vh] z-10 mr-16 mb-60">
            <Canvas>
              <ambientLight intensity={0.5} />
              <directionalLight position={[-2, 5, 2]} intensity={1} />
              <Suspense fallback={null}>
                <SphereComponent />
              </Suspense>
            </Canvas>
          </div>

          <div className="absolute h-[15vh] z-10 mr-36 mb-72">
            <Canvas>
              <ambientLight intensity={0.5} />
              <directionalLight position={[-2, 5, 2]} intensity={1} />
              <Suspense fallback={null}>
                <SphereComponent />
              </Suspense>
            </Canvas>
          </div>

          <div className="flex flex-row justify-between items-center ml-64">
            <div className="absolute h-[20vh] z-10 ml-96 mb-48">
              <Canvas>
                <ambientLight intensity={0.5} />
                <directionalLight position={[-2, 5, 2]} intensity={1} />
                <Suspense fallback={null}>
                  <SphereComponent />
                </Suspense>
              </Canvas>
            </div>


            <div className="flex flex-col">
              
              <h1 className="text-white text-7xl relative z-0">HI, I AM{" "}<span className="bg-gradient-to-r from-[#d540ba] via-[#86A8E7] to-[#5FFBF1] inline-block text-transparent bg-clip-text">QUENTIN</span></h1>

              <div className="w-[20vw]">
                <div className="z-0 relative">
                  <Intro />
                </div>
              </div>
            </div>

            <div className="h-[50vh] w-[53vw]">
              <Canvas>
                <OrbitControls enableZoom={false} />
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} />
                <Suspense fallback={null}>
                  <AnimatedSphere />
                </Suspense>
              </Canvas>
            </div>
          </div>
        </div>
      </div>

      <div className="min-h-screen bg-[url('../../images/pinkmountain.jpg')] bg-fixed bg-no-repeat bg-cover bg-center">
        <Fade bottom duration={2000}>
          <div className="flex justify-center">
            <div className="mt-5">
              <h1 className="text-white text-7xl mt-10">PERSONAL INFO</h1>
            </div>
          </div>
        </Fade>
      </div>
    </>
  );
}


{/* <div className="flex h-64">
  <Canvas className="sphere">
    <OrbitControls enableZoom={false} />
    <ambientLight intensity={0.5} />
    <directionalLight position={[-2, 5, 2]} intensity={1} />
    <Suspense fallback={null}>
      <AnimatedSphere />
    </Suspense>
  </Canvas>
</div> */}
