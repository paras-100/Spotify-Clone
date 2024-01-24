// Library Import
import { Flex } from "@chakra-ui/react";

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
          bgColor="#121212"
          width="100%"
          height="70px"
          mt="7px"
          borderRadius="10px"
        ></Flex>
      </Flex>
    </Flex>
  );
};

export default HomeScreen;
