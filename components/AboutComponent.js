import React, { Component } from "react";
import { Card } from "react-native-elements";
import { View, Text, FlatList, ScrollView } from "react-native";
import { ListItem } from "react-native-elements";
import { PARTNERS } from "../shared/partners";

function Mission (){
    return (
        <ScrollView>
             <Card title="Our Mission" wrapperStyle={{margin: 20}}>
                
                <Text style={{margin: 10}}>
                    We present a curated database of the best campsites in the vast woods and backcountry of the World Wide Web Wilderness. We increase access to adventure for the public while promoting safe and respectful use of resources. The expert wilderness trekkers on our staff personally verify each campsite to make sure that they are up to our standards. We also present a platform for campers to share reviews on campsites they have visited with each other.
                </Text>

            </Card>
        </ScrollView>

    )
}

class About extends Component {
    //set up a constructor to get partner info
    constructor(props){
        super(props);
        this.state = {
            partners: PARTNERS
        };
    }

    static navigationOptions = {
        title: 'About Us'
    }



    render(){
        const { navigate } = this.props.navigation;
        const renderDirectoryItem = ({item}) => {
            return (
                <ListItem
                    title={item.name}
                    subtitle={item.description}
                    leftAvatar={{ source: require('./images/bootstrap-logo.png')}}
                />
            );
        };

        return (
            <ScrollView>
                <Mission />
                <Card title="Community Partners" wrapperStyle={{margin: 20}}>
                    <FlatList
                        data={this.state.partners}
                        keyExtractor={item => item.id.toString()}
                        renderItem={renderDirectoryItem} 
                    >

                    </FlatList>
                </Card>
            </ScrollView>
        
        );
    }
}

export default About;