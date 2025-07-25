// ./app/components/blog/BlogsRenderer.tsx

export type BlogSection = {
  heading: string;
  paragraphs?: string[];
  listItems?: string[];
  listType?: 'ordered' | 'unordered';
};

export type BlogData = {
  title: string;
  slug: string;
  content: BlogSection[];
  publishedAt?: string;
  updatedAt?: string;
  seo?: {
    description?: string;
    ogImage?: string;
  };
};


export function BlogsRenderer({ blog }: { blog: BlogData }) {
  return (
    <main className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">{blog.title}</h1>

      <div className="space-y-10">
        {blog.content.map((section, index) => (
          <div key={index} className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-800">
              {section.heading}
            </h2>

            {section.paragraphs?.map((para, i) => (
              <p key={i} className="text-gray-700 leading-relaxed">
                {para}
              </p>
            ))}

            {section.listItems && (
              <ul
                className={`ml-6 space-y-2 text-gray-700 ${
                  section.listType === 'ordered' ? 'list-decimal' : 'list-disc'
                }`}
              >
                {section.listItems.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </main>
  );
}
