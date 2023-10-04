"use client";


import { UserCircleIcon } from "@heroicons/react/20/solid";
import fetchSuggestion from "@/lib/fetchSuggestion";
import useBoardStore from "@/store/BoardStore";
import React, { useEffect, useState } from "react";

function AiSummarizer() {
  const { board } = useBoardStore();
  const [loading, setLoading] = useState<boolean>(false);
  const [suggestion, setSuggestion] = useState<string>("");

  // useEffect(() => {
  //   if (board.columns.size === 0) return;
  //   setLoading(true);
  //   const fetchSuggestionFunc = async () => {
  //     const suggestion = await fetchSuggestion(board);
  //     setSuggestion(suggestion);
  //   };

  //   fetchSuggestionFunc();
  // }, [board]);

  return (
    <div className='flex justify-center md:py-5 '>
      <p className='flex items-center shadow-xl rounded-xl p-3 bg-white animate-pulse'>
        <UserCircleIcon width={30} className='mx-3' color='#0051D1' />
        AI is summarizing list of your tasks...
      </p>
    </div>
  );
}

export default AiSummarizer;
