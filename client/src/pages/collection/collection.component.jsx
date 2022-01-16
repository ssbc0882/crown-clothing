import React from "react";
import { useSelector} from "react-redux";
import { useParams } from "react-router-dom";

import CollectionItem from "../../components/collection-item/collection-item.component";
import { selectCollection } from "../../redux/shop/shop.selectors";

import {
  CollectionPageStyleContainer,
  CollectionTitle,
  CollectionItemsContainer
} from './collection.styles';

const CollectionPage = () => {
  const {collectionId} = useParams();
  const collection = useSelector(selectCollection(collectionId))
  
  const { title, items } = collection;
  return (
    <CollectionPageStyleContainer>
      <CollectionTitle>{title}</CollectionTitle>
      <CollectionItemsContainer>
        {items.map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </CollectionItemsContainer>
    </CollectionPageStyleContainer>
  );
};

export default CollectionPage;