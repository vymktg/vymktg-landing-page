export const NAVIGATION_ITEM = [
  {
    title: "Home",
    href: import.meta.env.BASE_URL,
  },
  {
    title: "How it Works",
    href: `${import.meta.env.BASE_URL}how-it-works`,
  },
  {
    title: "Services",
    href: `${import.meta.env.BASE_URL}services`,
  },
  {
    title: "Insights",
    href: `${import.meta.env.BASE_URL}insights`,
  },
  {
    title: "About",
    href: `${import.meta.env.BASE_URL}about`,
  },
];

export const PARTNER_LIST = [
  { url: "burger-king.png" },
  { url: "black-bear-diner.png" },
  { url: "chill's.png" },
  { url: "slc-med-spa.png" },
  { url: "meridian-restaurants.png" },
  { url: "american-pet-nutrition.png" },
  { url: "chic-vintage.png" },
  { url: "romanric.png" },
  { url: "pate-and-butter.png" },
  { url: "cp.png" },
];

export const PROJECT_LIST = [
  {
    url: "",
    name: "Project 1",
    image_url:
      "https://web.sociolib.com/centro/wp-content/uploads/sites/3/2023/01/31.jpg",
  },
  {
    url: "",
    name: "Project 2",
    image_url:
      "https://web.sociolib.com/centro/wp-content/uploads/sites/3/2023/01/34.jpg",
  },
  {
    url: "",
    name: "Project 3",
    image_url:
      "https://web.sociolib.com/centro/wp-content/uploads/sites/3/2023/01/28.jpg",
  },
];

