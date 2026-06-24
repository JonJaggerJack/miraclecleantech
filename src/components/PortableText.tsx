import type { ReactNode } from 'react';

// Rendu minimal du « texte enrichi » (Portable Text) de Sanity :
// paragraphes, titres, citations, gras/italique et images dans le corps.
type Span = { _type?: string; _key?: string; text?: string; marks?: string[] };

export type PortableBlock = {
  _type?: string;
  _key?: string;
  style?: string;
  children?: Span[];
  url?: string;
  alt?: string;
  caption?: string;
};

function renderSpan(span: Span, i: number) {
  let node: ReactNode = span.text ?? '';
  const marks = span.marks ?? [];
  if (marks.includes('em')) node = <em>{node}</em>;
  if (marks.includes('strong')) node = <strong>{node}</strong>;
  return <span key={span._key ?? i}>{node}</span>;
}

function Block({ block }: { block: PortableBlock }) {
  if (block._type === 'image' && block.url) {
    return (
      <figure className="my-8">
        <img src={block.url} alt={block.alt ?? ''} className="w-full rounded-2xl" />
        {block.caption && (
          <figcaption className="mt-2 text-center text-sm text-gray-400">{block.caption}</figcaption>
        )}
      </figure>
    );
  }

  const children = (block.children ?? []).map(renderSpan);
  switch (block.style) {
    case 'h2':
      return <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-3">{children}</h2>;
    case 'h3':
      return <h3 className="text-xl font-bold text-gray-900 mt-6 mb-2">{children}</h3>;
    case 'blockquote':
      return (
        <blockquote className="border-l-4 border-green-500 pl-4 italic text-gray-600 my-4">
          {children}
        </blockquote>
      );
    default:
      return (
        <p className="text-gray-600 leading-relaxed mb-4 whitespace-pre-line text-base">{children}</p>
      );
  }
}

export default function PortableText({ value }: { value: PortableBlock[] }) {
  return <>{value.map((block, i) => <Block key={block._key ?? i} block={block} />)}</>;
}
