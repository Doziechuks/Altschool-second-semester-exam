export function Seo({ title, metaDescription }) {
  title = title || "Default title";
  metaDescription = metaDescription || "Default description";

  document.title = title;

  const metaTag = document.querySelector('meta[name="description"]');
  if (metaTag) {
    metaTag.setAttribute("content", metaDescription);
  }
}
