import React from 'react';
import { View, Text, Image } from 'react-native';
import { Card, ListItem, Button } from 'react-native-elements';

//export default (props) => <Text>hmm {JSON.stringify(props, null, 2)}</Text>

export default class MoreDetails extends React.Component {
  render() {
    return (
      <Card>
        <Text>
          {JSON.stringify(this.props.navigation.state.params, null, 2)}
        </Text>
      </Card>
    )
  }
}

/*
<Card title="CARD WITH DIVIDER">
  {
    users.map((u, i) => {
      return (
        <View key={i} style={styles.user}>
          <Image
            style={styles.image}
            resizeMode="cover"
            source={{ uri: u.avatar }}
          />
          <Text style={styles.name}>{u.name}</Text>
        </View>
      );
    })
  }
</Card>
*/
