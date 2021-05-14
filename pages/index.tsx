import Head from "next/head";
import styles from "../styles/Home.module.css";
import DynamicText from "components/DynamicText";
import { Input, Flex, Box } from "@chakra-ui/react";
import { useRef } from "react";

const Home = () => {
  const dynamicTextRef = useRef(null);
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    dynamicTextRef.current.changeValue(e.target.value);
  };

  return (
    <Flex minH="100vh" px={2} direction="column" justifyContent="center" align="center">
      <Head>
        <title>Coding Test</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Box padding="20" bg="teal.100" maxW="4xl">
          <DynamicText ref={dynamicTextRef} />
          <Input bg="gray.100" onChange={onChange} />
        </Box>
      </main>
    </Flex>
  );
};

export default Home;
