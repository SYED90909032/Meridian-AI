import { SpringConfig, SpringPresetName } from './types';

export const SPRING_PRESETS: Record<SpringPresetName, SpringConfig> = {
  CRITICAL_DAMPED: { mass: 1, stiffness: 200, damping: 22 },
  BOUNCY: { mass: 1, stiffness: 120, damping: 8 },
  SMOOTH: { mass: 1, stiffness: 80, damping: 15 }
};

export const COLORS = {
  // Creative Corporate Blue Theme
  // Background: White
  base: '#ffffff', 
  // Text: Deep Navy (#112D4E)
  navy: '#112D4E', 
  // Accent: Strong Blue (#3F72AF)
  accent: '#3F72AF', 
  // Secondary: Bright Blue (#3F72AF)
  stone: '#3F72AF',
  // Glass Border: Light Blue with opacity
  glassBorder: 'rgba(73, 136, 196, 0.3)',
};

export const CEO = {
  name: "Syed Rauf",
  role: "CEO & Founder",
  bio: "Visionary architect of the post-scarcity economy. Leading the charge in human-centric AI systems.",
  quote: "We don't just build intelligence; we architect its integrity."
};

export const METHODOLOGY = [
  { step: '01', title: 'Discovery', desc: 'Mapping your neural topology.' },
  { step: '02', title: 'Architecture', desc: 'Designing the cognitive framework.' },
  { step: '03', title: 'Synthesis', desc: 'Training and alignment phases.' },
  { step: '04', title: 'Evolution', desc: 'Recursive self-improvement.' },
];

export const SERVICES = [
  // --- Data Collection & Transcription ---
  {
    id: 'speech-data',
    title: 'Authentic Speech Data',
    subtitle: 'Data Collection',
    description: 'We help build voice assistants and speech systems that understand everyone. By working with native speakers across 150+ languages—with deep expertise in all 22 Indian languages—we capture the true diversity of human speech: different accents, dialects, and natural conversational styles.',
    question: 'Do you speak everyone\'s language?',
    icon: 'Mic'
  },
  {
    id: 'transcription',
    title: 'Audio & Video Transcription',
    subtitle: 'Transcription',
    description: 'We turn your raw media—meetings, interviews, lectures—into precise, searchable text. Our transcripts include accurate time-stamping and speaker identification, creating the reliable "ground truth" needed for training or for compliance in fields like legal and healthcare.',
    question: 'Is your data lost in translation?',
    icon: 'FileAudio'
  },
  {
    id: 'custom-vision',
    title: 'Custom Image & Video',
    subtitle: 'Data Acquisition',
    description: 'Off-the-shelf datasets often miss the specific scenarios your AI needs to see. We create custom collections for your computer vision projects, capturing targeted actions, objects, or environments (like "warehouse robotics" or "retail customer behavior") to train systems for real-world tasks.',
    question: 'Can your AI see the real world?',
    icon: 'Camera'
  },

  // --- AI Training & Annotation ---
  {
    id: 'speech-annotation',
    title: 'Precision Speech Annotation',
    subtitle: 'Audio Labeling',
    description: 'We go beyond "what was said" to capture "how it was meant." Our team labels audio for emotion, tone, speaker intent, and background noise, helping you build voice systems that recognize urgency, sarcasm, or calm.',
    question: 'Can your AI hear sarcasm?',
    icon: 'Volume2'
  },
  {
    id: 'vision-annotation',
    title: 'Computer Vision Annotation',
    subtitle: 'Vision Labeling',
    description: 'For applications where safety and accuracy are critical—like autonomous vehicles or medical imaging—we provide meticulous labeling. Using bounding boxes, polygons, and keypoints, we identify and track objects in images and video with high precision.',
    question: 'Is your autopilot blind?',
    icon: 'Scan'
  },
  {
    id: 'nlp-labeling',
    title: 'Text Data Labeling',
    subtitle: 'NLP Training',
    description: 'We help your models comprehend language by tagging text for key information: identifying names and places (NER), classifying user intent, and analyzing sentiment. This powers more responsive chatbots, search engines, and content analyzers.',
    question: 'Does your chatbot understand intent?',
    icon: 'MessageSquareCode'
  },
  {
    id: 'multimodal',
    title: 'Multimodal Annotation',
    subtitle: 'Sensory Integration',
    description: 'The future of AI integrates multiple senses. We synchronize labeling across linked data, like aligning a video of a person with their speech and a text description. This holistic training is essential for advanced AI that can process the world as humans do.',
    question: 'Can you connect the senses?',
    icon: 'Layers'
  },

  // --- Translation & Localization ---
  {
    id: 'translation',
    title: 'Translation & Adaptation',
    subtitle: 'Localization',
    description: 'We translate and adapt your documents, software, and digital content into 400+ languages. Our focus is on cultural relevance and preserving your brand\'s voice, so your product feels like it was made for each local market.',
    question: 'Are you truly global?',
    icon: 'Languages'
  },
  {
    id: 'dubbing',
    title: 'Dubbing & Voice-Over',
    subtitle: 'Audio Localization',
    description: 'We make your multimedia content globally accessible. Our full-service audio localization includes script adaptation, casting native-speaking voice talent, and lip-sync dubbing for videos, e-learning courses, and podcasts.',
    question: 'How does your brand sound abroad?',
    icon: 'Mic2'
  },

  // --- Human-Led Evaluation & Safety ---
  {
    id: 'rlhf',
    title: 'RLHF & Human Feedback',
    subtitle: 'Model Alignment',
    description: 'We help align your Large Language Models with human expectations. Our experts compare and rank AI responses, teaching your model to generate more helpful, harmless, and honest answers.',
    question: 'Is your model aligned with humanity?',
    icon: 'ThumbsUp'
  },
  {
    id: 'fact-checking',
    title: 'Fact-Checking',
    subtitle: 'Risk Mitigation',
    description: 'We tackle the risk of AI "confidently" getting things wrong. Our specialists verify AI-generated text against trusted sources, which is crucial for deploying AI in law, medicine, or finance.',
    question: 'Is your AI lying to you?',
    icon: 'ShieldAlert'
  },
  {
    id: 'agent-audit',
    title: 'Agent Reasoning Audits',
    subtitle: 'Chain of Thought',
    description: 'When AI agents perform multi-step tasks (like coding or analysis), we audit their step-by-step "chain of thought." This ensures they are reasoning correctly, not just arriving at a lucky answer.',
    question: 'Who checks the math?',
    icon: 'GitBranch'
  },
  {
    id: 'media-eval',
    title: 'Generated Media Evaluation',
    subtitle: 'Quality Assurance',
    description: 'For AI that creates images or video, we conduct quality reviews to catch visual errors, unnatural elements, or artifacts, ensuring outputs meet professional standards.',
    question: 'Is the glitch a feature?',
    icon: 'Image'
  },
  {
    id: 'moderation',
    title: 'Content Moderation',
    subtitle: 'Trust & Safety',
    description: 'We help protect your community and platform. Our teams review user-generated and AI-generated content to identify and filter policy violations, hate speech, and violence.',
    question: 'Is your platform safe?',
    icon: 'Lock'
  },
  {
    id: 'search-eval',
    title: 'Search Evaluation',
    subtitle: 'Relevance',
    description: 'We use human intuition to evaluate your search engine or recommendation system. By judging result quality and relevance, we provide the feedback needed to refine your algorithms and improve user satisfaction.',
    question: 'Are you finding what matters?',
    icon: 'Search'
  }
];