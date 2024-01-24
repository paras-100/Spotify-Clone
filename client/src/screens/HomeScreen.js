// Library Import
import { Button, Flex, Heading } from "@chakra-ui/react";

// Icon Imports

// Local Imports

import SideBar from "../components/apex/SideBar";
import MainElememt from "../components/apex/MainElement";

const HomeScreen = () => {
  return (
    <Flex
      bgColor="#000000"
      width="100vw"
      height="100vh"
      direction="column"
      justifyContent="center"
      align="center"
    >
      <Flex width="1515px" height="680px" direction="column">
        <Flex justifyContent="space-between" width="100%">
          {/* Side bar */}
          <SideBar />

          {/* Main Element */}
          <MainElememt />
        </Flex>

        {/* Sign Up Footer */}
        <Flex
          bgGradient="linear(90deg, rgba(175,41,151,1) 0%, rgba(128,96,196,1) 35%, rgba(80,154,244,1) 100%)"
          width="100%"
          height="65px"
          mt="7px"
          px="20px"
          py="7px"
          justifyContent="space-between"
        >
          <Flex direction="column">
            <Heading fontSize="15px" color="white">
              Preview of Spotify
            </Heading>
            <Heading fontSize="15px" color="white" mt="5px">
              Sign up to get unlimited songs and podcasts with occasional ads.
              No credit card needed
            </Heading>
          </Flex>
          <Button width="160px" height="50px" borderRadius="30px">
            Sign up free
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default HomeScreen;
