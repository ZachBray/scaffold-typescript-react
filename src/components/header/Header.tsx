import * as React from 'react';
import AppBar from 'material-ui/AppBar';

export default class Header extends React.Component<{}, {}> {
  render() {
    return <AppBar title='Widget Scaffold' showMenuIconButton={false} />;
  }
}