import React from 'react';
import {Component} from 'react';
import {SuperTaber, TaberHeader, TabHeaderItem, TaberContent, TaberContentItem} from '../src';
// import * as Taber from '../src';


class App extends Component{ 
  onClick() {
    console.log('clicked')
  }

  render() {
    // const header = [
    //   {
    //     text: 'First'
    //   },
    //   {
    //     text: 'Second'
    //   }
    // ];
    // const content = [
    //   {
    //     content: 'First content'
    //   },
    //   {
    //     content: 'Second content'
    //   }
    // ]
    return (
      <SuperTaber
        header={header}
        content={content}
      >
        <TaberHeader>
          <TabHeaderItem>
            First
          </TabHeaderItem>
          <TabHeaderItem>
            Second
          </TabHeaderItem>
        </TaberHeader>
        <TaberContent>
          <TaberContentItem>
            Content for First tab
          </TaberContentItem>
          <TaberContentItem>
            Content for Second tab
          </TaberContentItem>
        </TaberContent>
      </SuperTaber>
    );
  }
}

export default App;

export const foo = () => {
  return 1;
}

export const bar = 'bar';