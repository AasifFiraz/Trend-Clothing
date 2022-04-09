import React from "react";
import { connect } from "react-redux";
import { selectCollection } from "../../../redux/shop/shop.selectors";
import ProductComponent from "../../product-component/product-component";
import { CollectionPageContainer, ItemsContainer, TitleComponent } from "./collection.component.styles";

const CollectionPage = ({collection}) => {
    const {title, items} = collection
    console.log(collection)
    return (
        <CollectionPageContainer>
            <TitleComponent>{title}</TitleComponent>
            <ItemsContainer>
            {
                items.map(item => <ProductComponent key={item.id} item={item} />)
            }
            </ItemsContainer>
        </CollectionPageContainer>      
    )
}

const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(CollectionPage);