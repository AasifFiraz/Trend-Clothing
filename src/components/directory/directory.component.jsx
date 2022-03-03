import React from "react";
import './directory.styles.scss'
import MenuItem from "../menu-item/menu-item.component";

class Directory extends React.Component {
    constructor(){
        super();
    
        this.state = {
            section: [{
            title: 'hats',
            imageUrl: '//i.ibb.co/cvpntL1/hats.png',
            id: 1,
            linkUrl: 'shop/hats'
          },
          {
            title: 'jackets',
            imageUrl: '//i.ibb.co/px2tCc3/jackets.png',
            id: 2,
            linkUrl: 'shop/jackets'
          },
          {
            title: 'sneakers',
            imageUrl: '//i.ibb.co/0jqHpnp/sneakers.png',
            id: 3,
            linkUrl: 'shop/sneakers'
          },
          {
            title: 'mens',
            imageUrl: '//rb.gy/2c4nun',
            size: 'large',
            id: 5,
            linkUrl: 'shop/mens'

          },
          {
            title: 'womens',
            imageUrl: '//rb.gy/uabpax',
            size: 'large',
            id: 4,
            linkUrl: 'shop/womens'
          }]
        }
    }

    render(){
        return(
            <div className="dir-menu">
                {this.state.section.map(({id, ...otherSectionProps}) => (
                    <MenuItem key={id} {...otherSectionProps} />
                ))
            }
            </div>
        )   
    }
}

export default Directory;