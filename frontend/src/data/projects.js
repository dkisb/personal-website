import { React as ReactIcon, ViteJS, TailwindCSS, Java, PostgreSQL } from 'developer-icons';
import coverPhoto from '../assets/ai-portfolio.svg';
import twentyOneCover from '../assets/21-header.svg';
import askMateCover from '../assets/ask-mate-head.svg';

export const projects = [
  {
    title: '21 Card game',
    description: 'A simple blackjack card game based on an old hungarian game called "21".',
    image: twentyOneCover,
    tech: [ReactIcon, Java, PostgreSQL, TailwindCSS],
    github: 'https://github.com/dkisb/twenty-one',
    demo: '',
    isNew: true,
  },
  {
    title: 'Ask Mate',
    description: 'A simple Q&A app where you can ask questions and get answers from the community.',
    image: askMateCover,
    tech: [ReactIcon, Java, PostgreSQL, TailwindCSS],
    github: 'https://github.com/yourname/ai-portfolio',
    demo: 'https://ai-portfolio.vercel.app',
    isNew: false,
  },
  {
    title: 'AI Portfolio',
    description: 'A portfolio powered by GPT and Tailwind.',
    image: coverPhoto,
    tech: [ReactIcon, ViteJS, TailwindCSS],
    github: 'https://github.com/yourname/ai-portfolio',
    demo: 'https://ai-portfolio.vercel.app',
    isNew: true,
  },
  {
    title: 'AI Portfolio',
    description: 'A portfolio powered by GPT and Tailwind.',
    image: coverPhoto,
    tech: [ReactIcon, ViteJS, TailwindCSS],
    github: 'https://github.com/yourname/ai-portfolio',
    demo: 'https://ai-portfolio.vercel.app',
    isNew: true,
  },
  {
    title: 'AI Portfolio',
    description: 'A portfolio powered by GPT and Tailwind.',
    image: coverPhoto,
    tech: [ReactIcon, ViteJS, TailwindCSS],
    github: 'https://github.com/yourname/ai-portfolio',
    demo: 'https://ai-portfolio.vercel.app',
    isNew: true,
  },
  {
    title: 'AI Portfolio',
    description: 'A portfolio powered by GPT and Tailwind.',
    image: coverPhoto,
    tech: [ReactIcon, ViteJS, TailwindCSS],
    github: 'https://github.com/yourname/ai-portfolio',
    demo: 'https://ai-portfolio.vercel.app',
    isNew: false,
  },
];
