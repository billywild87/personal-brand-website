"use client";

import React from "react";

const codeContent = `// developer.ts
interface Developer {
  name: string;
  role: string;
  experience: number;
  stack: string[];
  passions: string[];
}

const frederic: Developer = {
  name: "Frédéric Denis",
  role: "Senior Frontend Developer",
  experience: 8,
  stack: [
    "React",
    "TypeScript",
    "Redux Toolkit",
    "React Query",
    "Playwright",
    "Node.js",
  ],
  passions: [
    "Architecture Front",
    "Qualité Logicielle",
    "Developer Experience",
    "Performance",
  ],
};

export default frederic;`;

// --- Tokenizer (hors render) ---
type TokenType =
  | "comment"
  | "keyword"
  | "type"
  | "property"
  | "string"
  | "number"
  | "punctuation"
  | "identifier"
  | "text";

type Token = { type: TokenType; value: string };

const KEYWORDS = new Set(["interface", "const", "export", "default"]);
const TYPES = new Set(["string", "number", "Developer"]);
const PROPERTIES = new Set(["name", "role", "experience", "stack", "passions"]);

const RE_STRING = /^"[^"]*"/;
const RE_NUMBER = /^\d+/;
const RE_IDENT = /^[a-zA-Z_][a-zA-Z0-9_]*/;
const RE_PUNCT = /^[\[\]{}():;,=]/;

function tokenize(line: string): Token[] {
  if (line.startsWith("//")) return [{ type: "comment", value: line }];

  const tokens: Token[] = [];
  let i = 0;

  while (i < line.length) {
    const rest = line.slice(i);

    const str = rest.match(RE_STRING)?.[0];
    if (str) {
      tokens.push({ type: "string", value: str });
      i += str.length;
      continue;
    }

    const num = rest.match(RE_NUMBER)?.[0];
    if (num) {
      tokens.push({ type: "number", value: num });
      i += num.length;
      continue;
    }

    const ident = rest.match(RE_IDENT)?.[0];
    if (ident) {
      if (KEYWORDS.has(ident)) tokens.push({ type: "keyword", value: ident });
      else if (TYPES.has(ident)) tokens.push({ type: "type", value: ident });
      else if (PROPERTIES.has(ident))
        tokens.push({ type: "property", value: ident });
      else tokens.push({ type: "identifier", value: ident });

      i += ident.length;
      continue;
    }

    const punct = rest.match(RE_PUNCT)?.[0];
    if (punct) {
      tokens.push({ type: "punctuation", value: punct });
      i += punct.length;
      continue;
    }

    tokens.push({ type: "text", value: line[i] });
    i += 1;
  }

  return tokens;
}

const TOKEN_CLASS: Record<TokenType, string> = {
  comment: "text-zinc-500 italic",
  keyword: "text-secondary-400",
  type: "text-primary",
  string: "text-emerald-400",
  number: "text-amber-400",
  property: "text-blue-300",
  punctuation: "text-zinc-500",
  identifier: "text-zinc-100",
  text: "text-zinc-300",
};

function CodeLine({ line }: { line: string }) {
  const tokens = tokenize(line);

  return (
    <span>
      {tokens.map((t, idx) => (
        <span key={idx} className={TOKEN_CLASS[t.type]}>
          {t.value}
        </span>
      ))}
    </span>
  );
}

export default function CodeEditor() {
  const lines = React.useMemo(() => codeContent.split("\n"), []);

  return (
    <div className="group relative h-full">
      <div className="absolute -inset-0.5 rounded-xl bg-linear-to-br from-primary-500/20 via-secondary/20 to-primary-500/20 opacity-50 blur-sm transition-opacity duration-500 group-hover:opacity-75" />
      <div className="absolute -inset-1 rounded-xl bg-linear-to-br from-primary-500/10 to-secondary/10 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-50" />

      <div className="relative flex h-full flex-col overflow-hidden rounded-xl border border-zinc-700/50 bg-zinc-900/95 shadow-2xl backdrop-blur-sm">
        <div className="flex items-center justify-between border-b border-zinc-700/50 bg-gradient-to-r from-zinc-800/80 to-zinc-800/50 px-4 py-3">
          <div className="flex items-center gap-3">
            <div className="flex gap-2">
              <div className="h-3 w-3 rounded-full bg-zinc-600 transition-colors hover:bg-red-500" />
              <div className="h-3 w-3 rounded-full bg-zinc-600 transition-colors hover:bg-yellow-500" />
              <div className="h-3 w-3 rounded-full bg-zinc-600 transition-colors hover:bg-green-500" />
            </div>
            <div className="h-4 w-px bg-zinc-700" />
            <div className="flex items-center gap-2">
              <svg
                className="h-4 w-4 text-primary"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M3 3h18v18H3V3zm16.525 13.707c-.131-.821-.666-1.511-2.252-2.155-.552-.259-1.165-.438-1.349-.854-.068-.248-.078-.382-.034-.529.113-.484.687-.629 1.137-.495.293.086.567.318.727.631.769-.477.769-.477 1.316-.79-.2-.307-.304-.462-.439-.534-.56-.59-1.313-.814-2.529-.707-.248.034-.483.103-.725.211-1.112.491-1.4 1.517-1.043 2.407.386.962 1.899 1.485 2.635 1.814.72.346.89.689.775 1.186-.118.509-.544.786-1.258.72a2.152 2.152 0 0 1-1.401-.795l-1.267.735c.289.527.628.78 1.138 1.02 1.633.707 4.047.506 4.574-1.164.023-.072.043-.147.058-.219h.002l.001-.001c.169-.753-.003-1.583-.774-2.13l-.025-.017zM8.078 16.008H6.035v-4.45l-1.717.003v-1.614c1.09-.005 2.148-.04 2.814-1.098l1.511.006v7.148z" />
              </svg>
              <span className="font-mono text-xs font-medium text-zinc-400">
                developer.ts
              </span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="rounded-full bg-primary-500/10 px-2 py-0.5 font-mono text-[10px] text-primary">
              TypeScript
            </span>
          </div>
        </div>

        <div className="relative flex-1 overflow-auto">
          <div className="absolute inset-y-0 left-0 w-12 border-r border-zinc-800 bg-zinc-900/50" />
          <pre className="relative p-0 font-mono text-xs leading-6 sm:text-sm sm:leading-7">
            {lines.map((line, i) => (
              <div
                key={i}
                className="group/line flex transition-colors hover:bg-zinc-800/30"
              >
                <span className="w-12 shrink-0 pr-3 text-right text-zinc-600 transition-colors select-none group-hover/line:text-zinc-500">
                  {i + 1}
                </span>
                <span className="w-px bg-zinc-800" />
                <code className="flex-1 pl-4">
                  <CodeLine line={line} />
                </code>
              </div>
            ))}
          </pre>
        </div>

        <div className="flex items-center justify-between border-t border-zinc-700/50 bg-zinc-800/30 px-4 py-2">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-[10px] text-zinc-500">
              <span className="h-1.5 w-1.5 rounded-full bg-primary-500" />
              UTF-8
            </span>
            <span className="text-[10px] text-zinc-500">LF</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[10px] text-zinc-500">
              {lines.length} lines
            </span>
            <span className="text-zinc-700">•</span>
            <span className="text-[10px] text-zinc-500">Ln 1, Col 1</span>
          </div>
        </div>
      </div>
    </div>
  );
}
