import { LoadingScreen } from "./ui/LoadingScreen";

export const OnBoarding = () => {
  return (
    <section className="h-screen w-screen flex flex-col items-center justify-end gap-2 text-4xl text-white font-semibold">
      {/*      <LoadingScreen />       */}

      <img
        src="/BackDrop.png"
        className=" absolute top-0 left-0 w-screen h-screen -z-1"
      />
      <div className=" w-full h-90 bg-white">
            
      </div>
    </section>
  );
};
