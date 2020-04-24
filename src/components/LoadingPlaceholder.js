import React from 'react';
import { ActivityIndicator, Platform, View } from 'react-native';
import { Colors } from '../constants';
import { SafeAreaView } from 'react-native-safe-area-context'

// All this does is briefly render a loading indicator when you
// first mount a component as a child of this component
export default class LoadingPlaceholder extends React.Component {
  state = {
    isReady: false,
  };

  componentDidMount() {
    if (!this.state.isReady) {
      setTimeout(() => {
        this.setState({ isReady: true });
      }, Platform.OS === 'ios' ? 250 : 500);
    }
  }

  render() {
    if (!this.state.isReady) {
      return (
        <SafeAreaView
          style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
        >
          <ActivityIndicator
            color={Platform.OS === 'android' ? Colors.green : '#888'}
            size="large"
          />
        </SafeAreaView>
      );
    } else {
      return this.props.children;
    }
  }
}
