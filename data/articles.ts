import { absoluteUrl } from '@/lib/site'

export type ArticleBlock =
  | { type: 'heading'; text: string }
  | { type: 'paragraph'; text: string }
  | { type: 'list'; items: string[] }

export type ArticleLink = {
  title: string
  href: string
  label: string
}

export type Article = {
  slug: string
  title: string
  description: string
  category: string
  publishedAt: string
  updatedAt: string
  readingTime: string
  tags: string[]
  entities: string[]
  author: {
    name: string
    role: string
  }
  intro: string
  blocks: ArticleBlock[]
  serviceLinks: ArticleLink[]
}

const author = {
  name: 'Niall Carver',
  role: 'Founder, The Brand Hive UK',
}

export const articles: Article[] = [
  {
    slug: 'founder-led-marketing-is-an-operating-system',
    title: 'Founder-led marketing is an operating system, not a posting habit',
    description:
      'Why founder-led marketing works when it is treated as a commercial operating system across positioning, proof, content, and distribution.',
    category: 'Founder-led marketing',
    publishedAt: '2026-05-23',
    updatedAt: '2026-05-23',
    readingTime: '6 min read',
    tags: ['founder-led marketing', 'B2B authority', 'content systems'],
    entities: ['Founder-led marketing', 'B2B marketing', 'Authority building', 'Content operations'],
    author,
    intro:
      'Most founder-led marketing fails because it gets reduced to posting. The founder is told to be more visible, share more lessons, turn thoughts into content, and show up consistently. None of that is wrong. It is just incomplete.',
    blocks: [
      {
        type: 'paragraph',
        text:
          'Visibility is not the asset. Trust is the asset. The job is not to make a founder noisier. The job is to turn what the founder knows, believes, notices, rejects, builds, and proves into a market-facing system that compounds.',
      },
      {
        type: 'heading',
        text: 'The founder is the strategy layer',
      },
      {
        type: 'paragraph',
        text:
          'In a serious B2B company, the founder is not just a spokesperson. They are usually the clearest source of category intuition. They know why customers buy, where the market is confused, which objections are lazy, and which beliefs need to be challenged before a sales conversation can move.',
      },
      {
        type: 'paragraph',
        text:
          'That intelligence should not live only in calls, private notes, pitch decks, or internal Slack threads. It should become the spine of the company narrative. Founder-led marketing is how that intelligence reaches the market without being flattened into generic brand copy.',
      },
      {
        type: 'heading',
        text: 'Posting is only the visible edge',
      },
      {
        type: 'paragraph',
        text:
          'A post is the smallest public expression of a much larger system. Behind it should sit positioning, proof, narrative, buyer context, distribution logic, and a clear view of what the audience needs to believe next.',
      },
      {
        type: 'list',
        items: [
          'Positioning defines the commercial ground the founder wants to own.',
          'Proof gives the market a reason to believe the claim.',
          'Narrative turns isolated opinions into a coherent point of view.',
          'Distribution gets the right people into repeated contact with the thinking.',
          'Conversion paths turn attention into conversations without forcing every post to sell.',
        ],
      },
      {
        type: 'paragraph',
        text:
          'When those pieces are missing, founders end up publishing disconnected observations. Some posts perform. Some do not. The market may like the content, but it does not necessarily understand the company.',
      },
      {
        type: 'heading',
        text: 'The strongest founder content reduces sales friction',
      },
      {
        type: 'paragraph',
        text:
          'Good founder-led marketing does not just create reach. It pre-educates the market. It handles objections before calls. It explains the cost of inaction. It names the problem more sharply than the buyer can. It makes the founder feel unusually clear before the buyer has met them.',
      },
      {
        type: 'paragraph',
        text:
          'That is why the best systems are not built around inspiration. They are built around commercial tension. What is the market underestimating? What is the buyer misdiagnosing? Which tradeoffs do competitors avoid saying out loud? Which beliefs create demand before the offer is introduced?',
      },
      {
        type: 'heading',
        text: 'The operating system view',
      },
      {
        type: 'paragraph',
        text:
          'Treating founder-led marketing as an operating system changes the work. The calendar becomes less important than the source material. The goal is not to fill slots. The goal is to repeatedly extract useful market intelligence and shape it into assets that make the founder easier to trust.',
      },
      {
        type: 'paragraph',
        text:
          'That means regular founder interviews, proof capture, customer insight loops, positioning reviews, post-performance analysis, and a living library of arguments the company wants to own. The founder still sounds human, but the system underneath is disciplined.',
      },
      {
        type: 'paragraph',
        text:
          'Founder-led marketing works when it becomes part of how the company thinks in public. Not a personal brand side quest. Not a content calendar chore. A commercial operating system for turning founder insight into market trust.',
      },
    ],
    serviceLinks: [
      { title: 'LinkedIn Authority Growth', href: '/services/linkedin', label: 'Build founder-led trust on LinkedIn' },
      { title: 'X Growth Systems', href: '/services/x', label: 'Turn founder thinking into distribution' },
    ],
  },
  {
    slug: 'ghostwriting-that-still-sounds-like-the-founder',
    title: 'Ghostwriting that still sounds like the founder',
    description:
      'How operator-level ghostwriting preserves founder voice while turning scattered expertise into clear market authority.',
    category: 'Ghostwriting',
    publishedAt: '2026-05-23',
    updatedAt: '2026-05-23',
    readingTime: '5 min read',
    tags: ['ghostwriting', 'founder voice', 'executive content'],
    entities: ['Ghostwriting', 'Founder voice', 'Executive communications', 'B2B content'],
    author,
    intro:
      'The best ghostwriting does not make a founder sound polished. It makes them sound more like themselves, with less friction between thought and market.',
    blocks: [
      {
        type: 'paragraph',
        text:
          'Bad ghostwriting has a smell. It is smooth, vague, and interchangeable. It adds words where the founder would have added a point. It makes everything sound approved, but nothing sound lived.',
      },
      {
        type: 'paragraph',
        text:
          'That is a problem in B2B because the buyer is not only judging the argument. They are judging the operator behind it. Does this person notice what others miss? Do they understand the real constraints? Would I trust them in a room where the problem is messy?',
      },
      {
        type: 'heading',
        text: 'Voice is not a tone guide',
      },
      {
        type: 'paragraph',
        text:
          'Most voice work starts too late. It tries to capture sentence length, favourite phrases, punctuation, and preferred formats. Those details matter, but they are surface-level. Founder voice is built from judgement.',
      },
      {
        type: 'list',
        items: [
          'What does the founder believe that the market does not yet believe?',
          'Which problems do they refuse to oversimplify?',
          'Where are they more direct than the average operator?',
          'What examples do they reach for when they are not performing?',
          'Which claims would they never make because they know the operational cost?',
        ],
      },
      {
        type: 'paragraph',
        text:
          'A strong ghostwriting process captures those judgement patterns first. Style follows from substance. Without that, the writing may be clean, but it will not feel inhabited.',
      },
      {
        type: 'heading',
        text: 'The raw material matters',
      },
      {
        type: 'paragraph',
        text:
          'Founders rarely need someone to invent opinions for them. They need someone to extract, organise, challenge, and sharpen the thinking that already exists. The best source material often comes from sales calls, client delivery notes, product decisions, hiring conversations, investor updates, and blunt internal comments.',
      },
      {
        type: 'paragraph',
        text:
          'A ghostwriter operating at a serious level does not just ask, "What should we post this week?" They listen for commercial insight. They look for repeated objections, unusually sharp phrases, proof points, contrarian edges, and moments where the founder explains something with more clarity than the market is used to hearing.',
      },
      {
        type: 'heading',
        text: 'The edit should protect the edge',
      },
      {
        type: 'paragraph',
        text:
          'The easiest way to ruin founder content is to smooth out the very thing that made it credible. Real operators qualify claims. They mention constraints. They are specific about tradeoffs. They do not write as if every lesson is universal.',
      },
      {
        type: 'paragraph',
        text:
          'Good ghostwriting keeps that edge. It removes drag, not personality. It clarifies the point without sanding away the judgement. The founder should read the draft and feel exposed in the right way: "That is what I meant, but cleaner."',
      },
      {
        type: 'paragraph',
        text:
          'Ghostwriting is not a disguise. Done well, it is a compression layer. It turns founder thinking into public assets without making the founder sound outsourced.',
      },
    ],
    serviceLinks: [
      { title: 'LinkedIn Authority Growth', href: '/services/linkedin', label: 'Shape executive content without losing voice' },
      { title: 'Contact', href: '/contact', label: 'Discuss founder ghostwriting support' },
    ],
  },
  {
    slug: 'b2b-positioning-before-content-volume',
    title: 'B2B positioning before content volume',
    description:
      'Why more content does not fix unclear positioning, and how sharper market ownership makes every channel more effective.',
    category: 'B2B positioning',
    publishedAt: '2026-05-23',
    updatedAt: '2026-05-23',
    readingTime: '5 min read',
    tags: ['B2B positioning', 'authority marketing', 'demand creation'],
    entities: ['B2B positioning', 'Demand generation', 'Category design', 'Authority marketing'],
    author,
    intro:
      'More content is rarely the answer to unclear positioning. It usually makes the confusion louder.',
    blocks: [
      {
        type: 'paragraph',
        text:
          'When a B2B company has weak positioning, content teams try to compensate with activity. More posts. More formats. More founder takes. More carousels. More newsletters. The output increases, but the market still does not know what the company owns.',
      },
      {
        type: 'paragraph',
        text:
          'That is because content cannot consistently create authority from a vague strategic base. It can amplify a point of view. It can prove a claim. It can educate a buyer. But if the company has not decided what it wants to be known for, the content system has nothing durable to compound around.',
      },
      {
        type: 'heading',
        text: 'Positioning decides what the market should remember',
      },
      {
        type: 'paragraph',
        text:
          'Good positioning is not a tagline. It is a commercial decision about the mental slot you want to occupy. It clarifies who the work is for, what problem you solve better than alternatives, why the timing matters, and what belief the buyer needs to adopt before your offer feels obvious.',
      },
      {
        type: 'paragraph',
        text:
          'Without that decision, every channel becomes reactive. The company comments on trends, publishes helpful advice, and shares proof, but the market cannot connect those pieces into a clear reason to care.',
      },
      {
        type: 'heading',
        text: 'Content should pressure-test positioning',
      },
      {
        type: 'paragraph',
        text:
          'The relationship between positioning and content is not one-way. Positioning gives content direction, but content also reveals whether the positioning has teeth. If buyers respond to the problem framing, save the argument, repeat the language, or challenge the claim, the market is giving useful signal.',
      },
      {
        type: 'list',
        items: [
          'Are buyers repeating the category language back to the team?',
          'Do prospects arrive already understanding the core problem?',
          'Are sales calls starting deeper because public content handled the basics?',
          'Does the founder have a clear set of arguments they can return to without sounding repetitive?',
        ],
      },
      {
        type: 'paragraph',
        text:
          'Those signals matter more than isolated engagement. A post can perform because it is relatable. Authority compounds when content makes the company easier to place, trust, and buy from.',
      },
      {
        type: 'heading',
        text: 'Volume compounds only after clarity',
      },
      {
        type: 'paragraph',
        text:
          'There is nothing wrong with volume. In competitive markets, cadence matters. But volume only compounds when the market can understand the accumulation. Ten sharp posts around one commercial thesis beat fifty disconnected posts around general competence.',
      },
      {
        type: 'paragraph',
        text:
          'Before increasing output, tighten the strategic base. Define the market enemy. Name the expensive misconception. Prove the alternative. Give the founder a point of view that can survive more than one content cycle.',
      },
      {
        type: 'paragraph',
        text:
          'Content volume can scale attention. Positioning decides whether that attention has somewhere useful to go.',
      },
    ],
    serviceLinks: [
      { title: 'Services', href: '/services', label: 'Connect positioning to the right authority system' },
      { title: 'Lead Generation', href: '/services/lead-gen', label: 'Turn clearer positioning into qualified demand' },
    ],
  },
  {
    slug: 'content-systems-beat-content-calendars',
    title: 'Content systems beat content calendars',
    description:
      'Why B2B teams need repeatable content systems that capture insight, proof, distribution, and learning instead of filling weekly slots.',
    category: 'Content systems',
    publishedAt: '2026-05-23',
    updatedAt: '2026-05-23',
    readingTime: '5 min read',
    tags: ['content systems', 'content operations', 'B2B marketing'],
    entities: ['Content systems', 'Content marketing', 'B2B operations', 'Distribution strategy'],
    author,
    intro:
      'A content calendar can tell a team what to publish. It cannot tell them why the market should care.',
    blocks: [
      {
        type: 'paragraph',
        text:
          'Calendars are useful once the thinking is clear. They create rhythm, accountability, and visibility. But many B2B teams use the calendar as a substitute for the system. That is where the work starts to feel thin.',
      },
      {
        type: 'paragraph',
        text:
          'The team fills dates instead of building assets. They brainstorm topics instead of mining customer insight. They chase formats instead of strengthening arguments. The calendar stays full, but the authority does not compound.',
      },
      {
        type: 'heading',
        text: 'A system starts before the publish date',
      },
      {
        type: 'paragraph',
        text:
          'A serious content system begins with source material. Sales objections, customer wins, delivery lessons, founder notes, product decisions, competitor gaps, and market changes should all feed the content engine. Without that input layer, the team is forced to invent from the outside.',
      },
      {
        type: 'paragraph',
        text:
          'The system then turns that raw material into reusable arguments. One customer insight might become a founder post, a sales enablement note, a newsletter section, a landing page refinement, and a comment strategy. The value is not in a single asset. It is in the repeated translation of commercial intelligence.',
      },
      {
        type: 'heading',
        text: 'Distribution belongs inside the system',
      },
      {
        type: 'paragraph',
        text:
          'Publishing is not distribution. A post going live is only one moment in the life of an idea. B2B authority grows when the right people see the thinking repeatedly, in the right contexts, with enough proof to take it seriously.',
      },
      {
        type: 'list',
        items: [
          'Which accounts should see this argument?',
          'Which partners could extend the conversation?',
          'Which comments deserve a thoughtful response?',
          'Which sales conversations should this asset support?',
          'Which follow-up asset should exist if the idea lands?',
        ],
      },
      {
        type: 'paragraph',
        text:
          'Those questions move content away from performance theatre and toward market movement. The system is not only about creation. It is about circulation, response, and learning.',
      },
      {
        type: 'heading',
        text: 'Learning closes the loop',
      },
      {
        type: 'paragraph',
        text:
          'The calendar asks, "What is next?" The system asks, "What did we learn?" That difference matters. Replies, saves, sales call language, inbound quality, and objection patterns should all shape the next cycle.',
      },
      {
        type: 'paragraph',
        text:
          'A mature content system gets sharper because the market keeps teaching it. The company learns which ideas create trust, which claims need more proof, which topics attract low-intent attention, and which arguments move serious buyers forward.',
      },
      {
        type: 'paragraph',
        text:
          'Calendars organise output. Systems compound judgement. B2B teams need both, but the system has to lead.',
      },
    ],
    serviceLinks: [
      { title: 'X Growth Systems', href: '/services/x', label: 'Build repeatable distribution on X' },
      { title: 'LinkedIn Authority Growth', href: '/services/linkedin', label: 'Run a structured LinkedIn authority engine' },
    ],
  },
  {
    slug: 'client-acquisition-through-authority-not-pressure',
    title: 'Client acquisition through authority, not pressure',
    description:
      'A sharper view of inbound acquisition for B2B service firms and founders who need trust before the sales conversation starts.',
    category: 'Client acquisition',
    publishedAt: '2026-05-23',
    updatedAt: '2026-05-23',
    readingTime: '6 min read',
    tags: ['client acquisition', 'inbound marketing', 'founder visibility'],
    entities: ['Client acquisition', 'Inbound marketing', 'Founder visibility', 'B2B sales'],
    author,
    intro:
      'Pressure can create meetings. Authority creates better meetings.',
    blocks: [
      {
        type: 'paragraph',
        text:
          'A lot of B2B acquisition is built around forcing the next step. Cold messages push for calls. Ads push for demos. Funnels push for conversion. The mechanics can work, but they often create fragile demand because the buyer has not yet developed enough trust to move well.',
      },
      {
        type: 'paragraph',
        text:
          'Authority-led acquisition works differently. It gives the buyer a reason to believe before the call. It lets them see the operator thinking clearly in public. It helps them understand the problem, the cost of delay, and the shape of a better approach before they are asked to commit.',
      },
      {
        type: 'heading',
        text: 'Trust changes the economics of the conversation',
      },
      {
        type: 'paragraph',
        text:
          'When a buyer arrives through authority, the sales conversation starts with different energy. They are not just responding to an offer. They are responding to a body of thinking that has already done part of the trust-building work.',
      },
      {
        type: 'paragraph',
        text:
          'That does not remove the need for sales skill. It improves the conditions. The buyer has context. The founder has credibility. The problem has already been framed. The conversation can move faster because less time is spent proving basic competence.',
      },
      {
        type: 'heading',
        text: 'Authority is built through useful specificity',
      },
      {
        type: 'paragraph',
        text:
          'Generic expertise does not create authority. Specific judgement does. Buyers pay attention when a founder names problems accurately, explains tradeoffs honestly, shows proof without theatrical case studies, and says the quiet part of the market out loud.',
      },
      {
        type: 'list',
        items: [
          'Explain the buyer mistake that keeps showing up in delivery.',
          'Show the operational reason a common tactic breaks.',
          'Use proof to make the claim concrete, not decorative.',
          'Name who the approach is not for.',
          'Connect the insight to a commercially meaningful next step.',
        ],
      },
      {
        type: 'paragraph',
        text:
          'This kind of content does not need to beg for attention. It earns relevance by making the buyer feel understood. That is a stronger acquisition asset than a louder CTA.',
      },
      {
        type: 'heading',
        text: 'Inbound still needs architecture',
      },
      {
        type: 'paragraph',
        text:
          'Authority alone is not a pipeline system. It has to connect to clear offers, strong profiles, service pages, proof assets, and follow-up paths. Otherwise attention leaks. The buyer may trust the founder but still not know what to do next.',
      },
      {
        type: 'paragraph',
        text:
          'The goal is not to make every post sell. The goal is to make the commercial path obvious when intent appears. That means pinned assets, relevant service pages, direct contact routes, and content that naturally creates context for the work.',
      },
      {
        type: 'paragraph',
        text:
          'Client acquisition through authority is slower than pressure in the first week and stronger over the next year. It compounds because the market keeps encountering the same useful judgement until trust becomes the default.',
      },
    ],
    serviceLinks: [
      { title: 'Lead Generation', href: '/services/lead-gen', label: 'Connect authority to qualified pipeline' },
      { title: 'Contact', href: '/contact', label: 'Start a client acquisition conversation' },
    ],
  },
]

export function getAllArticles() {
  return [...articles].sort((a, b) => b.publishedAt.localeCompare(a.publishedAt))
}

export function getArticleBySlug(slug: string) {
  return articles.find((article) => article.slug === slug)
}

export function getRelatedArticles(article: Article) {
  const related = articles
    .filter((candidate) => candidate.slug !== article.slug)
    .map((candidate) => ({
      article: candidate,
      score: candidate.tags.filter((tag) => article.tags.includes(tag)).length,
    }))
    .sort((a, b) => b.score - a.score || b.article.publishedAt.localeCompare(a.article.publishedAt))
    .slice(0, 3)

  return related.map(({ article: relatedArticle }) => relatedArticle)
}

export function getArticleUrl(article: Article) {
  return absoluteUrl(`/insight-hive/${article.slug}`)
}

export function getArticleWordCount(article: Article) {
  return [
    article.title,
    article.description,
    article.intro,
    ...article.blocks.flatMap((block) => (block.type === 'list' ? block.items : [block.text])),
  ]
    .join(' ')
    .split(/\s+/)
    .filter(Boolean).length
}
