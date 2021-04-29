import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

import PaymentFormView from './PaymentFormView';


export default class AddSubscriptionView extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.textWrapper}>
            <Text style={styles.infoText}>
              your Total for Pay is : ???
            </Text>
          </View>
        <ScrollView style={styles.container} ref={ref => (this.scrollViewRef = ref)}>
          <View style={styles.cardFormWrapper}>
            <PaymentFormView {...this.props}/>
          </View>
        </ScrollView>
     
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  textWrapper: {
    margin: 10
  },
  infoText: {
    fontSize: 18,
    textAlign: 'center'
  },
  cardFormWrapper: {
    padding: 10,
    margin: 10
  }
});
