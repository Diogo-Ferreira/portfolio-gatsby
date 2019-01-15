import Layout from "../components/layout";
import React from 'react';
import { MediumTitle, BigTitle, SmallTitle } from "../components/Title";
import Paragraph from "../components/Paragraph";
import moment from 'moment';
import styled, { css } from 'styled-components';
import { ExternalLink } from '../components/Link';


const parcours = [{
    title: (
        <React.Fragment>
            <ExternalLink href="https://djangogirls.org/lausanne/">Django For Girls</ExternalLink> - Coach
        </React.Fragment>
    ),
    timeLabel: 'November 2018',
    content: `
        Decreasing the gender gap by helping girls to code a website in django for the first time. The event took place in Lausanne.
    `,
    keywords: []
},{
    title: (
        <React.Fragment>
            <ExternalLink href="https://apptitude.ch">Apptitude.ch</ExternalLink> - Full-Stack Developer
        </React.Fragment>
    ),
    timeLabel: 'September 2018 - Now',
    content: `
        Working as a Full-Stack Developer with React, Node, Mongo and Docker building innovating next generation web platforms.
    `,
    keywords: []
},
{
    title: (
        <React.Fragment>
            <ExternalLink href="https://swisscom.com">Swisscom</ExternalLink> - Software Engineer intern
        </React.Fragment>
    ),
    timeLabel: 'August 2017 - August 2018',
    content: `
        Internship inside the company's big data platform team, working on the infrastructure with Kafka, Kubernetes and Ansible.
    `,
    keywords: []
},
{
    title: (
        <React.Fragment>
            <ExternalLink href="https://he-arc.ch">HE-ARC</ExternalLink> - Bachelor of Science in Software Engineering
        </React.Fragment>
    ),
    timeLabel: '2014 - 2017',
    content: ``,
    keywords: []
}]

const AboutPage = () => (
    <Layout textAlign="left">
        <Wrapper>
            <BigTitle>
                A bit about my self ...
            </BigTitle>
            <Paragraph>
                Hi! I'm Diogo {moment().diff('1996-02-06', 'years')} years old currently living in 🇨🇭. I'm passionate about computer science mostly fancy web technologies such as React, Containers & Kubernetes and DevOps. When I'm not in front of a keyboard I like to travel, watch movies and hang out with friends. Currently, I'm working as a Full-Stack developer at Apptitude.ch, previously I was an intern at Swisscom's big data team.
            </Paragraph>
            <MediumTitle>My career</MediumTitle>
            <div>
                {parcours.map((p, i) => <React.Fragment key={p.title}>
                    <Parcour {...p} />
                </React.Fragment>)}
            </div>
        </Wrapper>
        
    </Layout>
);

const Parcour = ({ title, content, keywords, timeLabel}) => (
    <div>
        <SmallTitle>{title}</SmallTitle>
        <TimeLabel>( {timeLabel} )</TimeLabel>
        <Paragraph>{content}</Paragraph>
    </div>
)

const TimeLabel = styled.div`
    font-style: italic;
    font-size: 0.8em;
`;

const Wrapper = styled.div`
    max-width: 800px;
    margin: 8px 8px;
`;


export default AboutPage;