/* import React, { useEffect, useState } from 'react'
import{View,Text} from 'react-native'
export default function PageScreen(){
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);
    useEffect(()=>{
        console.log(2);
        fetchData();

    },[page])

    const fetchData= async()=>{
        setLoading(true);
        try {
            const response = await fetch(
                `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=10`);
            const data = await response.json();
            setPosts(prevPosts => [...prevPosts, ...data]);
            setHasMore(data.length > 0);
        } catch (error) {
            console.error('Error fetching posts:', error);
        } finally {
            setLoading(false);
        }

    } */
    
  /*   const handleScroll = () => {
        if (!loading && hasMore &&
            window.innerHeight + document.documentElement.scrollTop >=
            document.documentElement.scrollHeight - 20) {
            setPage(prevPage => prevPage + 1);
        }
    };


    useEffect(() => {
        console.log("***");
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [loading, hasMore]); */

/* 
    return(
        <>
        <View>
            <Text>
                Page
            </Text>
        </View>
        </>
    )
} */

/* import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, FlatList, ActivityIndicator, Button } from 'react-native';
import { connect } from 'react-redux';
import { topHeadlineRequest } from '../../store/action';
import NewsCard from './NewsCard';


const PageScreen = ({ newsModel, dispatch }) => {

    const [page, setPage] = useState(1);

    const requestAPI = () => {
        dispatch(topHeadlineRequest({
            country: 'my', page: page
        }))
    }

    useEffect(() => {
        requestAPI();
        console.log("CURRENT PAGE", page);
    }, [page])

    const fetchMoreData = () => {
        if (!newsModel.isListEnd && !newsModel.moreLoading) {
            setPage(page + 1)
        }
    }

    const renderHeader = () => (
        <Text style={styles.title}>RN News</Text>
    )

    const renderFooter = () => (
        <View style={styles.footerText}>
            {newsModel.moreLoading && <ActivityIndicator />}
            {newsModel.isListEnd && <Text>No more articles at the moment</Text>}
        </View>
    )

    const renderEmpty = () => (
        <View style={styles.emptyText}>
            <Text>No Data at the moment</Text>
            <Button onPress={() => requestAPI()} title='Refresh'/>
        </View>
    )

    console.log({newsModel})

    return (
        <SafeAreaView style={styles.container}>
            {newsModel.loading ?
                <View style={styles.loading}>
                    <ActivityIndicator size='large' />
                </View>
                :
                <FlatList
                contentContainerStyle={{flexGrow: 1}}
                    data={newsModel.data}
                    renderItem={({ item }) => (
                        <NewsCard news={item} />
                    )}
                    ListHeaderComponent={renderHeader}
                    ListFooterComponent={renderFooter}
                    ListEmptyComponent={renderEmpty}
                    onEndReachedThreshold={0.2}
                    onEndReached={fetchMoreData}
                />
            }

        </SafeAreaView>
    )
}

const mapStateToProps = (state) => {
    return {
        newsModel: state.news
    }
};

export default connect(mapStateToProps)(PageScreen);
 */
/* 

import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { ActivityIndicator, FlatList, Text } from "react-native";
import { useRef } from "react";

const PageScreen=(props)=> {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const nextPageIdentifierRef = useRef();
  const [isFirstPageReceived, setIsFirstPageReceived] = useState(false);

  const fetchData = () => {
    setIsLoading(true);
    getDataFromApi(nextPageIdentifierRef.current).then((response) => {
      const { data: newData, nextPageIdentifier } = parseResponse(response);
      setData([...data, newData]);
      nextPageIdentifierRef.current = nextPageIdentifier;
      setIsLoading(false);
      !isFirstPageReceived && setIsFirstPageReceived(true);
    });
  };


  const fetchNextPage = () => {
    if (nextPageIdentifierRef.current == null) {
      // End of data.
      return;
    }
    fetchData();
  };

  const getDataFromApi = () => {
    // get the data from api
    return Promise.resolve({ data: [], nextPageIdentifier: "page-1" });
  };
  const parseResponse = (response) => {
    let _data = response.data;
    let nextPageIdentifier = response.nextPageIdentifier;
    // parse response and return list and nextPage identifier.
    return {
      _data,
      nextPageIdentifier,
    };
  };

  useEffect(() => {
    fetchData();
  }, []);

  const renderItem = ({ item }) => {
    return <Text>{item}</Text>;
  };

  const ListEndLoader = () => {
    if (!isFirstPageReceived && isLoading) {
      // Show loader at the end of list when fetching next page data.
      return <ActivityIndicator size={'large'} />;
    }
  };

  if (!isFirstPageReceived && isLoading) {
    // Show loader when fetching first page data.
    return <ActivityIndicator size={'small'} />;
  }

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      onEndReached={fetchNextPage}
      onEndReachedThreshold={0.8}
      ListFooterComponent={ListEndLoader} // Loader when loading next page.
    />
  );
}

export default PageScreen */


import React, { useCallback, useEffect, useState } from 'react'
import {FlatList, View,Text, SafeAreaView,Image,ActivityIndicator,   LogBox} from 'react-native'


export default function PageScreen(){
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);
    useEffect(()=>{
        
        fetchData();

    },[page])

    const fetchData= async()=>{
        setLoading(true);
        try {
            const response = await fetch(
                `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=10`);
            const data = await response.json();
            setPosts(prevPosts => [...prevPosts, ...data]);
            setHasMore(data.length > 0);
        } catch (error) {
            console.error('Error fetching posts:', error);
        } finally {
            setLoading(false);
        }

    }

    let renditem= useCallback(({item})=>{
      //  console.log(item);
        
        return(
            <>
            <View style={{backgroundColor:'red',marginHorizontal:10,marginVertical:10}}>
           <Text style={{color:"#fff",padding:10}}>{item.id}</Text>
            <Text>{item.title}</Text>
            <Text>{item.body}</Text>
           
            </View>
            </>
        )
    }
,[posts])
   
    
    const  onEndReached=useCallback(()=>{
     
        if(hasMore && !loading){
        setPage(prevPage => prevPage + 1);
        }
           
               // fetchData();
    },[hasMore,loading])

console.log("***********************");


    console.log(posts);
    
    console.log("*********************************");
    
    return(
       <>
       <SafeAreaView>
       <FlatList
       data={posts}
       renderItem={renditem}
       keyExtractor={index=>index.id}
       onEndReached={onEndReached}
       onEndReachedThreshold={.1}
       ListFooterComponent={()=>{
        return(
            loading&&<ActivityIndicator size="small" color="#0000ff" />
        )
       }}
       />
       </SafeAreaView>
       </>
    )
}