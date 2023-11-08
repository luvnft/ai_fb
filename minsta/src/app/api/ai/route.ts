import { client } from "@gradio/client";
import { NextResponse } from "next/server";
import { NextRequest} from "next/server";


export async function GET(){
  
  const response = await fetch(
    "https://api-inference.huggingface.co/models/facebook/musicgen-small",
    {
      headers: { Authorization: "Bearer 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" },
      method: "POST",
      body: JSON.stringify("indian music"),
    }
  );

  const result = await response.blob();
	console.log("result", result);

    return new Response(JSON.stringify("successful role added"), {
        headers: {
          "Content-Type": "application/json",
        },
      });
}



