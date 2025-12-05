import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  modulesSidebar: [
    {
      type: 'doc',
      id: 'modules/index', // Link to the main modules introduction page
      label: 'Introduction to Modules',
    },
    {
      type: 'category',
      label: 'Module 1: The Robotic Nervous System (ROS 2)',
      items: [
        'modules/ros2-nervous-system', // Main content for Module 1
      ],
    },
    {
      type: 'category',
      label: 'Module 2: The Digital Twin (Gazebo & Unity)',
      items: [
        'modules/digital-twin', // Main content for Module 2
      ],
    },
    {
      type: 'category',
      label: 'Module 3: The AI-Robot Brain (NVIDIA Isaac™)',
      items: [
        'modules/ai-robot-brain', // Main content for Module 3
      ],
    },
    {
      type: 'category',
      label: 'Module 4: Vision-Language-Action (VLA)',
      items: [
        'modules/vla', // Main content for Module 4
      ],
    },
    {
      type: 'doc',
      id: 'hardware-context', // Link to the Hardware Context page
      label: 'Hardware Context',
    },
    {
      type: 'doc',
      id: 'constitution', // Link to the Constitution page
      label: 'Constitution',
    },
    {
      type: 'doc',
      id: 'code-examples/index', // Link to the Code Examples introduction page
      label: 'Code Examples',
    },
  ],
};

export default sidebars;
