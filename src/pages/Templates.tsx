import { useState } from "react";
import Layout from "@/components/layout/Layout";
import TemplateCard from "@/components/shared/TemplateCard";
import { Button } from "@/components/ui/button";

const categories = ["All", "Copywriting", "Strategy", "Design & Content", "Client Management"];

const templates = [
  { 
    title: "Creative Brief", 
    category: "Strategy", 
    description: "Comprehensive template for outlining project objectives, target audience, and creative direction.",
    content: `📋 CREATIVE BRIEF TEMPLATE

PROJECT OVERVIEW
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Project Name: [Project Title]
Client: [Client Name]
Date: [Date]
Version: [1.0]

1. PROJECT BACKGROUND
What is the context for this project?
[Describe the current situation, why this project is needed]

2. OBJECTIVES
What are we trying to achieve?
□ Primary Goal: [Main objective]
□ Secondary Goals: [Supporting objectives]
□ Key Metrics: [How success will be measured]

3. TARGET AUDIENCE
Who are we speaking to?
• Demographics: [Age, gender, location, income]
• Psychographics: [Interests, values, lifestyle]
• Pain Points: [What problems do they have?]
• Motivations: [What drives their decisions?]

4. KEY MESSAGE
What is the single most important thing to communicate?
[One clear, compelling message]

5. TONE & VOICE
How should the communication feel?
□ Tone: [Professional / Casual / Playful / Serious]
□ Voice: [Authoritative / Friendly / Inspirational]

6. DELIVERABLES
What needs to be created?
□ [Deliverable 1]
□ [Deliverable 2]
□ [Deliverable 3]

7. TIMELINE
Key Milestones:
• Kickoff: [Date]
• First Draft: [Date]
• Review: [Date]
• Final Delivery: [Date]

8. BUDGET
Total Budget: $[Amount]
Breakdown: [If applicable]

9. REFERENCES & INSPIRATION
[Links or descriptions of reference materials]

10. APPROVAL CHAIN
• [Name] - [Role] - [Approval Level]`
  },
  { 
    title: "Client Pitch Deck Structure", 
    category: "Client Management", 
    description: "Professional slide structure for presenting marketing proposals to clients.",
    content: `🎯 CLIENT PITCH DECK STRUCTURE

SLIDE 1: TITLE SLIDE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
• Company Logo
• Proposal Title
• Client Name
• Date
• Presented by: [Your Name]

SLIDE 2: AGENDA
• What we'll cover today
• Time allocation for each section

SLIDE 3: UNDERSTANDING YOUR CHALLENGE
• Client's current situation
• Key pain points identified
• Market challenges

SLIDE 4: OUR APPROACH
• Strategic framework
• Methodology overview
• Why this approach works

SLIDE 5: PROPOSED SOLUTION
• Core strategy recommendation
• Tactical execution plan
• Channel mix

SLIDE 6: CREATIVE DIRECTION
• Visual concepts
• Messaging themes
• Campaign examples

SLIDE 7: TIMELINE & MILESTONES
• Phase 1: Discovery & Planning
• Phase 2: Development
• Phase 3: Launch
• Phase 4: Optimization

SLIDE 8: EXPECTED RESULTS
• KPIs we'll track
• Projected outcomes
• Success metrics

SLIDE 9: INVESTMENT
• Pricing options
• What's included
• Payment terms

SLIDE 10: CASE STUDIES
• Similar work examples
• Results achieved
• Client testimonials

SLIDE 11: ABOUT US
• Team introduction
• Relevant experience
• Why we're the right fit

SLIDE 12: NEXT STEPS
• Immediate action items
• Decision timeline
• Contact information

💡 Pro Tips:
• Keep slides visual, minimal text
• Practice the 10/20/30 rule
• Include leave-behinds`
  },
  { 
    title: "Ad Copy Formats", 
    category: "Copywriting", 
    description: "Multiple ad copy formats including AIDA, PAS, and problem-agitate-solve frameworks.",
    content: `✍️ AD COPY FORMATS & FRAMEWORKS

1. AIDA FRAMEWORK
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Attention: [Hook that grabs attention]
Interest: [Build curiosity with benefits]
Desire: [Create emotional connection]
Action: [Clear CTA]

Example:
"Tired of sleepless nights? (A)
Our natural sleep formula helps 10,000+ people fall asleep in 15 minutes. (I)
Imagine waking up refreshed, energized, and ready to conquer your day. (D)
Try it risk-free for 30 days → [Link]" (A)

2. PAS FRAMEWORK
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Problem: [Identify the pain point]
Agitate: [Make them feel the problem deeply]
Solution: [Present your offer]

Example:
"Struggling to get leads? (P)
While you're figuring it out, your competitors are stealing your customers. Every day without a system costs you $$$. (A)
Our Lead Gen Blueprint has helped 500+ businesses 3x their pipeline in 30 days. (S)"

3. BAB FRAMEWORK
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Before: [Current painful state]
After: [Desired state achieved]
Bridge: [Your solution]

4. 4 U's FORMULA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
• Useful: Provide value
• Urgent: Create FOMO
• Unique: Stand out
• Ultra-specific: Use numbers/details

Example:
"Get 47 proven email templates that boost open rates by 312% — FREE download ends Friday"

5. SOCIAL PROOF FORMAT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
"[Number] [audience] trust us to [benefit]"
"Join [number]+ [audience] who [achieved result]"
"Rated [X] stars by [number] customers"

6. QUESTION-BASED ADS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
• "What if you could [dream outcome]?"
• "Ready to [desired action]?"
• "Why do [competitors] keep [pain point]?"`
  },
  { 
    title: "Influencer Outreach Email", 
    category: "Client Management", 
    description: "Professional email template for reaching out to influencers for collaboration.",
    content: `📧 INFLUENCER OUTREACH TEMPLATES

TEMPLATE 1: INITIAL OUTREACH
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Subject: Loved your [specific content] — collab idea? 🤝

Hi [Influencer Name],

I've been following your content for a while and absolutely loved your recent [specific post/video about topic]. The way you [specific thing they did well] really resonated with me.

I'm [Your Name] from [Brand], and we [brief description of what you do]. We're looking to partner with creators who share our values of [shared value].

I'd love to explore a collaboration that could:
✓ [Benefit for them #1]
✓ [Benefit for them #2]
✓ [Benefit for their audience]

Would you be open to a quick 15-min call this week to discuss?

Best,
[Your Name]
[Title] | [Brand]

---

TEMPLATE 2: PRODUCT GIFTING
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Subject: A gift for you from [Brand] 🎁

Hi [Name],

Your content on [topic] is exactly what our community loves. We'd love to send you our [product] — no strings attached.

If you love it and want to share with your audience, amazing. If not, enjoy the gift!

Interested? Just reply with your shipping address.

Cheers,
[Name]

---

TEMPLATE 3: PAID PARTNERSHIP
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Subject: Partnership opportunity — [Brand] x [Their Name]

Hi [Name],

[Brand] is planning a [campaign type] and your content style is exactly what we're looking for.

The Brief:
• Deliverables: [X posts/stories/videos]
• Timeline: [Dates]
• Budget: $[Amount]
• Creative freedom: High — we trust your style

Interested in learning more? I'd love to hop on a quick call.

Best,
[Name]

---

💡 OUTREACH TIPS:
• Always personalize — reference specific content
• Keep it short (under 150 words)
• Make the value clear for THEM
• Follow up 3-5 days later if no response
• Don't mass email — quality > quantity`
  },
  { 
    title: "Instagram Carousel Layout", 
    category: "Design & Content", 
    description: "Visual layout guide for creating engaging Instagram carousel posts.",
    content: `📱 INSTAGRAM CAROUSEL LAYOUTS

LAYOUT 1: THE HOOK + VALUE (7-10 Slides)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Slide 1: Bold hook/headline (stop the scroll)
Slide 2: Identify the problem
Slide 3-8: Tips/Steps/Points (one per slide)
Slide 9: Summary/Recap
Slide 10: CTA + Save reminder

LAYOUT 2: THE STORYTELLER (5-7 Slides)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Slide 1: Intriguing opening statement
Slide 2: The challenge/situation
Slide 3: The turning point
Slide 4: The transformation
Slide 5: The lesson learned
Slide 6: How it applies to reader
Slide 7: CTA

LAYOUT 3: THE LISTICLE (6-10 Slides)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Slide 1: "X [Things/Tools/Tips] for [Outcome]"
Slides 2-9: One item per slide with brief explanation
Slide 10: "Save this for later ↓"

LAYOUT 4: THE BEFORE/AFTER
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Slide 1: "The transformation you need to see"
Slide 2: Before state
Slide 3: After state
Slide 4-6: How to achieve it
Slide 7: CTA

DESIGN TIPS:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
✓ Use consistent brand colors
✓ Large, readable fonts (min 30pt)
✓ One idea per slide
✓ White space is your friend
✓ Swipe indicator on slide 1
✓ High contrast for readability

CAPTION STRUCTURE:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Line 1: Hook (matches slide 1)
Line 2-3: Context/Value add
Line 4: Engagement question
Line 5: CTA (save, share, comment)
[Hashtags at end or in comments]`
  },
  { 
    title: "Content Strategy Template", 
    category: "Strategy", 
    description: "Complete framework for planning content across all marketing channels.",
    content: `📊 CONTENT STRATEGY TEMPLATE

1. EXECUTIVE SUMMARY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Strategy Period: [Q1 2024 / Annual]
Primary Goal: [Brand Awareness / Lead Gen / Sales]
Target Audience: [Description]
Key Channels: [List]

2. CONTENT PILLARS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Pillar 1: [Educational Content] - 40%
• Topics: [List topics]
• Goals: [Build authority, educate audience]

Pillar 2: [Promotional Content] - 25%
• Topics: [Products, offers, launches]
• Goals: [Drive conversions]

Pillar 3: [Engagement Content] - 20%
• Topics: [Behind-scenes, polls, Q&As]
• Goals: [Build community]

Pillar 4: [User-Generated Content] - 15%
• Topics: [Reviews, testimonials, reposts]
• Goals: [Social proof]

3. CHANNEL STRATEGY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
INSTAGRAM
• Frequency: 5x/week
• Content types: Reels, Carousels, Stories
• Best times: [Based on analytics]

LINKEDIN
• Frequency: 3x/week
• Content types: Articles, Text posts, Documents
• Best times: [Based on analytics]

EMAIL
• Frequency: 2x/week
• Content types: Newsletter, Promotional
• Segmentation: [How you'll segment]

4. CONTENT CALENDAR FRAMEWORK
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Monday: [Educational post]
Tuesday: [Engagement post]
Wednesday: [Value-add / Tips]
Thursday: [Behind-the-scenes]
Friday: [Promotional / CTA]
Weekend: [User-generated / Light content]

5. KPIs & METRICS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
• Reach: [Target]
• Engagement Rate: [Target %]
• Click-through Rate: [Target %]
• Conversions: [Target]
• Follower Growth: [Target/month]

6. TOOLS & RESOURCES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
• Scheduling: [Tool name]
• Design: [Tool name]
• Analytics: [Tool name]
• AI/Content: [Tool name]`
  },
  { 
    title: "Monthly Report Format", 
    category: "Client Management", 
    description: "Professional template for reporting marketing performance metrics to stakeholders.",
    content: `📈 MONTHLY MARKETING REPORT

REPORT PERIOD: [Month Year]
Prepared by: [Name]
Date: [Date]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. EXECUTIVE SUMMARY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Key Highlights:
✓ [Top achievement #1]
✓ [Top achievement #2]
✓ [Top achievement #3]

Areas for Improvement:
• [Challenge #1]
• [Challenge #2]

2. GOALS VS. ACTUALS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
| Metric          | Goal    | Actual  | % |
|-----------------|---------|---------|---|
| Revenue         | $X      | $X      | X%|
| Leads           | X       | X       | X%|
| Website Traffic | X       | X       | X%|
| Conversions     | X       | X       | X%|

3. CHANNEL PERFORMANCE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
PAID ADVERTISING
• Spend: $[X]
• ROAS: [X]:1
• CPA: $[X]
• Top performing ad: [Description]

SOCIAL MEDIA
• Total Reach: [X]
• Engagement Rate: [X]%
• Follower Growth: +[X]
• Top post: [Description]

EMAIL MARKETING
• Emails Sent: [X]
• Open Rate: [X]%
• Click Rate: [X]%
• Unsubscribes: [X]

SEO/ORGANIC
• Organic Traffic: [X]
• Keyword Rankings: [Summary]
• Backlinks Acquired: [X]

4. CAMPAIGN HIGHLIGHTS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Campaign: [Name]
• Objective: [Goal]
• Results: [Key metrics]
• Learnings: [What we learned]

5. NEXT MONTH PRIORITIES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
1. [Priority #1]
2. [Priority #2]
3. [Priority #3]

6. BUDGET STATUS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Monthly Budget: $[X]
Spent: $[X]
Remaining: $[X]

7. RECOMMENDATIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
• [Recommendation #1]
• [Recommendation #2]
• [Recommendation #3]`
  },
  { 
    title: "AIDA Copywriting Template", 
    category: "Copywriting", 
    description: "Attention, Interest, Desire, Action framework for persuasive copywriting.",
    content: `🎯 AIDA COPYWRITING FRAMEWORK

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A - ATTENTION (Hook)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Goal: Stop the scroll, grab attention in 3 seconds

Techniques:
• Ask a provocative question
• Make a bold statement
• Use surprising statistics
• Address a pain point directly
• Create curiosity

Examples:
□ "What if everything you knew about [topic] was wrong?"
□ "97% of [audience] make this costly mistake..."
□ "Stop [doing X] — here's why"
□ "The #1 reason [audience] fail at [goal]"

Your Hook: ________________________________

I - INTEREST (Build curiosity)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Goal: Keep them reading, build connection

Techniques:
• Share relatable struggles
• Present the problem in detail
• Show you understand their situation
• Introduce unique mechanism/approach

Template:
"If you've ever [common struggle], you know how [painful emotion] it feels when [consequence]. You've probably tried [common solutions] but still [problem persists]..."

Your Interest Section: ________________________________

D - DESIRE (Create want)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Goal: Make them want what you're offering

Techniques:
• Paint the "after" picture vividly
• Use sensory language
• Stack benefits (not just features)
• Include social proof
• Handle objections

Template:
"Imagine [dream scenario]. You wake up to [benefit 1], while [benefit 2]. [Social proof: "Just like Sarah who..."]"

Your Desire Section: ________________________________

A - ACTION (CTA)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Goal: Tell them exactly what to do next

Techniques:
• Be specific and direct
• Create urgency
• Reduce risk (guarantees)
• Make it easy

Strong CTAs:
□ "Click below to [get specific benefit] →"
□ "Start your free trial — no credit card needed"
□ "Join [X] others who already [achieved result]"
□ "Get instant access for [price/free]"

Your CTA: ________________________________`
  },
  { 
    title: "50 Reel Ideas for Any Brand", 
    category: "Design & Content", 
    description: "Curated list of proven reel concepts adaptable to any industry or niche.",
    content: `🎬 50 REEL IDEAS FOR ANY BRAND

EDUCATIONAL (1-10)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
1. "X things I wish I knew before [topic]"
2. "Common mistakes in [industry] and how to avoid them"
3. "Beginner's guide to [topic] in 30 seconds"
4. "The difference between [A] and [B]"
5. "How to [achieve result] in [time frame]"
6. "Signs you need to [action]"
7. "[Topic] explained like you're 5"
8. "Tools I use daily for [task]"
9. "Quick tip that changed my [area]"
10. "If you struggle with [problem], try this"

BEHIND-THE-SCENES (11-20)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
11. "Day in the life at [company]"
12. "How we make [product/service]"
13. "Office/workspace tour"
14. "Meet the team: [Name]"
15. "Packing orders/fulfillment process"
16. "Before and after: [project]"
17. "What we do when things go wrong"
18. "A typical Monday at [company]"
19. "How we handle [specific task]"
20. "The making of [campaign/product]"

TRENDING & RELATABLE (21-30)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
21. "POV: You're a [your role] and [situation]"
22. "Things only [audience] understand"
23. "Expectation vs. Reality: [topic]"
24. "When [relatable situation]... [reaction]"
25. "Tell me you're a [role] without telling me"
26. "[Trending audio] + your twist"
27. "Types of [customers/clients]"
28. "If [product] was a person"
29. "Red flags in [industry]"
30. "Hot takes about [topic]"

PROMOTIONAL (31-40)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
31. "Unboxing our [product]"
32. "Why customers love [product feature]"
33. "3 ways to use [product]"
34. "New arrival alert"
35. "Customer transformation/results"
36. "Limited time offer announcement"
37. "Product comparison (yours vs others)"
38. "FAQ about [product/service]"
39. "How [product] solves [problem]"
40. "Customer reviews/testimonials"

ENGAGEMENT (41-50)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
41. "This or that?" (choices related to niche)
42. "Caption this..."
43. "Guess the [blank]"
44. "What would you do if..."
45. "Rate this [1-10]"
46. "Unpopular opinion about [topic]"
47. "Q&A: answering your questions"
48. "Duet/Stitch invitation content"
49. "Share this with someone who [action]"
50. "Comment [emoji] if you relate"

💡 PRO TIPS:
• Hook viewers in first 1-2 seconds
• Use captions for accessibility
• Keep it 7-15 seconds for best retention
• Post 3-5 reels per week minimum
• Save trending audios for later`
  },
  { 
    title: "Social Media Calendar", 
    category: "Strategy", 
    description: "Weekly and monthly planning template for social media content scheduling.",
    content: `📅 SOCIAL MEDIA CONTENT CALENDAR

MONTH: [Month Year]
Brand: [Brand Name]
Platforms: [IG / TikTok / LinkedIn / etc.]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

WEEKLY CONTENT THEMES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Monday: Motivation Monday / Week Preview
Tuesday: Tips Tuesday / Educational
Wednesday: Behind-the-Scenes / Story Day
Thursday: Throwback / Testimonials
Friday: Fun Friday / Engagement
Saturday: User-Generated / Community
Sunday: Rest / Batch Creation Day

DAILY POSTING SCHEDULE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
| Platform  | Frequency | Best Times       |
|-----------|-----------|------------------|
| Instagram | 1x/day    | 11am, 7pm        |
| Stories   | 3-5x/day  | Throughout       |
| TikTok    | 1-3x/day  | 7am, 12pm, 10pm  |
| LinkedIn  | 1x/day    | 8am, 12pm        |
| Twitter/X | 3-5x/day  | 8am, 12pm, 5pm   |

WEEKLY CONTENT TEMPLATE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

WEEK OF: [Date Range]

MONDAY
□ Post Type: [Reel/Carousel/Static]
□ Topic: [Content topic]
□ Caption: [Draft]
□ Hashtags: [Group]
□ CTA: [Action]
□ Status: [ ] Drafted [ ] Scheduled [ ] Posted

TUESDAY
□ Post Type: [Type]
□ Topic: [Topic]
□ Caption: [Draft]
□ Hashtags: [Group]
□ CTA: [Action]
□ Status: [ ] Drafted [ ] Scheduled [ ] Posted

[Continue for Wed-Sat...]

MONTHLY CONTENT GOALS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
□ Total Posts: [X]
□ Reels: [X]
□ Carousels: [X]
□ Stories: [X]
□ Collaborations: [X]

KEY DATES THIS MONTH
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
• [Date]: [Holiday/Event]
• [Date]: [Product Launch]
• [Date]: [Campaign Start]
• [Date]: [Special Day]

HASHTAG GROUPS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Group A (Niche): #hashtag1 #hashtag2...
Group B (Industry): #hashtag1 #hashtag2...
Group C (Community): #hashtag1 #hashtag2...
Branded: #YourBrandHashtag`
  },
  { 
    title: "Email Newsletter Template", 
    category: "Copywriting", 
    description: "Engaging email structure optimized for open rates and click-through.",
    content: `📧 EMAIL NEWSLETTER TEMPLATE

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

SUBJECT LINE OPTIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Format 1: "[Curiosity] + [Benefit]"
Format 2: "How to [achieve result] (new method)"
Format 3: "[Number] [things] you need to [action]"
Format 4: "🔥 [Timely topic] — [value hook]"

Your Subject Line: ________________________________
Preview Text: ________________________________

EMAIL STRUCTURE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. OPENING HOOK (2-3 lines)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Start with ONE of these:
□ Personal story opener
□ Provocative question
□ Surprising stat/fact
□ Timely reference
□ Direct value statement

Template:
"Hey [First Name],

[Hook that relates to topic and creates curiosity]"

2. THE VALUE (Main content)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Keep paragraphs SHORT (2-3 sentences max)

Structure Options:
• Listicle: "3 ways to [achieve result]"
• Story: Problem → Solution → Result
• Tutorial: Step-by-step guide
• Curated: Top picks/recommendations

Use formatting:
✓ Bullet points for scanning
✓ Bold for key phrases
✓ Subheadings to break up text

3. THE CTA (Clear & Specific)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Primary CTA Button: [ACTION VERB] + [BENEFIT]
Examples:
• "Get the Free Template →"
• "Watch the Tutorial"
• "Shop the Collection"
• "Claim Your Spot"

4. SIGN-OFF
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
"[Friendly closing],
[Your Name]
[Title/Brand]

P.S. [Secondary offer or reminder]"

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📊 OPTIMIZATION TIPS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
• Subject lines: Under 50 characters
• Preview text: 35-90 characters  
• Email length: 50-125 words optimal
• One primary CTA per email
• Send times: Test Tues-Thurs, 10am or 2pm
• Personalize: Use [First Name] tokens
• Mobile-first: 60%+ open on mobile`
  },
  { 
    title: "Brand Voice Guidelines", 
    category: "Strategy", 
    description: "Template for defining and documenting your brand's tone and communication style.",
    content: `🎨 BRAND VOICE GUIDELINES

BRAND: [Brand Name]
Version: [1.0]
Last Updated: [Date]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. BRAND PERSONALITY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
If our brand was a person, they would be:
• [Personality trait 1]
• [Personality trait 2]
• [Personality trait 3]

They would NEVER be:
• [Anti-trait 1]
• [Anti-trait 2]
• [Anti-trait 3]

2. VOICE ATTRIBUTES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Attribute 1: [Word] 
Definition: [What this means for our content]
Example: [Sample sentence]

Attribute 2: [Word]
Definition: [What this means]
Example: [Sample sentence]

Attribute 3: [Word]
Definition: [What this means]
Example: [Sample sentence]

3. TONE VARIATIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Our voice stays consistent, but tone shifts:

SOCIAL MEDIA: Casual, playful, emoji-friendly
"Can't stop, won't stop 🔥 New drop loading..."

WEBSITE: Professional, clear, benefit-focused
"Our solution helps teams save 10+ hours weekly."

EMAIL: Warm, personal, conversational
"Hey Sarah, we thought you'd love this..."

SUPPORT: Empathetic, helpful, solution-oriented
"We understand how frustrating this must be..."

4. LANGUAGE DO'S & DON'TS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
WE SAY:              WE DON'T SAY:
Simple               Complicated jargon
You/Your             The customer
We're here to help   Contact support
Let's figure this    It's not our fault
Check this out       Click here

5. GRAMMAR & STYLE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
• Contractions: [Yes/No] — "We're" vs "We are"
• Oxford comma: [Yes/No]
• Exclamation points: [Sparingly/Frequently/Never]
• Emoji use: [Heavy/Light/None]
• Capitalization: [Sentence case/Title Case]

6. EXAMPLES BY PLATFORM
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
INSTAGRAM CAPTION:
✓ "[Good example that matches voice]"
✗ "[Bad example that doesn't match]"

EMAIL SUBJECT:
✓ "[Good example]"
✗ "[Bad example]"

AD COPY:
✓ "[Good example]"
✗ "[Bad example]"

7. VOCABULARY BANK
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Power words we use:
[Word 1], [Word 2], [Word 3]...

Words we avoid:
[Word 1], [Word 2], [Word 3]...`
  },
];

const Templates = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredTemplates = activeCategory === "All" 
    ? templates 
    : templates.filter(t => t.category === activeCategory);

  return (
    <Layout>
      <section className="py-20">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
              Templates Library
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Ready-to-Use Templates
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Professional marketing templates you can view, copy, and customize for your campaigns.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveCategory(category)}
                className="rounded-full"
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Templates Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTemplates.map((template, index) => (
              <div 
                key={index} 
                className="animate-fade-up opacity-0" 
                style={{ animationDelay: `${index * 50}ms`, animationFillMode: 'forwards' }}
              >
                <TemplateCard {...template} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Templates;
