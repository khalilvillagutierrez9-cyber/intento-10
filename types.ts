import React from 'react';

export interface Testimonial {
  id: number;
  name: string;
  age: number;
  text: string;
  symptomRelief: string[];
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface ModuleItem {
  title: string;
  description: string;
  icon: React.ComponentType<any>;
}

export interface BonusItem {
  title: string;
  description: string;
  value: string;
  imageUrl: string;
}