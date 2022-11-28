import React from "react";
import { Image, PageContainer, Text } from "./NotFound.style";

const NotFound = () => {
  return (
    <PageContainer>
      <Text>
        <h2>404</h2>
        <h2>Page Not Found</h2>
      </Text>
      <div>
        <Image src="/images/Padoru.png" alt='Padoru' />
      </div>
    </PageContainer>
  );
};

export default NotFound;
