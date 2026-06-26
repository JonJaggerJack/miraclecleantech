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
  brandName, tagline, email, phone, whatsapp, location, linkedin, facebook, instagram
}`;

export const HOME_QUERY = `*[_type == "homePage"][0]{
  heroTitleStart, heroTitleHighlight, heroIntro,
  missionKicker, missionTitle, missionIntro,
  missions[]{ title, desc },
  quoteText, quoteAttribution,
  actionsKicker, actionsTitle, actionsIntro,
  ctaTitle, ctaText
}`;

export const ABOUT_QUERY = `*[_type == "aboutPage"][0]{
  heroIntro, whoTitle, whoParagraphs,
  objectivesTitle, objectives,
  visionTitle, visionText, visionBadgeTitle, visionBadgeText,
  valuesKicker, valuesTitle,
  values[]{ title, desc },
  projectsKicker, projectsTitle, projectsIntro,
  projects[]{ title, desc, tag },
  orgParagraph,
  founderName, founderRole, founderBio,
  ctaTitle, ctaText
}`;
