import { LoadingScreen } from "./ui/LoadingScreen";

export const OnBoarding = () => {
  return (
    <section className="h-screen w-screen flex flex-col items-center justify-end gap-2 font-semibold">
      {/*      <LoadingScreen />       */}

      <img
        src="/BackDrop.png"
        className=" absolute top-0 left-0 w-screen h-screen -z-1"
      />
      <div className=" w-full h-90 bg-white text-black flex items-center justify-center text-center">
        <div className=" p-10">
          <h1 className=" text-2xl">
            <span className=" text-primary">Pesquise</span> com precisão, decida
            com dados.
          </h1>
          <p className="font-normal">
            Coleta em campo, análise em tempo real — tudo em um só lugar.
          </p>
        </div>
        
      </div>
    </section>
  );
};
