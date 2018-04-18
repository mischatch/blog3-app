import React, { Component } from 'react';

class Image extends Component {
  constructor(props){
    super(props);

    this.state = {
      current: this.props.current,
    };

    this.showImage = this.showImage.bind(this);
    this.back = this.back.bind(this);
    this.forw = this.forw.bind(this);
  }

  showImage(){
    const { current } = this.state;
    const { images } = this.props;
    debugger
    return(
      <img src={images[current].Location}/>
    );
  }

  back(){
    const { current } = this.state;
    const { images } = this.props;
    let newCurr = (current - 1) < 0 ? images.length - 1 : current - 1;
    this.setState({ current: newCurr });
  }

  forw(){
    const { current } = this.state;
    const { images } = this.props;
    let newCurr = (current + 1) % images.length;
    this.setState({ current: newCurr });
  }

  render(){
    const { id, images, current } = this.props;
    return (
      <div>
        <button onClick={this.back}>ᗏ</button>
        {this.showImage()}
        <button onClick={this.forw}>ᐉ</button>
      </div>
    );
  }
}


export default Image;
