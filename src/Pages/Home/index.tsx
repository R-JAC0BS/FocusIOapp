import React, { useEffect, useState } from "react";
import Button from "../../components/Button";

const HomeCounter = () => {
  const [timeLeft, setTimeLeft] = useState(25 * 60); // 25 minutos
  const [isRunning, setIsRunning] = useState(false);

  // Formata o tempo em MM:SS
  const formatTime = (seconds: number) => {
    const min = Math.floor(seconds / 60);
    const sec = seconds % 60;
    return `${min.toString().padStart(2, "0")}:${sec.toString().padStart(2, "0")}`;
  };

  // Lógica do contador
  useEffect(() => {
    let timer: NodeJS.Timeout | null = null;

    if (isRunning && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    }

    if (timeLeft === 0) {
      setIsRunning(false);
    }

    return () => {
      if (timer) clearInterval(timer);
    };
  }, [isRunning, timeLeft]);

  // Ações
  const handleStartPause = () => setIsRunning((prev) => !prev);
  const handleReset = () => {
    setIsRunning(false);
    setTimeLeft(25 * 60);
  };

  return (
    <div className="flex flex-col items-center justify-center gap-5">
      <h1 className="font-bold text-4xl">Sessão de foco</h1>
      <h2 className="text-[#989FAB] text-center">
        Após apertar o play o app Focus irá bloquear aplicativos selecionados
      </h2>

      <section>
        <div className="text-8xl font-semibold">
          {formatTime(timeLeft)}
        </div>
      </section>

      <div className="flex gap-3">
        <Button variant="default" onClick={handleStartPause}>
          {isRunning ? "Pausar" : "Iniciar"}
        </Button>
     
      </div>
    </div>
  );
};

export default HomeCounter;
