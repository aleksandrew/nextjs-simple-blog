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
import PostCard from '../../components/PostCard';


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
                {_.map(data, (item: IDate) => <PostCard key={item.id} {...item}/>)}
            </section>
        </main>
    </>;
};

export default Home;