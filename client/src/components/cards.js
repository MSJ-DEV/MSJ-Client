import * as React from 'react';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import { StyleSheet, Text, View } from 'react-native';
const MyComponent = () => (
    <View >
  <Card style={styles.container}>
    <Card.Cover source={{ uri: 'https://d1fmx1rbmqrxrr.cloudfront.net/cnet/optim/i/edit/2019/04/eso1644bsmall__w770.jpg' }} />
     <Card.Content>
      <Title>Card title</Title>
      <Paragraph>Card content</Paragraph>
    </Card.Content>
    <Card.Actions>
      <Button>Cancel</Button>
      <Button>Ok</Button>
    </Card.Actions>
  </Card>
  </View>
);
const styles = StyleSheet.create({
    container: {
      marginTop: 0,
      
    
    }
  });
export default MyComponent;