export const SERVICE_LIST = [
  // {
  //   title: "Social Media Management",
  //   description: "Streamlined your social media accounts with engaging content",
  //   detail: "Managing social media accounts effectively can be time-consuming and overwhelming. My social media management services aim to alleviate this burden. I will ensure timely updates, engaging content, and consistent brand representation across platforms. This includes monitoring audience engagement, analyzing metrics, and implementing strategies to maximize reach and impact. It involves tasks such as content creation, scheduling, community and influencers management, and staying updated with the latest social media trends and algorithms.",
  //   icon: "tabler:social",
  //   services_detail: [
  //     {
  //       title: "Content Creation",
  //       description: "Tailored social media content to engage your audience, including eye-catching visuals and compelling captions."
  //     },
  //     {
  //       title: "Analytics Insights",
  //       description: "Data-driven strategies using in-depth analytics to optimize your social media performance and boost ROI."
  //     },
  //     {
  //       title: "Community Engagement",
  //       description: "Foster relationships with your online community through timely responses and active interaction."
  //     },
  //     {
  //       title: "Ad Campaigns",
  //       description: "Precision-targeted advertising to expand your reach and drive conversions on social media platforms."
  //     },
  //     {
  //       title: "Influencer Collaboration",
  //       description: "Collaborate with industry influencers to increase brand visibility and credibility within your niche."
  //     }
  //   ]
  // },
  {
    title: "Website and SEO",
    description: `Boost your online visibility with tailored SEO strategies and website management`,
    detail: "Maximize your website's potential with my website management and optimization services which include updated content and performance optimization. By ensuring a seamless user experience, improved search engine visibility, and optimal performance, I'll help you attract more visitors and boost conversions.",
    icon: "carbon:dns-services",
    services_detail: [
      {
        title: "Website Development",
        description: "Design and build user-friendly, responsive websites that reflect your brand and business objectives."
      },
      {
        title: "Search Engine Optimization (SEO)",
        description: "Optimize your website to rank higher on search engines, increasing organic traffic and attracting quality leads."
      },
      {
        title: "Content Management",
        description: "Keep your website up to date with fresh, relevant content that resonates with your target audience."
      },
      {
        title: "Performance Analysis",
        description: "Regular analysis and adjustments ensure that your website is continually improving."
      }
    ]
  },
  {
    title: "CRM Marketing",
    description:
      "Nurturing a positive reputation by building trust to drive sustainable business growth.",
    detail:
      "Maintaining a positive online reputation is essential for your business. I will assist you to effectively monitoring and managing online reviews, addressing customer feedback, and building a strong brand image. By prioritizing cultivating trust and maintaining a stellar reputation, you can foster customer loyalty and support sustainable growth.",
    icon: "tabler:award",
    services_detail: [
      {
        title: "Customer Data Management",
        description: "Organize and manage customer data to gain insights and create personalized marketing campaigns."
      },
      {
        title: "Email Marketing",
        description: "Engage your audience through targeted email campaigns that deliver the right message at the right time."
      },
      {
        title: "Automation and Personalization",
        description: "Utilize CRM tools to automate repetitive tasks and personalize customer interactions."
      },
      {
        title: "Feedback and Analytics",
        description: "Measure the effectiveness of your CRM efforts and make data-driven improvements."
      },
      {
        title: "Hubspot CRM report",
        description: ""
      }
    ]
  },
  // {
  //   title: "Email & SMS Marketing",
  //   description:
  //     "Enhance customer engagement, nurture relationships with direct communication",
  //   detail:
  //     "Both email and text marketing are valuable tools for businesses to connect with their target audience, deliver relevant and personalized content, and drive engagement and conversions. When used strategically and in compliance with applicable regulations and guidelines, email and text marketing can be powerful channels for effective communication and customer relationship-building.",
  //   icon: "mdi:email-seal-outline",
  //   services_detail: [
  //     {
  //       title: "Email Campaigns",
  //       description: "Craft and deliver engaging email marketing campaigns tailored to your audience for increased engagement and conversions."
  //     },
  //     {
  //       title: "SMS Blasts",
  //       description: "Send targeted SMS messages to reach your customers with time-sensitive promotions and updates."
  //     },
  //     {
  //       title: "Segmentation Strategies",
  //       description: "Divide your audience into segments for more personalized email and SMS communication, enhancing relevance and response rates."
  //     },
  //     {
  //       title: "Automation Sequences",
  //       description: "Set up automated email and SMS sequences to nurture leads and guide them through the customer journey."
  //     },
  //     {
  //       title: "Analytics & Optimization",
  //       description: "Monitor campaign performance, gather insights, and optimize future strategies for better results in email and SMS marketing."
  //     }
  //   ]
  // },
  {
    title: "Paid Advertising",
    description: "Fuel your growth with effective paid advertising Campaigns",
    detail:
      "Paid advertising campaigns can be an effective way for small businesses to accelerate their growth. I will help develop and manage targeted ad campaigns on platforms such as Google Ads, Meta, Wix…etc. Through careful strategy and optimization, businesses can increase their brand visibility, attract new customers, and expand their reach.",
    icon: "icons8:advertising",
    services_detail: [
      {
        title: "Campaign Strategy",
        description: "Develop a tailored advertising strategy based on your goals, target audience, and budget."
      },
      {
        title: "Ad Creation",
        description: "Designs compelling ad creatives that grab attention and drive clicks."
      },
      {
        title: "Campaign Management",
        description: "Monitor and optimize your campaigns to ensure you get the best conversion."
      },
      {
        title: "Performance Reporting",
        description: "Detailed reporting keeps you informed about the success of your advertising efforts."
      }
    ]
  },
  {
    title: "Content Creation",
    description: "Harness the power of compelling and valuable content",
    detail:
      "Engaging and informative content plays a vital role in attracting and retaining customers. My focus is to craft captivating blog posts, attention-grabbing videos, and visually appealing infographics that align with your brand. By delivering high-quality content, businesses can drive website traffic, boost engagement, and foster brand loyalty.",
    icon: "tabler:award",
    services_detail: [
      {
        title: "Content Strategy",
        description: "I work with you to develop a content strategy that aligns with your goals and resonates with your target audience."
      },
      {
        title: "Content Creation",
        description: "From blog posts and articles to videos and infographics, I produce a wide range of content types to keep your audience engaged."
      },
      {
        title: "Visual Design",
        description: "Create eye-catching visuals that enhance your content and brand identity."
      },
      {
        title: "Content Optimization",
        description: "Ensure that your content is not only creative but also optimized for search engines to maximize its reach."
      }
    ]
  },
];

export const BY_NUMBERS = [
  {
    number: "12",
    title: "Clients",
  },
  {
    number: "8",
    title: "Partners",
  },
  {
    number: "20",
    title: "Projects",
  },
  {
    number: "5",
    title: "Years",
  },
];

