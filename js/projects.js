// =====================================================
// PROJECTS — the ONE place every project lives.
//
// design.html and work.html both read from this same list
// and render cards automatically — you never edit HTML to
// add a project.
//
// HOW TO ADD A PROJECT:
// Copy one of the objects below, paste it into the array,
// and fill in your own values. Fields:
//
//   id          — unique, no spaces (e.g. "acme-rebrand")
//   title       — project name
//   description — 1–2 sentences
//   image       — path like "images/acme.jpg", or null for
//                 a placeholder box until you have a real image
//   tags        — array, pick from "design", "research", "bridge".
//                 A project can have more than one tag — a
//                 project tagged ["design", "bridge"] will show
//                 up on the Design page AND under both the
//                 "Design" and "Bridge" filters on the All Work
//                 page.
//   keywords    — extra searchable words that aren't already
//                 in the title/description (client name, medium,
//                 topic area, etc.) — helps the search box on
//                 the All Work page find it.
// =====================================================

const projects = [
  {
    id: "thesis",
    title: "Honors Thesis in Behavioral Science",
    description: "Fighting Words: Utilizing Populist Language as a Predictor in US Election Models",
    image: "website_files/pdf/copsy logo.jpg",
    tags: ["research"],
    keywords: ["language", "policy", "statistics", "populism", "research"]
  },
  {
    id: "TZA icons",
    title: "Tow Zone Alerts Icons",
    description: "A variety of original iconography designed for a Boston-based startup for use on websites and marketing materials.",
    image: "website_files/design/tza icons.png",
    tags: ["design"],
    keywords: ["logo", "marketing"]
  },
    {
    id: "TZA insta",
    title: "Tow Zone Alerts Instagram Post",
    description: "One of many instagram posts designed for TZA to share on their Instagram.",
    image: "website_files/design/tza insta 2.png",
    tags: ["design"],
    keywords: ["social media", "marketing"]
  },
   {
    id: "TZA pager",
    title: "Tow Zone Alerts One-Pager",
    description: "A one-pager designed in Adobe InDesign, documenting the collaboration process for TZA's corporate partners.",
    image: "website_files/design/onepage.png",
    tags: ["design"],
    keywords: ["brand cohesion", "marketing"]
  },
   {
    id: "HNMUN",
    title: "Model UN Recruitment Post",
    description: "One of a handful of social posts for the Brown MUN team to advertise trips and recruitment.",
    image: "website_files/design/hnmun.png",
    tags: ["design"],
    keywords: ["social media", "marketing"]
  },
   {
    id: "popular vote",
    title: "NPVIC Social Media Infographic",
    description: "A social media post advertising the National Popular Vote Interstate Compact, as well as the policy ramifications.",
    image: "website_files/design/npvic.png",
    tags: ["bridge", "policy", "elections"],
    keywords: ["social media", "marketing", "politics", "policy"]
  },
   {
    id: "everything old",
    title: "Old Design Practice",
    description: "A variety of original icons and designs made to demonstrate logomark skills and possible collaboration styles.",
    image: "website_files/design/everything_old.png",
    tags: ["design"],
    keywords: ["logo", "marketing"]
  },
   {
    id: "Music Club",
    title: "ETHS Music Tech Club Badge",
    description: "An original badge made for the Evanston High School music tech club, used to promote the new club and put on merchandise.",
    image: "website_files/design/music.png",
    tags: ["design"],
    keywords: ["logo", "marketing", "merch"]
  },
   {
    id: "shirts",
    title: "ETHS T-Shirts",
    description: "Four shirt designs proposed to the ETHS administration, with the bottom left design sold as an official design.",
    image: "website_files/design/shirts.png",
    tags: ["design"],
    keywords: ["logo", "marketing", "merch"]
  },
   {
    id: "TZA card",
    title: "Tow Zone Alerts Business Card",
    description: "An official business card design for the startup TZA.",
    image: "website_files/design/bc.png",
    tags: ["design"],
    keywords: ["logo", "marketing", "merch"]
  },
  {
    id: "northbound",
    title: "NorthBound Supply Co.",
    description: "Branding guide designed as a mockup for a fictional company, Northbound, that sells camping gear through three subbrands.",
    image: "website_files/design/northbound.png",
    tags: ["design"],
    keywords: ["logo", "marketing"]
  },
   {
    id: "everest",
    title: "Everest Film Company",
    description: "Branding guide designed as a mockup for a fictional company, Everest, a film studio and distributor.",
    image: "website_files/design/everest.png",
    tags: ["design"],
    keywords: ["logo", "marketing"]
  },
   {
    id: "gofish",
    title: "Go Fish Foods",
    description: "Branding guide designed as a mockup for a fictional company, Go Fish Foods, that sells health, frozen seafood products.",
    image: "website_files/design/gofish.png",
    tags: ["design"],
    keywords: ["logo", "marketing"]
  },
   {
    id: "entrance",
    title: "Entrance",
    description: "Branding guide designed as a mockup for a fictional company, Entrance, that offers online, introductory music lessons.",
    image: "website_files/design/northbound.png",
    tags: ["design"],
    keywords: ["logo", "marketing"]
  },
  {
    id: "BPR articles",
    title: "Brown Political Review Opinion Articles",
    description: "Five original pieces published in the BPR, ranging from election policy to language analysis",
    image: "website_files/pdf/bpr.png",
    tags: ["research"],
    keywords: ["policy", "elections"]
  },
  {
    id: "Corpus",
    title: "Corpus Linguistics Newspaper Research",
    description: "An informal study into the relationship between issue framing and political bias in major publications.",
    image: "website_files/pdf/corpus.png",
    tags: ["research"],
    keywords: ["campaign", "rebrand"]
  }
];