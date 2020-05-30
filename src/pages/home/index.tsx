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


const Header = styled.header`
        display: flex;
        height: 20vw;
        background-color: #000;
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

        <Header>
            <Link href="/">
                <a> Home </a>
            </Link>
        </Header>
        <main>
            <h1>sdfdsf</h1>
            {_.map(data, (item: IDate) => <div key={item.id}>{item.title}</div>)}
        </main>
    </>;
};

export default Home;