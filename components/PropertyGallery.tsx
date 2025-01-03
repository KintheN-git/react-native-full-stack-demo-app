import { View, Text, FlatList } from "react-native";
import React from "react";

const PropertyGallery = () => {
  return (
    <FlatList data={[1, 2, 3]}>
      <Text>PropertyGallery</Text>
    </FlatList>
  );
};

export default PropertyGallery;
