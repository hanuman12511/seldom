import React, { useEffect, useState } from 'react'
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

    }
    
    const handleScroll = () => {
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
    }, [loading, hasMore]);


    return(
        <>
        <View>
            <Text>
                Page
            </Text>
        </View>
        </>
    )
}