import React from 'react';
import Link from 'gatsby-link';

import { Grid, Menu } from 'semantic-ui-react';
import './Navigation.css';

class Navigation extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      activeItem: props.activeItem,
    };
  };

  render() {

    const { activeItem } = this.state;

    return (
      <Grid>
        <Grid.Row>
          <Grid.Column>
            <Menu stackable>
              <Menu.Item
                name='home'
                active={activeItem === 'home'}
                onClick={this.handleItemClick}
              >
                <Link to="/">Home</Link>
              </Menu.Item>

              <Menu.Menu position='right'>
                <Menu.Item
                  name='about'
                  active={activeItem === 'about'}
                  onClick={this.handleItemClick}
                >
                  <Link to="/about/">About</Link>
                </Menu.Item>
                <Menu.Item
                  name='contact'
                  active={activeItem === 'contact'}
                  onClick={this.handleItemClick}
                >  
                  <Link to="/contact/">Contact</Link>
                </Menu.Item>
              </Menu.Menu>
            </Menu>
        </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
}

export default Navigation;
