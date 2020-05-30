import React from 'react';
import styled from 'styled-components';


const CardBlock = styled.figure`
    display: flex;
    margin: 10px;
    flex-direction: row;
    justify-content: space-between;
`;

const DescBlock = styled.figcaption`
    display: flex;
    flex-basis: 50%;
    align-items: flex-start;
    flex-direction: column;
    width: 100%;
    margin: 10px 30px;
`;

const ImageBlock = styled.div`
    display: flex;
    flex-basis: 50%;
`;

const CardTitle = styled.h2`
    font-size: 1.6rem;
    margin-bottom: 10px;
`;

const CardDesc = styled.p`
    font-size: 1.2rem;
    color: lightslategray;
`;

const PostCard: React.FC<any> = ({ id, title, body}) => {
    return <CardBlock>
        <ImageBlock>
            <img src="https://techrocks.ru/wp-content/uploads/2018/05/Next.js-.jpg" alt="next js logo"/>
        </ImageBlock>
        <DescBlock>
            <CardTitle>{ title }</CardTitle>
            <CardDesc>{ body }</CardDesc>
        </DescBlock>
    </CardBlock>;
};

export default PostCard;
