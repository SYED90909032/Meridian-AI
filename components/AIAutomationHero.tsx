"use client";
import React from 'react';
import Component from './ui/stacking-card';

const projects = [
  {
    title: 'The Daily Pattern',
    description:
      'Think about the work your team does every single day. Reading emails and forwarding them to the right person. Updating spreadsheets after every new order. Sending follow-up messages to leads who filled out a form three days ago. This is the pattern your business runs on and nobody stops to question it.',
    link: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=500&auto=format&fit=crop',
    color: '#5196fd',
  },
  {
    title: 'The Time Problem',
    description:
      'Generating the same report every Friday afternoon. Scheduling meetings back and forth until a time works for everyone. None of this work requires thinking. It just requires time. And that is exactly the problem because your team has a limited amount of time every day.',
    link: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=500&auto=format&fit=crop',
    color: '#8f89ff',
  },
  {
    title: 'The Real Cost',
    description:
      'Most of your team hours get eaten by tasks that follow the same steps every single time. The real cost is not the salary you pay for this work. The real cost is what your team could have done instead. The ideas they did not explore. The problems they did not solve. The growth that did not happen because everyone was too busy being busy.',
    link: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=500&auto=format&fit=crop',
    color: '#13006c',
  },
  {
    title: 'The AI Agent',
    description:
      'An AI agent is a system that takes over those exact tasks. You tell it what to do, when to do it, and what rules to follow. It runs on its own after that. It reads the trigger, follows the steps, makes decisions where needed, and finishes the job. No reminders. No supervision. No mistakes from rushing at the end of a long day.',
    link: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=500&auto=format&fit=crop',
    color: '#ed649e',
  },
  {
    title: 'The Result',
    description:
      'Your team keeps doing the work that actually needs a human mind. Everything else just gets done in the background. No forgotten follow-ups. No missed invoices. No reports that nobody had time to build. The work that used to take hours now takes seconds. And your team finally has the space to do what you actually hired them for.',
    link: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=500&auto=format&fit=crop',
    color: '#fd521a',
  },
];

export default function AIAutomationHero() {
  return (
    <Component projects={projects} />
  );
}
