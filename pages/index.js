import React, {Component} from 'react';
import factory from '../ethereum/factory';
import {Card,Button,Segment} from 'semantic-ui-react';
import Layout from '../components/Layout';
import {Link} from '../routes';

class CampaignIndex extends Component{

  static async getInitialProps(){
    const campaigns = await factory.methods.getDeployedCampaigns().call();
    return {campaigns};
  }

  renderCampaigns(){
    const items = this.props.campaigns.map(address=>{
      return{
        header : address,
        description : (
          <Link route={`/campaigns/${address}`}>
           <a> View Campaigns </a>
          </Link>
        ),
        fluid : true
      };
    });
    const CardExampleGroupProps = () => <Card.Group items={items} />;
    return CardExampleGroupProps();
  }

  render(){
    return (

        <Layout>
          <div style={{backgroundColor :'black'}}>
              <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css" />
              <Segment inverted><h3> Campaigns Catalog :</h3> </Segment>
              <Link route='/campaigns/new'>
                <a><Button floated="right" content = "Create Campaign" icon ="add" primary/></a>
              </Link>
              {this.renderCampaigns()}
          </div>
        </Layout>

    );
  }
}

export default CampaignIndex;
