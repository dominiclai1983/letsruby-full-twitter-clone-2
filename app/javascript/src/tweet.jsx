import React from 'react';
import ReactDOM from 'react-dom';
import Nva from './page/nva';
import Left from './page/left';
import Middle from './page/middle';
import Right from './page/right';
import {json, checkStatus} from './utils';

const ListAllTweet = (prop) => {
  const {listAllTweet} = prop;

  return (<React.Fragment>
    <p>`@ ${listAllTweet.username}`</p>
    <p>{listAllTweet.message}</p>
    </React.Fragment>
  )

}

class Tweet extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      listAllTweet: [],
    }
  };

  componentDidMount(){
    fetch('api/tweets')
    .then(checkStatus)
    .then(json)
    .then(data => {
      console.log(data);
      this.setState({
        listAllTweet: data.tweets
      }, () => console.log(this.state.listAllTweet));
    })
    .catch(error => {
      console.log(error);
    })
  }

  render(){

    const {listAllTweet} = this.state;

    return (
      <React.Fragment>
        <Nva />
          <div className='container'>
            <div className='row'>
              <Left />
              
              <div className='col-9 col-md-6'>
                <Middle />
                {listAllTweet.map(listAllTweet => <ListAllTweet key={listAllTweet.id} listAllTweet={listAllTweet} />)}
              </div>

              <Right />
            </div>
          </div>
      </React.Fragment>
    )
  }
}

export default Tweet;

document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(
      <Tweet />,
      document.body.appendChild(document.createElement('div')),
    )
  })