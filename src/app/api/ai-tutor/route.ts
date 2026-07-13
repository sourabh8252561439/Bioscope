import { NextRequest, NextResponse } from "next/server";
import ZAI from "z-ai-web-dev-sdk";
import { bodySystems } from "@/lib/anatomy-data";

export const runtime = "nodejs";
export const maxDuration = 60;

type ChatMsg = { role: "user" | "assistant"; content: string };

const MODE_PROMPTS: Record<string, string> = {
  student:
    "You are an AI anatomy tutor for medical and biology students. Explain structures clearly with simple analogies, define Latin/Greek terms, and encourage understanding over memorization. Use short paragraphs and occasional bullet points.",
  doctor:
    "You are a clinical anatomy assistant for physicians and surgeons. Provide precise, clinically relevant detail: innervation (root values), arterial supply with branches, surgical landmarks, common pathologies and their management. Use precise medical terminology.",
  research:
    "You are a research-grade biomedical assistant. Cite mechanisms, recent findings, histological and molecular detail where relevant. Reference embryological origins and anatomical variations. Be rigorous and concise.",
  simplified:
    "You are a friendly guide explaining the human body to a curious beginner. Use everyday language, vivid analogies, and avoid jargon. Keep it warm, clear, and inspiring.",
};

function buildSystemPrompt(mode: string, systemId?: string, organId?: string) {
  const base = MODE_PROMPTS[mode] ?? MODE_PROMPTS.student;
  let ctx = "";
  if (systemId) {
    const sys = bodySystems.find((s) => s.id === systemId);
    if (sys) {
      ctx += `\n\nThe user is currently exploring the ${sys.name} (${sys.latinName}). ${sys.description}`;
      if (organId) {
        const organ = sys.organs.find((o) => o.id === organId);
        if (organ) {
          ctx += `\nThe user has selected the organ: ${organ.name} (${organ.latinName}).\nOverview: ${organ.overview}\nLocation: ${organ.location}\nFunction: ${organ.function}\nBlood supply: ${organ.bloodSupply}\nNerve supply: ${organ.nerveSupply}\nClinical importance: ${organ.clinicalImportance}`;
        }
      }
    }
  }
  return `${base}${ctx}

Guidelines:
- Stay scientifically accurate. If unsure, say so rather than invent facts.
- Keep answers focused and readable (under ~250 words unless asked for depth).
- You may use Markdown: **bold** for key terms, bullet lists for steps/structures.
- Never give personalized medical diagnosis or treatment advice. For clinical questions, frame as educational.
- When the user asks about a structure you have context for, ground your answer in the provided organ data.`;
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const {
      message,
      mode = "student",
      systemId,
      organId,
      history = [],
    }: {
      message: string;
      mode?: string;
      systemId?: string;
      organId?: string;
      history?: ChatMsg[];
    } = body;

    if (!message || typeof message !== "string") {
      return NextResponse.json(
        { error: "Message is required." },
        { status: 400 }
      );
    }

    const zai = await ZAI.create();
    const systemPrompt = buildSystemPrompt(mode, systemId, organId);

    const recent = (history as ChatMsg[]).slice(-8);

    const completion = await zai.chat.completions.create({
      messages: [
        { role: "assistant", content: systemPrompt },
        ...recent.map((m) => ({
          role: m.role,
          content: m.content,
        })),
        { role: "user", content: message },
      ],
      thinking: { type: "disabled" },
    });

    const reply = completion.choices[0]?.message?.content?.trim();

    if (!reply) {
      return NextResponse.json(
        { error: "The assistant returned an empty response. Please try again." },
        { status: 502 }
      );
    }

    return NextResponse.json({ reply });
  } catch (err) {
    console.error("[ai-tutor] error:", err);
    return NextResponse.json(
      {
        error:
          "The medical assistant is temporarily unavailable. Please retry in a moment.",
      },
      { status: 500 }
    );
  }
}
