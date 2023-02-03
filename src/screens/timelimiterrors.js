import { Inter_500Medium } from '@expo-google-fonts/dev';
import React,{useEffect,useState} from 'react'
import {FlatList, Text, View,StyleSheet,ActivityIndicator, TouchableOpacity} from 'react-native';
import {Card, Button , Title ,Paragraph } from 'react-native-paper';
import {t} from 'react-native-tailwindcss';
// import {FlatList as FlatList2} from 'react-native-gesture-handler'
const Ratings = ({navigation}) => {
    const [users,setUsers]=useState();
    const [isLoading,setIsLoading]=useState(true);
    const userData=async ()=>{
        try{
            const response=await fetch('https://codeforces.com/api/user.status?handle=api.requiest')
            const data=await response.json();
            // console.log(data.result);
            // data.result.push("ratingChanges"='0');
            const arr=[];
            
            data.result.forEach((element)=>{
                // console.log(element.ghost);
                
                if(element.verdict==="TIME_LIMIT_EXCEEDED" )

               {
                arr.push(element);
                 }
            setUsers(arr);
            setIsLoading(false)
            })
        }catch(err){
            console.log(err);
        }
    }
    useEffect(() => {
        userData();
        navigation.setOptions({
            title: 'Orders',
            headerStyle: {
                backgroundColor: '#f4511e',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                fontWeight: 'bold',
                },
        })
    }, [])
  return (
  <>
     <Text style={[t.mY5 ,t.selfCenter,t.text2xl,t.fontBlack,t.trackingWidest, ]}>Submissions</Text>
        {isLoading ? <View style={styles.loader}><ActivityIndicator size="large" color="red"/></View> :
(<View>
    <FlatList
        data={users}
        renderItem={({item})=>{
        return(
            <View style={styles.maincontainer}>
             <Card style={styles.container}>
        <Card.Content>
            <Title style={styles.title}>{item.name}</Title>
        </Card.Content>
        {/* <Card.Cover source={{ uri: 'https://oceanbluesoftware.com/wp-content/uploads/2016/12/profile-photo.png' }} style={styles.image}/>
         */}
       <Card.Content>
        <Paragraph style={styles.description}>{item.problem.name}</Paragraph>
        <Paragraph style={styles.description}>Submission Status: {item.verdict}</Paragraph>
        <Paragraph style={styles.description}>ContestId: {item.contestId}</Paragraph>

        <Paragraph style={styles.description}>Question Serial: {item.problem.index}</Paragraph>
        <Paragraph style={styles.description}>Ratings: {item.problem.rating}</Paragraph>
        <Paragraph style={styles.description}>Tags: {item.problem.tags}</Paragraph>
        </Card.Content>
        <TouchableOpacity><Card.Actions>
          <Button>View Details</Button>
        </Card.Actions></TouchableOpacity>
      </Card>

                                        
   
      </View>
        )
    }
    }
    />
     </View>
         )}

   </>
  )
}
const styles=StyleSheet.create({
    maincontainer:{
backgroundColor:'gray'
    },
    
        container :{
            alignContent:'center',
            margin:37,
            padding:10,
            backgroundColor:'black',
            // flex:'column-reverse'
        },
        title:{
            fontSize:20,
            color:'white',
            fontWeight:'bold',
            textAlign:'center',
        },
        description:{
            fontSize:15,
            color:'white',
            textAlign:'center',

        },
        image:{
            borderRadius:50,
            height:50,
            width:50,
            alignSelf:'center',
        },
        loader:{
            minHeight:"100%",
            // width:50%,
            display:'flex',
            justifyContent:'center',
            alignItems:'center',



        }
    

});
export default Ratings