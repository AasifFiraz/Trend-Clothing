import React from "react";
import './directory.styles.scss'
import MenuItem from "../menu-item/menu-item.component";

class Directory extends React.Component {
    constructor(){
        super();
    
        this.state = {
            section: [{
            title: 'hats',
            imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
            id: 1,
            linkUrl: 'shop/hats'
          },
          {
            title: 'jackets',
            imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
            id: 2,
            linkUrl: 'shop/jackets'
          },
          {
            title: 'sneakers',
            imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
            id: 3,
            linkUrl: 'shop/sneakers'
          },
          {
            title: 'mens',
            imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
            size: 'large',
            id: 5,
            linkUrl: 'shop/mens'

          },
          {
            title: 'womens',
            imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
            size: 'large',
            id: 4,
            linkUrl: 'shop/womens'
          }]
        }
    }

    render(){
        return(
            <div className="dir-menu">
                {this.state.section.map(({id, title, imageUrl, size}) => (
                    <MenuItem key={id} imageUrl={imageUrl} title={title} size={size} />
                ))
            }
            </div>
        )   
    }
}

export default Directory;