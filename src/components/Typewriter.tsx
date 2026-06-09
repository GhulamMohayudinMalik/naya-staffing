import React from "react";

interface TypewriterProps {
  children: React.ReactNode;
  speed?: number; // delay per character/word in ms
  baseDelay?: number; // initial offset delay in ms
  mode?: "word" | "letter";
}

export function Typewriter({
  children,
  speed,
  baseDelay = 100,
  mode = "letter",
}: TypewriterProps) {
  const actualSpeed = speed ?? (mode === "word" ? 80 : 25);
  let globalIndex = 0;

  const processNode = (node: React.ReactNode): React.ReactNode => {
    if (node === null || node === undefined) {
      return null;
    }

    // Handle plain text and numbers
    if (typeof node === "string" || typeof node === "number") {
      const text = String(node);
      const words = text.split(/(\s+)/); // keep whitespace to preserve layout gaps
      return words.map((word, wIdx) => {
        if (word.trim() === "") {
          return word; // return spaces as plain text
        }

        if (mode === "word") {
          const delay = baseDelay + globalIndex * actualSpeed;
          globalIndex++;
          return (
            <span
              key={wIdx}
              className="inline-block animate-reveal-word"
              style={{
                opacity: 0,
                animationDelay: `${delay}ms`,
                animationFillMode: "both",
              }}
            >
              {word}
            </span>
          );
        } else {
          // letter mode: wrap the word in an inline-block whitespace-nowrap container
          // to prevent wrapping in the middle of words on mobile viewports.
          const letters = word.split("");
          return (
            <span key={wIdx} className="inline-block whitespace-nowrap">
              {letters.map((letter, lIdx) => {
                const delay = baseDelay + globalIndex * actualSpeed;
                globalIndex++;
                return (
                  <span
                    key={lIdx}
                    className="inline-block animate-reveal-letter"
                    style={{
                      opacity: 0,
                      animationDelay: `${delay}ms`,
                      animationFillMode: "both",
                    }}
                  >
                    {letter}
                  </span>
                );
              })}
            </span>
          );
        }
      });
    }

    // Recursively process children of valid React Elements
    if (React.isValidElement(node)) {
      const element = node as React.ReactElement<any>;

      // Check if the element contains background-clip: text styles (like text-shimmer, bg-clip-text, or text-transparent).
      // We must animate it as a single unit to prevent breaking the webkit-background-clip behavior.
      if (
        element.props &&
        element.props.className &&
        (element.props.className.includes("text-shimmer") ||
          element.props.className.includes("bg-clip-text") ||
          element.props.className.includes("text-transparent"))
      ) {
        const delay = baseDelay + globalIndex * actualSpeed;
        // Increment globalIndex to account for the word group delay
        globalIndex += 4;
        return (
          <span
            key={globalIndex}
            className="inline-block animate-reveal-word"
            style={{
              opacity: 0,
              animationDelay: `${delay}ms`,
              animationFillMode: "both",
            }}
          >
            {element}
          </span>
        );
      }

      if (element.props && "children" in element.props && element.props.children !== undefined) {
        const processedChildren = React.Children.map(
          element.props.children,
          processNode
        );
        return React.cloneElement(element, {}, processedChildren);
      }
      return element;
    }

    return node;
  };

  const result = React.Children.map(children, processNode);
  return <>{result}</>;
}
