import React from 'react';
import {Menu,Button,Segment,Icon} from 'semantic-ui-react';
import {Link} from '../routes';

export default ()=>{
  return (

      <Menu  style= {{ marginTop : '100px'}}>
        <Link route='/'>
          <a><Button color='facebook'>CrowdCoin</Button></a>
        </Link>
        <Menu.Menu position='right'>
          <Link route='/'>
            <a>><Button color='facebook'>Campaigns </Button></a>
          </Link>
          <Link route='/campaigns/new'>
            <a><Button color='pink'><Icon name='add circle'/></Button></a>
          </Link>
        </Menu.Menu>
      </Menu>

  );
};
