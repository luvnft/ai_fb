"use client";

import { DynamicGrid } from "@/components/DynamicGrid";
import React, { useEffect, useRef, useState } from "react";

import { useFirstToken } from "@/hooks/useFirstToken";
import { FeedScroll } from "./feed/feedscroll";
import { MemoizedImageThumb } from "./feed/ImageThumb";
import { useBlockedNfts } from "@/hooks/useBlockedNfts";

export const HomePage = () => {

  
  const audioRef = useRef(null);
  const audioBlob = useRef(null);
  const [musicInput, setMusicInput] = useState("");



  const { newToken, tokensFetched, isLoading } = useFirstToken();

  const { blockedNfts } = useBlockedNfts();

  const firstTokenisBlocked =
    newToken?.metadata_id && blockedNfts?.includes(newToken?.metadata_id);

  useEffect(() => {
    let reloadTimeout: any;

    if (!newToken?.media) {
      reloadTimeout = setTimeout(() => {
        // Reload the page after 4 minutes (120,000 milliseconds)
        window.location.reload();
      }, 360000); //4 minutes in milliseconds
    }

    return () => {
      // Clear the timeout if the component unmounts
      clearTimeout(reloadTimeout);
    };
  }, [newToken]);


  const [audioUrl, setAudioUrl] = useState(null);

  async function query(data) {
    console.log("Working on it", data);
    try {
      const response = await fetch(
        "https://api-inference.huggingface.co/models/facebook/musicgen-small",
        {
          headers: { Authorization: "Bearer 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" },
          method: "POST",
          body: JSON.stringify(data),
        }
        
      );
        const result = await response.blob();
        console.log("Response: ", result);
        const url = URL.createObjectURL(result);
        console.log("url: ", url);
        audioBlob.current = url;
        setAudioUrl(url);
        return result;
      }
      catch(e){
        console.log("Error: ", e);
      }
  }


  return (
    <>


      <main className="px-4 lg:px-12 mx-auto flex flex-col items-center justify-center space-y-4 ">
        <DynamicGrid mdCols={2} nColsXl={4} nColsXXl={6}>
          {!newToken?.media || isLoading ? (
            <div
              className="md:aspect-square rounded overflow-x-hidden cursor-pointer sm:w-full md:w-72 h-72 xl:w-80 xl:h-80 relative"
              key={1}
            >
              <div className="rounded animate-pulse w-full h-full bg-gray-600 dark:bg-gray-800" />
            </div>
          ) : !firstTokenisBlocked ||
            typeof firstTokenisBlocked == "undefined" ? (
            <MemoizedImageThumb
              key={newToken?.media}
              token={newToken}
              index={1}
            />
          ) : null}

          {tokensFetched?.length > 0 &&
            tokensFetched.map((token: any, index: number) => {
              if (!!blockedNfts && blockedNfts.includes(token?.metadata_id)) {
                return null;
              }

              return (
                <MemoizedImageThumb
                  key={token?.metadata_id}
                  token={token}
                  index={index}
                />
              );
            })}

          <FeedScroll blockedNfts={blockedNfts} />
        </DynamicGrid>
    


        <h1>GENERATE AI MUSIC</h1>
        <label >ENTER PROMPT</label>
        <input type="text" placeholder="AI prompt" value={musicInput} onChange={(e) => setMusicInput(e.target.value)} />
        <button onClick={() => query(musicInput)}>Generate Music</button>
          
        {
          audioBlob.current ? 
          <>
        
        <audio controls>
          <source src={audioUrl} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio> 


            </>: 
            <>
            </>
        }

    
      </main>
    </>
  );
};



  
