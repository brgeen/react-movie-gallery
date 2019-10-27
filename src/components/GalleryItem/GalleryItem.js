import React, { Component } from 'react';

class GalleryItem extends Component {

    state = {
        imageTextContainer: true,
    };

    imageTextContainerClick() {
        this.setState({
            imageTextContainer: !this.state.imageTextContainer,
        })
    }

    render() {
        return (
            <div onClick={() => this.imageTextContainerClick()} className="imageAndTextContainer">

                {this.state.imageTextContainer ? // single ternary split up on multiple lines
                    <img src={this.props.galleryItemProps.path} alt={this.props.galleryItemProps.path} /> :
                    <p>{this.props.galleryItemProps.description.map(element => (
                        <div className="galleryItemDescriptionContainer">
                            <p>{element.artist}</p>
                            <p>{element.title}</p>
                            <p>{element.dimensions}</p>
                            <p>{element.media}</p>
                           </div>
                    ))}</p>}

            </div>
        );
    }
}

export default GalleryItem;
