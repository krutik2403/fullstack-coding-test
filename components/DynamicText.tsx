import { Text } from "@chakra-ui/layout";
import React, { MutableRefObject, useImperativeHandle, useState } from "react";

type Props = {
  ref: MutableRefObject<any>;
};
const DynamicText = React.forwardRef((props: Props, ref) => {
  const [value, setValue] = useState("Random Text");

  const changeValue = (newValue) => {
    setValue(newValue);
  };
  useImperativeHandle(ref, () => {
    return {
      changeValue: changeValue,
    };
  });

  return <Text as="h1">{value}</Text>;
});

export default DynamicText;
