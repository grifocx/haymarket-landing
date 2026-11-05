import type { ReactNode } from 'react';

// Minimal renderer for the markdown subset used by content/answers/*.md:
// blank-line-separated blocks, "- " bullet lists, **bold** inline text.
function renderInline(text: string, keyPrefix: string): ReactNode[] {
  const parts = text.split(/(\*\*[^*]+\*\*)/g).filter((p) => p.length > 0);
  return parts.map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={`${keyPrefix}-${i}`}>{part.slice(2, -2)}</strong>;
    }
    return <span key={`${keyPrefix}-${i}`}>{part}</span>;
  });
}

export function renderMarkdownBody(body: string): ReactNode[] {
  const blocks = body.split(/\r?\n\r?\n/).filter((b) => b.trim().length > 0);

  return blocks.map((block, i) => {
    const lines = block.split(/\r?\n/);
    if (lines.every((l) => l.trim().startsWith('- '))) {
      const items = lines.map((l) => l.trim().slice(2));
      return (
        <ul key={i} className="list-disc pl-6 space-y-2 text-gray-600 leading-relaxed mb-6">
          {items.map((item, j) => (
            <li key={j}>{renderInline(item, `${i}-${j}`)}</li>
          ))}
        </ul>
      );
    }
    return (
      <p key={i} className="text-gray-600 leading-relaxed mb-6">
        {renderInline(block.trim(), String(i))}
      </p>
    );
  });
}
