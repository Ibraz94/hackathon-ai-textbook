import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/physical-ai-textbook/__docusaurus/debug',
    component: ComponentCreator('/physical-ai-textbook/__docusaurus/debug', '1b0'),
    exact: true
  },
  {
    path: '/physical-ai-textbook/__docusaurus/debug/config',
    component: ComponentCreator('/physical-ai-textbook/__docusaurus/debug/config', '4ef'),
    exact: true
  },
  {
    path: '/physical-ai-textbook/__docusaurus/debug/content',
    component: ComponentCreator('/physical-ai-textbook/__docusaurus/debug/content', '02c'),
    exact: true
  },
  {
    path: '/physical-ai-textbook/__docusaurus/debug/globalData',
    component: ComponentCreator('/physical-ai-textbook/__docusaurus/debug/globalData', '58f'),
    exact: true
  },
  {
    path: '/physical-ai-textbook/__docusaurus/debug/metadata',
    component: ComponentCreator('/physical-ai-textbook/__docusaurus/debug/metadata', '647'),
    exact: true
  },
  {
    path: '/physical-ai-textbook/__docusaurus/debug/registry',
    component: ComponentCreator('/physical-ai-textbook/__docusaurus/debug/registry', '125'),
    exact: true
  },
  {
    path: '/physical-ai-textbook/__docusaurus/debug/routes',
    component: ComponentCreator('/physical-ai-textbook/__docusaurus/debug/routes', 'aa1'),
    exact: true
  },
  {
    path: '/physical-ai-textbook/blog',
    component: ComponentCreator('/physical-ai-textbook/blog', 'a89'),
    exact: true
  },
  {
    path: '/physical-ai-textbook/blog/archive',
    component: ComponentCreator('/physical-ai-textbook/blog/archive', '23c'),
    exact: true
  },
  {
    path: '/physical-ai-textbook/blog/authors',
    component: ComponentCreator('/physical-ai-textbook/blog/authors', 'db7'),
    exact: true
  },
  {
    path: '/physical-ai-textbook/blog/authors/all-sebastien-lorber-articles',
    component: ComponentCreator('/physical-ai-textbook/blog/authors/all-sebastien-lorber-articles', 'abc'),
    exact: true
  },
  {
    path: '/physical-ai-textbook/blog/authors/yangshun',
    component: ComponentCreator('/physical-ai-textbook/blog/authors/yangshun', 'c53'),
    exact: true
  },
  {
    path: '/physical-ai-textbook/blog/first-blog-post',
    component: ComponentCreator('/physical-ai-textbook/blog/first-blog-post', '1c9'),
    exact: true
  },
  {
    path: '/physical-ai-textbook/blog/long-blog-post',
    component: ComponentCreator('/physical-ai-textbook/blog/long-blog-post', '309'),
    exact: true
  },
  {
    path: '/physical-ai-textbook/blog/mdx-blog-post',
    component: ComponentCreator('/physical-ai-textbook/blog/mdx-blog-post', 'da9'),
    exact: true
  },
  {
    path: '/physical-ai-textbook/blog/tags',
    component: ComponentCreator('/physical-ai-textbook/blog/tags', '87b'),
    exact: true
  },
  {
    path: '/physical-ai-textbook/blog/tags/docusaurus',
    component: ComponentCreator('/physical-ai-textbook/blog/tags/docusaurus', '735'),
    exact: true
  },
  {
    path: '/physical-ai-textbook/blog/tags/facebook',
    component: ComponentCreator('/physical-ai-textbook/blog/tags/facebook', '736'),
    exact: true
  },
  {
    path: '/physical-ai-textbook/blog/tags/hello',
    component: ComponentCreator('/physical-ai-textbook/blog/tags/hello', '137'),
    exact: true
  },
  {
    path: '/physical-ai-textbook/blog/tags/hola',
    component: ComponentCreator('/physical-ai-textbook/blog/tags/hola', 'da4'),
    exact: true
  },
  {
    path: '/physical-ai-textbook/blog/welcome',
    component: ComponentCreator('/physical-ai-textbook/blog/welcome', '983'),
    exact: true
  },
  {
    path: '/physical-ai-textbook/markdown-page',
    component: ComponentCreator('/physical-ai-textbook/markdown-page', '0c3'),
    exact: true
  },
  {
    path: '/physical-ai-textbook/docs',
    component: ComponentCreator('/physical-ai-textbook/docs', '880'),
    routes: [
      {
        path: '/physical-ai-textbook/docs/next',
        component: ComponentCreator('/physical-ai-textbook/docs/next', 'c72'),
        routes: [
          {
            path: '/physical-ai-textbook/docs/next',
            component: ComponentCreator('/physical-ai-textbook/docs/next', 'f65'),
            routes: [
              {
                path: '/physical-ai-textbook/docs/next/code-examples/',
                component: ComponentCreator('/physical-ai-textbook/docs/next/code-examples/', '39e'),
                exact: true,
                sidebar: "modulesSidebar"
              },
              {
                path: '/physical-ai-textbook/docs/next/code-examples/example-1',
                component: ComponentCreator('/physical-ai-textbook/docs/next/code-examples/example-1', '204'),
                exact: true
              },
              {
                path: '/physical-ai-textbook/docs/next/constitution',
                component: ComponentCreator('/physical-ai-textbook/docs/next/constitution', '4a2'),
                exact: true,
                sidebar: "modulesSidebar"
              },
              {
                path: '/physical-ai-textbook/docs/next/hardware-context',
                component: ComponentCreator('/physical-ai-textbook/docs/next/hardware-context', 'ba4'),
                exact: true,
                sidebar: "modulesSidebar"
              },
              {
                path: '/physical-ai-textbook/docs/next/intro',
                component: ComponentCreator('/physical-ai-textbook/docs/next/intro', '6e9'),
                exact: true
              },
              {
                path: '/physical-ai-textbook/docs/next/modules/',
                component: ComponentCreator('/physical-ai-textbook/docs/next/modules/', 'ad9'),
                exact: true,
                sidebar: "modulesSidebar"
              },
              {
                path: '/physical-ai-textbook/docs/next/modules/ai-robot-brain',
                component: ComponentCreator('/physical-ai-textbook/docs/next/modules/ai-robot-brain', 'd74'),
                exact: true,
                sidebar: "modulesSidebar"
              },
              {
                path: '/physical-ai-textbook/docs/next/modules/digital-twin',
                component: ComponentCreator('/physical-ai-textbook/docs/next/modules/digital-twin', '4da'),
                exact: true,
                sidebar: "modulesSidebar"
              },
              {
                path: '/physical-ai-textbook/docs/next/modules/MODULE_TEMPLATE',
                component: ComponentCreator('/physical-ai-textbook/docs/next/modules/MODULE_TEMPLATE', 'f9a'),
                exact: true
              },
              {
                path: '/physical-ai-textbook/docs/next/modules/module-1',
                component: ComponentCreator('/physical-ai-textbook/docs/next/modules/module-1', 'c5e'),
                exact: true
              },
              {
                path: '/physical-ai-textbook/docs/next/modules/ros2-nervous-system',
                component: ComponentCreator('/physical-ai-textbook/docs/next/modules/ros2-nervous-system', '32b'),
                exact: true,
                sidebar: "modulesSidebar"
              },
              {
                path: '/physical-ai-textbook/docs/next/modules/vla',
                component: ComponentCreator('/physical-ai-textbook/docs/next/modules/vla', '2d5'),
                exact: true,
                sidebar: "modulesSidebar"
              },
              {
                path: '/physical-ai-textbook/docs/next/tutorial-basics/congratulations',
                component: ComponentCreator('/physical-ai-textbook/docs/next/tutorial-basics/congratulations', '983'),
                exact: true
              },
              {
                path: '/physical-ai-textbook/docs/next/tutorial-basics/create-a-blog-post',
                component: ComponentCreator('/physical-ai-textbook/docs/next/tutorial-basics/create-a-blog-post', '33e'),
                exact: true
              },
              {
                path: '/physical-ai-textbook/docs/next/tutorial-basics/create-a-document',
                component: ComponentCreator('/physical-ai-textbook/docs/next/tutorial-basics/create-a-document', 'b80'),
                exact: true
              },
              {
                path: '/physical-ai-textbook/docs/next/tutorial-basics/create-a-page',
                component: ComponentCreator('/physical-ai-textbook/docs/next/tutorial-basics/create-a-page', '627'),
                exact: true
              },
              {
                path: '/physical-ai-textbook/docs/next/tutorial-basics/deploy-your-site',
                component: ComponentCreator('/physical-ai-textbook/docs/next/tutorial-basics/deploy-your-site', 'd22'),
                exact: true
              },
              {
                path: '/physical-ai-textbook/docs/next/tutorial-basics/markdown-features',
                component: ComponentCreator('/physical-ai-textbook/docs/next/tutorial-basics/markdown-features', 'a11'),
                exact: true
              },
              {
                path: '/physical-ai-textbook/docs/next/tutorial-extras/manage-docs-versions',
                component: ComponentCreator('/physical-ai-textbook/docs/next/tutorial-extras/manage-docs-versions', 'c22'),
                exact: true
              },
              {
                path: '/physical-ai-textbook/docs/next/tutorial-extras/translate-your-site',
                component: ComponentCreator('/physical-ai-textbook/docs/next/tutorial-extras/translate-your-site', 'f09'),
                exact: true
              }
            ]
          }
        ]
      },
      {
        path: '/physical-ai-textbook/docs',
        component: ComponentCreator('/physical-ai-textbook/docs', '563'),
        routes: [
          {
            path: '/physical-ai-textbook/docs',
            component: ComponentCreator('/physical-ai-textbook/docs', 'c5c'),
            routes: [
              {
                path: '/physical-ai-textbook/docs/category/tutorial---basics',
                component: ComponentCreator('/physical-ai-textbook/docs/category/tutorial---basics', 'def'),
                exact: true,
                sidebar: "modulesSidebar"
              },
              {
                path: '/physical-ai-textbook/docs/category/tutorial---extras',
                component: ComponentCreator('/physical-ai-textbook/docs/category/tutorial---extras', '4e4'),
                exact: true,
                sidebar: "modulesSidebar"
              },
              {
                path: '/physical-ai-textbook/docs/intro',
                component: ComponentCreator('/physical-ai-textbook/docs/intro', '4f7'),
                exact: true,
                sidebar: "modulesSidebar"
              },
              {
                path: '/physical-ai-textbook/docs/tutorial-basics/congratulations',
                component: ComponentCreator('/physical-ai-textbook/docs/tutorial-basics/congratulations', '21c'),
                exact: true,
                sidebar: "modulesSidebar"
              },
              {
                path: '/physical-ai-textbook/docs/tutorial-basics/create-a-blog-post',
                component: ComponentCreator('/physical-ai-textbook/docs/tutorial-basics/create-a-blog-post', '7a8'),
                exact: true,
                sidebar: "modulesSidebar"
              },
              {
                path: '/physical-ai-textbook/docs/tutorial-basics/create-a-document',
                component: ComponentCreator('/physical-ai-textbook/docs/tutorial-basics/create-a-document', '8a5'),
                exact: true,
                sidebar: "modulesSidebar"
              },
              {
                path: '/physical-ai-textbook/docs/tutorial-basics/create-a-page',
                component: ComponentCreator('/physical-ai-textbook/docs/tutorial-basics/create-a-page', '079'),
                exact: true,
                sidebar: "modulesSidebar"
              },
              {
                path: '/physical-ai-textbook/docs/tutorial-basics/deploy-your-site',
                component: ComponentCreator('/physical-ai-textbook/docs/tutorial-basics/deploy-your-site', 'eeb'),
                exact: true,
                sidebar: "modulesSidebar"
              },
              {
                path: '/physical-ai-textbook/docs/tutorial-basics/markdown-features',
                component: ComponentCreator('/physical-ai-textbook/docs/tutorial-basics/markdown-features', 'cfb'),
                exact: true,
                sidebar: "modulesSidebar"
              },
              {
                path: '/physical-ai-textbook/docs/tutorial-extras/manage-docs-versions',
                component: ComponentCreator('/physical-ai-textbook/docs/tutorial-extras/manage-docs-versions', 'b2d'),
                exact: true,
                sidebar: "modulesSidebar"
              },
              {
                path: '/physical-ai-textbook/docs/tutorial-extras/translate-your-site',
                component: ComponentCreator('/physical-ai-textbook/docs/tutorial-extras/translate-your-site', 'fa4'),
                exact: true,
                sidebar: "modulesSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/physical-ai-textbook/',
    component: ComponentCreator('/physical-ai-textbook/', '94f'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
