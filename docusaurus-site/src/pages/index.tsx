import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Start Learning 🚀
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Welcome to ${siteConfig.title}`}
      description="An Open-Source Textbook on Embodied Intelligence and Physical AI">
      <HomepageHeader />
      <main>
        <div className="container margin-vert--xl">
          <div className="row">
            <div className="col col--4">
              <div className="text--center">
                <Heading as="h3">Physical AI</Heading>
                <p>
                  Explore the intersection of artificial intelligence and robotics, where code meets the physical world.
                </p>
              </div>
            </div>
            <div className="col col--4">
              <div className="text--center">
                <Heading as="h3">Embodied Intelligence</Heading>
                <p>
                  Understand how intelligence emerges from the interaction between an agent, its body, and the environment.
                </p>
              </div>
            </div>
            <div className="col col--4">
              <div className="text--center">
                <Heading as="h3">Open Source</Heading>
                <p>
                  A community-driven resource for students, researchers, and hobbyists building the next generation of robots.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}