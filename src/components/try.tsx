import { useState, useEffect } from "react";
const Probability = ({ probability }: { probability: string }) => {
  const [smile, setSmile] = useState<string>("");
  const probabilityNumber = parseInt(probability, 10);
  useEffect(() => {
    if (probabilityNumber > 80) {
      setSmile("🚀");
    } else if (probabilityNumber > 49) {
      setSmile("🔥");
    } else if (probabilityNumber > 1) {
      setSmile("🤓");
    } else {
      setSmile("💩");
    }
  }, [probabilityNumber]);
  if (probability === "-") {
    return "Замало даних";
  }

  return `${probability}% ${smile}`;
};

export default Probability;
