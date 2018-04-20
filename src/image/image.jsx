import React, { Component } from 'react';

class Image extends Component {
  constructor(props){
    super(props);

    this.state = {
      current: this.props.current,
    };

    this.showImage = this.showImage.bind(this);
    this.leaf = this.leaf.bind(this);
  }

  showImage(){
    const { current } = this.state;
    const { images } = this.props;
    return(
      <img src={images[current].Location}/>
    );
  }

  leaf(dir){
    const { current } = this.state;
    const { images } = this.props;
    let newCurr;
    switch (dir){
      case 'back':
        newCurr = (current - 1) < 0 ? images.length - 1 : current - 1;
        this.setState({ current: newCurr });
        break;
      case 'forw':
        newCurr = (current + 1) % images.length;
        this.setState({ current: newCurr });
        break;
    }
  }


  render(){
    const { id, images, current } = this.props;
    return (
      <div className='modal-gallery'>
        <button onClick={() => this.leaf('back')}>ᗏ</button>
        {this.showImage()}
        <button onClick={() => this.leaf('forw')}>ᐉ</button>
      </div>
    );
  }
}


export default Image;
