import AiSummarizer from "@/components/AiSummarizer";
import Board from "@/components/Board";
import Gradient from "@/components/Gradient";
import Header from "@/components/Header";

export default function Home() {
  return (
    <main>
      <Gradient />
      <Header />
      <AiSummarizer />
      <Board />
    </main>
  );
}
