import React from 'react';
import Button from 'js/button/index'

var AnotherComponent = React.createClass({
  render: function() {
    return (
      <div>Hello Again</div>
    );
  }
});
var Index = React.createClass({
	handleClick() {
    console.log('a button clicked');
    
  },
  render: function() {
    return (
      <div style={{padding:'20px'}}>
          <Button>默认按钮</Button> <br/>
          <Button type="primary" onClick={this.handleClick}>一级按钮</Button> <br/>
          <Button type="secondary" onClick={this.handleClick}>二级按钮</Button> <br/>
          <Button type="minor" onClick={this.handleClick}>次要按钮</Button> <br/>
          <Button disabled={true}>不可点击</Button> <br/>
          <div className="demo-row">
              <div className="demo-cell"><Button type="primary" onClick={this.handleClick}>一级按钮</Button></div>
              <div className="demo-cell"><Button type="secondary" onClick={this.handleClick}>二级按钮</Button></div>
          </div> <br/>
          <Button style={{marginLeft:-20,marginRight:-20,borderRadius:0}} onClick={this.handleClick}>通栏按钮</Button> <br/>
          <Button type="primary" size="large" onClick={this.handleClick}>大按钮</Button> <br/>
          <Button type="primary" size="medium" onClick={this.handleClick}>中按钮</Button> <br/>
          <Button type="primary" size="small" onClick={this.handleClick}>小按钮</Button> <br/>
      </div>
    );
  }
});

export default Index;