export const CTA_CALCULATOR = [
  {
    title: "Strategic Planning",
    description:
      "Strategically planned campaigns tailored to your goals and budget. ",
  },
  {
    title: "Efficient Execution",
    description: "Precise execution and optimization for impactful results.",
  },
  {
    title: "Nurturing Tactics",
    description: " Personalized approach to nurture loyalty and steady growth.",
  },
];

export const FAQ_LIST = [
  {
    image_url:
      "https://demos.creative-tim.com/soft-ui-design-system-pro/assets/img/illustrations/rocket-white.png",
    question: "Can you work within my limited marketing budget?",
    answer:
      "Absolutely! Working with small budgets is a common challenge, and I specialize in helping businesses make the most of their resources. I can identify cost-effective tactics, prioritize activities with the highest impact, and leverage affordable digital platforms to optimize your marketing within your financial constraints.",
  },
  {
    image_url:
      "https://demos.creative-tim.com/soft-ui-design-system-pro/assets/img/illustrations/settings.png",
    question: "How can hiring you be cost-effective for my business?",
    answer:
      "By leveraging my expertise and industry knowledge, I can help you make informed decisions, avoid costly mistakes, and allocate your budget wisely. This leads to optimized marketing strategies and a higher return on investment (ROI) for your marketing efforts.",
  },
  {
    image_url:
      "https://demos.creative-tim.com/soft-ui-design-system-pro/assets/img/illustrations/chat.png",
    question:
      "How do I know if my business needs the assistance of a marketer?",
    answer: `If you're struggling to achieve your marketing goals, lack a clear strategy, or need fresh insights and ideas, it's a good indication that your business could benefit from my assistance as a marketer. I can assess your current efforts, identify areas for improvement, and develop a customized plan to drive growth and increase brand visibility.`,
  },
  {
    image_url:
      "https://demos.creative-tim.com/soft-ui-design-system-pro/assets/img/illustrations/folder.png",
    question:
      "How long does it usually take to see tangible results from marketing efforts?",
    answer:
      "The timeframe can vary depending on the industry, target audience, and chosen marketing channels. Some strategies may yield immediate results, while others require more time to gain traction. During our collaboration, I will set realistic expectations and develop a timeline based on your objectives and business circumstances.",
  },
  // , {
  //   question: 'Will you provide guidance on maximizing my marketing efforts while minimizing expenses?',
  //   answer: 'Absolutely! One of my primary objectives as a marketing consultant is to help businesses optimize their marketing efforts within their budget limitations. I can provide strategies to maximize your ROI, identify cost-effective marketing channels, and suggest innovative approaches to achieve your marketing goals while minimizing expenses.'
  // }
];

export const HOW_IT_WORKS_STEP = [
  {
    title: "Initial Meeting",
    subtitle: "(30m - 1 hr)",
    description: "Let’s discuss your needs and ensure the perfect match.",
  },
  {
    title: "Proposal and Quote",
    description:
      "I will follow up with a proposal to start the FREE 30-days service.",
  },
  {
    title: "Kick-Off Meeting",
    subtitle: "(1 - 2hrs)",
    description:
      "Meeting to dive deeply into the project requirements, prioritize tasks, and set timelines and goals.",
  },
  {
    title: "Measure it",
    description: "We will track and measure the results of our efforts.",
  },
];

export const SITE = {
  name: "Vymktg",
  title: "Vy Trinh Marketer",
  description: "Professional Digital Marketer",
  url: "https://vymktg.github.io/vymktg.com",
  githubUrl: "https://github.com/vymktg/vymktg.com",
  email: "fromvtovintage@gmail.com",
  phoneNumber: "+1 801 425 3581",
  image:
    "https://raw.githubusercontent.com/one-aalam/astro-ink/main/public/astro-banner.png",
  // YT video channel Id (used in media.astro)
  ytChannelId: "",
  // Optional, user/author settings (example)
  // Author: name
  author: "", // Example: Fred K. Schott
  // Author: Twitter handler
  authorTwitter: "", // Example: FredKSchott
  // Author: Image external source
  authorImage: "", // Example: https://pbs.twimg.com/profile_images/1272979356529221632/sxvncugt_400x400.jpg, https://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png
  // Author: Bio
  authorBio:
    "Crisp, minimal, personal blog theme for Astro. Crisp, minimal, personal blog theme for Astro. Crisp, minimal, personal blog theme for Astro",
};
