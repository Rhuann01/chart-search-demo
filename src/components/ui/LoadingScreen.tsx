import { useEffect, useState } from "react";

export const LoadingScreen = () => {
  const [visible, setVisible] = useState(true);
  const [count, setCount] = useState(0);
  const TIME = 20;

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => {
        const next = prev + 5;
        if (next >= TIME) {
          clearInterval(interval);
        }
        return next;
      });
    }, 1000);
  }, []);

  useEffect(() => {
    if (count >= TIME) {
      const timeout = setTimeout(() => {
        setVisible(false);
      }, 500);

      return () => clearTimeout(timeout);
    }
  }, [count]);

  return (
    <section
      className={`bg-neutral-900 absolute gap-5 flex-col transition-opacity left-0 top-0 ${visible ? "opacity-100" : "opacity-0"} h-screen w-screen flex items-center justify-center`}
    >
      <img src="LogoIcon.svg" className="size-10" />

      <div className=" w-30 h-2.5 rounded-2xl bg-white flex overflow-hidden items-center justify-start">
        <div
          className={`h-full bg-primary transition-all`}
          style={{ width: `${(count / TIME) * 100}%` }}
        ></div>
      </div>
    </section>
  );
};
