// Requêtes GROQ. L'image est résolue en URL absolue pour rester compatible avec
// le rendu actuel (chaîne d'URL), qu'on uploade dans Sanity ou qu'on colle un lien.

export const BLOG_LIST_QUERY = `*[_type == "blogPost"] | order(coalesce(order, 0) asc, _createdAt desc){
  "id": _id,
  "slug": slug.current,
  title, excerpt, content, author, date, category, readTime,
  "image": coalesce(image.asset->url, imageUrl),
  tags
}`;

export const BLOG_DETAIL_QUERY = `*[_type == "blogPost" && slug.current == $slug][0]{
  "id": _id,
  "slug": slug.current,
  title, excerpt, content, author, date, category, readTime,
  "image": coalesce(image.asset->url, imageUrl),
  tags,
  body[]{
    ...,
    _type == "image" => { "url": asset->url, "alt": alt, "caption": caption }
  }
}`;

export const ACTIONS_QUERY = `*[_type == "action"] | order(coalesce(order, 0) asc){
  "id": _id,
  name, category, description, benefits,
  "image": coalesce(image.asset->url, imageUrl)
}`;

export const SITE_SETTINGS_QUERY = `*[_type == "siteSettings"][0]{
  brandName, tagline, email, phone, location
}`;
