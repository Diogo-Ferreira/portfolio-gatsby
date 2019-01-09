import React from 'react'
import Layout from '../components/layout'
import MyPic from '../components/image'
import SEO from '../components/seo'
import { BigTitle } from '../components/Title'
import Paragraph from '../components/Paragraph'
import InternalLink, { ExternalLink } from '../components/Link';

const keywords = [
  'diogo', 
  'ferreira', 
  'venancio',
  'portfolio',
  'engineeer',
  'fullstack',
  'web',
  'mobile',
  'containers',
  'kubernetes',
  'docker',
  'devops'
];

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={keywords} />
    <MyPic />
    <BigTitle>Hi 👋 My name is Diego</BigTitle>
    <Paragraph>I'm a software engineer interested by recent web technologies, containers and more <br /> Check my <InternalLink to="/projects">projects</InternalLink> and my <InternalLink to="/about">parcour</InternalLink> if you're interested</Paragraph>
    <Paragraph>
      <ExternalLink href="https://github.com/Diogo-Ferreira">Github</ExternalLink> | <ExternalLink href="https://twitter.com/__diog">Twitter</ExternalLink> | <ExternalLink href="https://www.linkedin.com/in/diogoferreiravenancio/">Linkedin</ExternalLink>
    </Paragraph>
  </Layout>
)

export default IndexPage
