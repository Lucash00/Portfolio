import React from "react";
import { ghostCodeColumns } from "./ghostCodeSnippets";
import "./ghostCode.css";

function CodeLine({ tokens }) {
  return (
    <div className="gc-line">
      {tokens.map((token, index) => (
        <span key={index} className={`gc-${token.type}`}>
          {token.text}
        </span>
      ))}
    </div>
  );
}

function CodeColumn({ lines, durationSeconds, offset }) {
  const loopLines = [...lines, ...lines];

  return (
    <div
      className="gc-column"
      style={{
        animationDuration: `${durationSeconds}s`,
        animationDelay: `${offset}s`,
      }}
      aria-hidden="true"
    >
      {loopLines.map((tokens, index) => (
        <CodeLine key={index} tokens={tokens} />
      ))}
    </div>
  );
}

export default function GhostCodeBackground() {
  const durations = [110];

  return (
    <div className="ghost-code-root" aria-hidden="true">
      <div className="ghost-code-mask">
        <div className="ghost-code-columns">
          {ghostCodeColumns.map((lines, index) => (
            <CodeColumn
              key={index}
              lines={lines}
              durationSeconds={durations[index]}
              offset={index * 7}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
