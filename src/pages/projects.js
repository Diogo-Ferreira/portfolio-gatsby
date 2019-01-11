

import React from 'react'
import Layout from '../components/layout';
import Paragraph from '../components/Paragraph';
import { MediumTitle, SmallTitle } from '../components/Title';
import styled from 'styled-components';
import { ExternalLink } from '../components/Link';

const projects = [{
    name: 'Movie theater crawler',
    mainLink: 'https://github.com/Diogo-Ferreira/TheaterCrawler',
    content: `
        A crawler that checks for new movies
    `,
    links: [{
        text: '👨‍💻 Github repository',
        link: 'https://github.com/Diogo-Ferreira/TheaterCrawler'
    }]
}, {
    name: 'ibring.it',
    mainLink: 'https://ibring.it',
    content: `
        A web application written with Django which is like the Doodle of food ! Tell your friends how many beers and pizza you need for your tonight’s home party ! I’m currently rewriting it with React / GraphQL / Express 🎉
    `,
    links: [{
        text: '🌎 Website',
        link: 'https://ibring.it',
    }, {
        text: `📰 Friend's article`,
        link: 'https://infinit8.io/portfolio/ibringit/'
    }]
}, {
    name: 'Social profile',
    content: `
        A data mining plateform to solve the cold start issue with recommending systems
    `,
    links: [
        {
            text: '👨‍💻 Github repository',
            link: 'https://github.com/Diogo-Ferreira/Social-Profile'
        }
    ]
}, {
    name: 'Protokoll Studio',
    content: `
        Helping a friend making indie video games on Unity 3D, check our games !
    `,
    links: [{
        text: '🌎 Website',
        link: 'https://protokoll-studio.com/',
    }, {
        text: `🐦 Twitter`,
        link: 'https://twitter.com/protokoll_sto'
    },
    {
        text: `📸 Instragram`,
        link: 'https://infinit8.io/portfolio/ibringit/'
    },
    {
        text: `👾 Itch.io`,
        link: 'https://protokollstudio.itch.io/'
    }]
    
}]

const ProjectsPage = () => (
    <Layout>
        <Wrapper>
            {projects.map(p => <StyleProjectCard key={p.name} {...p} />)}
        </Wrapper>
    </Layout>
)

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;

const ProjectCard = ({ name, content, links, mainLink, className }) => (
    <div className={className}>
        <MediumTitle>
            <ExternalLink href={mainLink}>{name}</ExternalLink>
        </MediumTitle>
        <Paragraph>{content}</Paragraph>
        <LinksWrapper>
            {links.map(({ text, link }) => <ExternalLink key={link} href={link}>{text}</ExternalLink>)}
        </LinksWrapper>
    </div>
);

const LinksWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    a {
        margin-right: 16px;
    }
`;

const StyleProjectCard = styled(ProjectCard)`
    max-width: 800px;
    display: flex;
    flex-direction: column;
    text-align: left;
    margin: 8px 8px;
`;

export default ProjectsPage