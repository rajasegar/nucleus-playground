import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import DraggableComponent from "../components/DraggableComponent";
import { ComponentsProvider } from "../contexts/ComponentsContext";
import Preview from "../components/Preview";
import componentsList from "./_componentList";
import { Flex, Box, Link, Text } from "rebass/styled-components";
import { useTheme } from "@freshworks/react-nucleus";

const Home: NextPage = () => {
  const theme = useTheme();
  return (
    <div className={styles.container}>
      <Head>
        <title>Nucleus - Playground</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Flex
        px={2}
        color="white"
        bg={theme.palette.elephant}
        alignItems="center"
      >
        <Text p={2} fontWeight="bold">
          Nucleus
        </Text>
        <Text>Playground</Text>
        <Box mx="auto" />
        <Link variant="nav" href="#!">
          Github
        </Link>
      </Flex>

      <ComponentsProvider>
        <main className={styles.main}>
          <Box bg={theme.palette.E700}>
            {componentsList.map((component, idx) => (
              <DraggableComponent
                id={component.id}
                name={component.name}
                key={idx}
              />
            ))}
          </Box>
          <Preview />
          <Box
            bg={theme.palette.smoke}
            sx={{ "border-left": `1px solid ${theme.palette.E500}` }}
          ></Box>
        </main>
      </ComponentsProvider>
    </div>
  );
};

export default Home;
