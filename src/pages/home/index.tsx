import { useCallback, useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { END } from 'redux-saga';
// import { wrapper } from '../store'
// import { loadData, startClock, tickClock } from '../actions'
// import Page from '../components/page'
import React from 'react';
import Head from 'next/head';
import { GetStaticProps } from 'next';
import { TYPES } from '../../constants/types';
import { selector } from '../../reducers/home';
import _ from 'lodash';
import styled from 'styled-components';
import Link from 'next/link';
import Header from '../../components/Header';


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

const Home: React.FC = () => {
    const { data } = useSelector(selector);

    const dispatch = useDispatch();
    const getData = useCallback(() => dispatch({ type: TYPES.GET_DATA }), [dispatch]);

    useEffect(() => {
        getData();
    }, [getData]);

    type IDate = {
        id: number,
        body: string,
        title: string,
    }


    return <>
        <Head>
            <title>Home</title>
            {/*<link rel="icon" href="/favicon.ico"/>*/}
        </Head>

        <Header />
        <main>
            <section>
                <h1>sdfdsf</h1>
                <CardBlock>
                    <ImageBlock>
                        <img src="https://techrocks.ru/wp-content/uploads/2018/05/Next.js-.jpg" alt="next js logo"/>
                    </ImageBlock>
                    <DescBlock>
                        <CardTitle>sadad</CardTitle>
                        <CardDesc>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex, magnam?</CardDesc>
                    </DescBlock>
                </CardBlock>
                {_.map(data, (item: IDate) => <div key={item.id}>{item.title}</div>)}
            </section>
        </main>
    </>;
};

export default Home;