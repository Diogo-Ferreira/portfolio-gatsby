

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
        I was always missing new movies openings in my town, so I decided to create a crawler to alert me whenever a new movie is up on their website!
        The crawler's made with node and sends the notification to a slack channel. Bonus: k8s deployment!
    `,
    links: [{
        text: '👨‍💻 Github repository',
        link: 'https://github.com/Diogo-Ferreira/TheaterCrawler'
    }]
}, {
    name: 'ibring.it',
    mainLink: 'https://ibring.it',
    content: `
        I present you the doodle of food! You're making a BBQ tonight at home? Tell how many drinks, chips and whatever you need to your friends so the bring you they right stuff in the right amount!
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
    mainLink: 'https://github.com/Diogo-Ferreira/Social-Profile',
    content: (
        <React.Fragment>
            School project to solve the <ExternalLink href="https://en.wikipedia.org/wiki/Cold_start_(computing)">cold start </ExternalLink> 
             issue in recommending systems by crawling existing social network data. It features a micro-service based architecture with RabbitMQ where each miner (micro - service) crawls a different social website.
        </React.Fragment>
    ),
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