import { Text } from "@chakra-ui/react";
import ImageUrlBuilder from "@sanity/image-url";
import { client } from "../sanity/lib/client";

export const DescriptionText = ({ description }) => {
  return description.map((text, i) => {
    if (text.includes("{/b} ")) {
      return (
        <Text key={i} variant={"subheading"}>
          <br /> {text.replace("{/b} ", "")} <br /> <br />
        </Text>
      );
    }
    return (
      <Text key={i} variant={"body"}>
        {text} <br /> <br />
      </Text>
    );
  });
};

export const BasedAtText = ({ basedAt }) => {
  return basedAt.map((text, i) => {
    return (
      <Text key={i} variant={"body"}>
        {text}
      </Text>
    );
  });
};

export const imageObjToUrl = (image) => {
  const builder = ImageUrlBuilder(client);
  const urlFor = (source) => builder.image(source);
  const imageUrl = urlFor(image).toString();
  return imageUrl;
};
