export type BlogPost = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  body: { heading?: string; paragraphs: string[] }[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "Clear-Communication-Turns-Good-Service-into-Great-Hospitality",
    title: "Clear Communication Turns Good Service into Great Hospitality",
    date: "2026",
    excerpt:
      "A field-focused look at how disciplined communication supports smoother service, stronger teams, and a better guest experience.",
    body: [
      {
        heading: "Production content",
        paragraphs: [
          "Insert the client-approved original article here. The public article was intentionally not copied wholesale into this starter."
        ]
      }
    ]
  },
  {
    slug: "The-New-Reality-A-Shift-to-Smarter-Back-Office-Management-for-Restaurants",
    title: "The New Reality: A Shift to Smarter Back-Office Management for Restaurants",
    date: "2025",
    excerpt:
      "Why restaurant operators are treating back-office structure, reporting, and accountability as operating strategy rather than administrative overhead.",
    body: [
      {
        heading: "Production content",
        paragraphs: [
          "Insert the client-approved original article here. Keep long-form posts in this data file or migrate them to Markdown later."
        ]
      }
    ]
  },
  {
    slug: "Building-and-Keeping-a-Strong-Team-in-2025",
    title: "Building and Keeping a Strong Team in 2025",
    date: "November 2025",
    excerpt:
      "A perspective on restaurant staffing, leadership, retention, structure, and the systems that help teams stay effective.",
    body: [
      {
        heading: "Production content",
        paragraphs: [
          "Insert the client-approved original article here."
        ]
      }
    ]
  }
];
