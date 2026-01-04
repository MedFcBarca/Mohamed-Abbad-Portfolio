import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";

import { Fox } from "../models";
import { Loader } from "../components";

const Contact = () => {
  return (
    <section className="relative flex lg:flex-row flex-col max-container">
      {/* LEFT */}
      <div className="flex-1 min-w-[50%] flex flex-col justify-center">
        <h1 className="head-text">Contact</h1>

        <p className="mt-6 text-lg text-black-500">
          Besoin d’un projet ou envie d’échanger ?
        </p>

        <div className="mt-10 flex flex-col gap-4 max-w-sm">
          <a
            href="mailto:med_abbad@outlook.fr"
            className="btn text-center"
          >
            ✉️ Envoyer un email
          </a>

          <a
            href="tel:0668292094"
            className="btn text-center"
          >
            📞 Appeler : 06 68 29 20 94
          </a>
        </div>
      </div>

      {/* RIGHT */}
      <div className="lg:w-1/2 w-full lg:h-auto md:h-[550px] h-[350px]">
        <Canvas
          camera={{
            position: [0, 0, 5],
            fov: 75,
            near: 0.1,
            far: 1000,
          }}
        >
          <directionalLight position={[0, 0, 1]} intensity={2.5} />
          <ambientLight intensity={1} />
          <pointLight position={[5, 10, 0]} intensity={2} />
          <spotLight
            position={[10, 10, 10]}
            angle={0.15}
            penumbra={1}
            intensity={2}
          />

          <Suspense fallback={<Loader />}>
            <Fox
              currentAnimation="idle"
              position={[0.5, 0.35, 0]}
              rotation={[12.629, -0.6, 0]}
              scale={[0.5, 0.5, 0.5]}
            />
          </Suspense>
        </Canvas>
      </div>
    </section>
  );
};

export default Contact;
