/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Image, Text, View } from "@aws-amplify/ui-react";
export default function HomeCard(props) {
  const { home, overrides, ...rest } = props;
  return (
    <View
      width="4356px"
      height="2201px"
      overflow="hidden"
      position="relative"
      borderRadius="40px"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      src={home?.image_url}
      {...rest}
      {...getOverrideProps(overrides, "HomeCard")}
    >
      <Image
        width="4929px"
        height="2007px"
        position="absolute"
        top="-368px"
        left="-573px"
        padding="0px 0px 0px 0px"
        src={home?.image_url}
        {...getOverrideProps(overrides, "pexels-maksim-goncharenok-4352247 1")}
      ></Image>
      <Text
        fontFamily="Inter"
        fontSize="200px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="234.375px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        width="4174px"
        height="462px"
        position="absolute"
        top="1700px"
        left="84px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="title&#xA;Discription&#xA;"
        {...getOverrideProps(overrides, "title Discription")}
      ></Text>
    </View>
  );
}
