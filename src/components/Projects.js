import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub as Git } from "@fortawesome/free-brands-svg-icons";

const List = styled.li`
    list-style: none;
    margin-left: -40px;
    margin-bottom: 10px;
    padding: 0 0 0 5px;
    white-space: break-spaces;
    width: 550px;
    background-color: #303030;
    border-radius: 10px;
    @media (max-width: 768px) {
    width: 350px;
    margin-left: -30px;
    }
`
const ListWrapper = styled.div`

`
const UnoList = styled.ul`
  display: grid;
  @media (min-width: 768px) {
  grid-template-columns: repeat(auto-fit, minmax(600px, 1fr));
}
  @media (max-width: 768px) {
  grid-template-columns: repeat(1fr);
  }
`
const ListSubTitle = styled.h3`
  color: #fe9000;
  text-transform: capitalize;
`
const ListSpan = styled.span`
  color: #fe9000;
  vertical-align: 5%;
`
const ListLink = styled.a`
  word-break: break-word;
  color: #0094e3;
  font-weight: bold;
`
const ListIcon = styled(FontAwesomeIcon)`
    color: #fafafa;
    margin-left: 5px;
    transform: scale(1.7);
    &:hover {
        filter: invert(50%) sepia(48%) saturate(1537%) hue-rotate(2deg) brightness(108%) contrast(107%);
    }
`

export default function Projects() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    // Note: the empty deps array [] means
    // this useEffect will run once
    // similar to componentDidMount()
    useEffect(() => {
      fetch("https://api.github.com/users/KodeAndre/repos")
        .then(res => res.json())
        .then(
          (result) => {
            setIsLoaded(true);
            setItems(result);
          },
          // Note: it's important to handle errors here
          // instead of a catch() block so that we don't swallow
          // exceptions from actual bugs in components.
          (error) => {
            setIsLoaded(true);
            setError(error);
          }
        )
    }, []);

   if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <div>
          <h2>&gt;Projects</h2>
          <ListWrapper>
            <UnoList>
              {items.map(item => (
                <List key={item.id} style={{lineHeight: "20px"}}>
                  <ListSubTitle>{item.name}</ListSubTitle>
                  <p>Description: {item.description}</p>
                  {item.homepage ? <ListLink href={item.homepage} target="_blank" rel="noreferrer">Click here for live page of this project</ListLink> : null}
                  <p>
                    <ListSpan>Source: </ListSpan>
                    <ListLink href={item.html_url} target="_blank" rel="noreferrer" style={{color: "white"}}>
                    <ListIcon icon={Git} /></ListLink>
                  </p> <br/>
                </List>
              ))}
            </UnoList>
          </ListWrapper>
      </div>
    );
  }
}