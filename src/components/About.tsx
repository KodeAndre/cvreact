import styled from 'styled-components';

const AboutTitles = styled.h3`
    color: #fe9000;
`
const AboutLink = styled.a`
    color: #fafafa;
`
const AboutWrapper = styled.div`
    padding-bottom: 20px;
`

export default function About() {

    return (
        <AboutWrapper>
            <h2>&gt;About</h2>
            <AboutTitles>Background: </AboutTitles>
            <p>I have a background in hardware and SYSAdmin work with 2 separate companies, one where I fixed and did maintenance on PC's, Laptops and other technical hardware, and one where I maintained and made a webstore for the company, and helped with general IT.</p>
            <AboutTitles>Skills: </AboutTitles>
            <p>Including coding in React, React Native, HTML, CSS, Typescript/JavaScript, i also know to some extent: Lua, Python, Java/Kotlin and C#, as I have used them for various game related uses such as mods and addons. I have an interest in Back-end and server related coding.</p>
            <AboutTitles>School: </AboutTitles>
            <p>I graduated from Nordahl Grieg videregående as a Media student, with my main focus being on photography and design.</p>
            <AboutTitles>Contact Me: </AboutTitles>
            <p><b>Email: </b><AboutLink href="mailTo:andre.kodehode@gmail.com">andre.kodehode@gmail.com</AboutLink></p>
        </AboutWrapper>
    )
}
