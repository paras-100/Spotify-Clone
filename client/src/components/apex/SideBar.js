// Library Import
import {
  Button,
  Flex,
  Heading,
  Icon,
  IconButton,
  Image,
  Link,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

// Icon Imports
import { GoHomeFill } from "react-icons/go";
import { FiSearch } from "react-icons/fi";
import { VscLibrary } from "react-icons/vsc";
import { GoPlus } from "react-icons/go";
import { TbWorld } from "react-icons/tb";

// Local Imports
import spotifyFull from "../../assets/spotifyFull.png";
import "../apex/apex.css";

const SideBar = () => {
  return (
    <Flex
      width="352px"
      height="607px"
      direction="column"
      justifyContent="space-between"
    >
      {/* First component */}
      <Flex
        bgColor="#121212"
        width="100%"
        height="156px"
        borderRadius="10px"
        alignItems="start"
      >
        <Flex
          direction="column"
          justifyContent="space-between"
          height="120px"
          my="15px"
          ml="10px"
        >
          <Image
            src={spotifyFull}
            width="100px"
            height="30px"
            ml="17px"
            my="5px"
          />
          <Button
            leftIcon={<GoHomeFill />}
            bg="none"
            color="#A0A0A0"
            fontSize="15px"
            iconSpacing="20px"
            _hover={{ color: "white", textDecoration: "underline" }}
          >
            Home
          </Button>

          <Button
            leftIcon={<FiSearch />}
            bg="none"
            color="#A0A0A0"
            fontSize="15px"
            iconSpacing="20px"
            _hover={{ color: "white", textDecoration: "underline" }}
          >
            Search
          </Button>
        </Flex>
      </Flex>

      {/* Second component */}
      <Flex
        direction="column"
        bgColor="#121212"
        width="100%"
        height="443px"
        borderRadius="10px"
        alignItems="start"
      >
        {/* Your Library */}
        <Flex
          justifyContent="space-between"
          width="100%"
          px="5px"
          py="5px"
          mx="10px"
        >
          <Button
            leftIcon={<VscLibrary />}
            bg="none"
            color="#A0A0A0"
            fontSize="20px"
            iconSpacing="20px"
            _hover={{ color: "white", textDecoration: "underline" }}
          >
            Your Library
          </Button>
          <IconButton
            icon={<GoPlus />}
            fontSize="25px"
            bg="none"
            color="#A0A0A0"
            borderRadius="50px"
            _hover={{
              color: "white",
              textDecoration: "underline",
              bgColor: "#1F1F1F",
            }}
            _active={{ bg: "none" }}
          />
        </Flex>

        {/* Scroll banners */}
        <Flex
          className="libraryScroll"
          direction="column"
          width="100%"
          height="180px"
          alignItems="center"
          py="10px"
        >
          <Flex
            direction="column"
            width="95%"
            minH="140px"
            bgColor="#242424"
            mt="-5px"
            px="20px"
            py="17px"
            borderRadius="10px"
          >
            <Heading
              color="white"
              fontSize="17px"
              fontWeight="900"
              letterSpacing="0.5px"
            >
              Create your first playlist
            </Heading>
            <Heading color="white" fontSize="15px" fontWeight="700" mt="10px">
              It's easy, we'll help you
            </Heading>
            <Button
              width="125px"
              height="50px"
              borderRadius="20px"
              fontSize="13px"
              mt="20px"
            >
              Create playlist
            </Button>
          </Flex>
          <Flex
            direction="column"
            width="95%"
            minH="140px"
            bgColor="#242424"
            mt="15px"
            px="20px"
            py="17px"
            borderRadius="10px"
          >
            <Heading
              color="white"
              fontSize="17px"
              fontWeight="900"
              letterSpacing="0.5px"
            >
              Create your first playlist
            </Heading>
            <Heading color="white" fontSize="15px" fontWeight="700" mt="10px">
              It's easy, we'll help you
            </Heading>
            <Button
              width="125px"
              height="50px"
              borderRadius="20px"
              fontSize="13px"
              mt="20px"
            >
              Create playlist
            </Button>
          </Flex>
        </Flex>

        {/* navigations */}
        <Flex
          direction="column"
          bgColor="#121212"
          width="100%"
          height="200px"
          pl="30px"
          pt="40px"
        >
          <Flex justifyContent="space-between" width="250px">
            <Link
              as={RouterLink}
              color="#A0A0A0"
              fontSize="10px"
              fontWeight="700"
            >
              Legal
            </Link>
            <Link
              as={RouterLink}
              color="#A0A0A0"
              fontSize="10px"
              fontWeight="700"
            >
              Privacy Center
            </Link>
            <Link
              as={RouterLink}
              color="#A0A0A0"
              fontSize="10px"
              fontWeight="700"
            >
              Privacy Policy
            </Link>
            <Link
              as={RouterLink}
              color="#A0A0A0"
              fontSize="10px"
              fontWeight="700"
            >
              Cookies
            </Link>
          </Flex>
          <Flex justifyContent="space-between" width="130px" mt="15px">
            <Link
              as={RouterLink}
              color="#A0A0A0"
              fontSize="10px"
              fontWeight="700"
            >
              About Ads
            </Link>
            <Link
              as={RouterLink}
              color="#A0A0A0"
              fontSize="10px"
              fontWeight="700"
            >
              Accessibility
            </Link>
          </Flex>
          <Button
            width="120px"
            height="35px"
            borderRadius="30px"
            bg="none"
            color="white"
            border="1px"
            mt="50px"
          >
            <Icon as={TbWorld} mr="7px" boxSize="20px" /> English
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default SideBar;
