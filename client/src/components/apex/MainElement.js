// Library Import
import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Heading,
  IconButton,
  Image,
  Link,
  Text,
  Icon,
  useBoolean,
  SlideFade,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { motion } from "framer-motion";

// Icon Imports
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import {
  FaInstagram,
  FaTwitter,
  FaFacebook,
  FaRegCopyright,
  FaPlay,
} from "react-icons/fa";

// Local Imports
import "./apex.css";

const MainElememt = () => {
  const [palyFade, setPlayFade] = useBoolean();

  return (
    <>
      <Flex
        bgColor="#121212"
        width="1155px"
        height="607px"
        borderRadius="10px"
        direction="column"
      >
        {/* Header */}
        <Flex
          width="100%"
          height="170px"
          justifyContent="space-between"
          alignItems="center"
          px="25px"
        >
          <Flex justifyContent="space-between" width="75px">
            <IconButton
              icon={<IoIosArrowBack />}
              isRound={true}
              size="sm"
              fontSize="25px"
              pr="3px"
              bgColor="#090909"
              color="#A0A0A0"
              _hover={{}}
            />
            <IconButton
              icon={<IoIosArrowForward />}
              isRound={true}
              size="sm"
              fontSize="25px"
              pl="3px"
              bgColor="#090909"
              color="#A0A0A0"
              _hover={{}}
            />
          </Flex>

          <Flex justifyContent="space-between" width="225px">
            <Button
              width="110px"
              height="50px"
              borderRadius="30px"
              bg="none"
              color="#A0A0A0"
              _hover={{ transform: "scale(1.05)" }}
              transition="transform 0.2s ease-in-out"
            >
              Sign up
            </Button>
            <Button
              width="110px"
              height="50px"
              borderRadius="30px"
              _hover={{ transform: "scale(1.05)" }}
              transition="transform 0.2s ease-in-out"
            >
              Log in
            </Button>
          </Flex>
        </Flex>

        {/* Spotify playlist */}
        <Flex
          className="mainElementScroll"
          width="100%"
          minH="543px"
          bgColor="#121212"
          px="25px"
          direction="column"
          borderRadius="10px"
        >
          <Flex width="100%" justifyContent="space-between">
            <Button
              bg="none"
              fontSize="25px"
              fontWeight="700"
              letterSpacing="-1px"
              color="white"
              width="170px"
              _hover={{ textDecoration: "underline" }}
              _focus={{ textDecoration: "underline" }}
            >
              Spotify Playlist
            </Button>
            <Button
              bg="none"
              fontSize="15px"
              fontWeight="700"
              color="#A0A0A0"
              width="60px"
              _hover={{ textDecoration: "underline" }}
              _focus={{ textDecoration: "underline" }}
            >
              Show all
            </Button>
          </Flex>

          <Grid templateColumns="repeat(5, 1fr)" gap="5" mt="10px">
            {[1, 1, 1, 1, 1].map(() => (
              <GridItem
                w="205px"
                h="285px"
                bgColor="#181818"
                borderRadius="10px"
                _hover={{ bgColor: "#242424" }}
                transition="transform 0.2s ease-in-out"
                position="relative"
              >
                <motion.div
                  initial={{
                    opacity: 0,
                    scale: 1,
                    width: "100%",
                    height: "100%",
                    position: "absolute",
                    zIndex: 1,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  whileHover={{ opacity: 1, scale: 1, y: "-20px" }}
                  transition={{ duration: 0.5 }}
                >
                  <IconButton
                    icon={<FaPlay />}
                    size="lg"
                    bgColor="#1ed760"
                    isRound={true}
                    ml="115px"
                    mt="64px"
                  />
                </motion.div>

                <Flex
                  width="100%"
                  height="100%"
                  direction="column"
                  px="15px"
                  py="15px"
                  position="absolute"
                >
                  {/* <Image src={playlistImage} /> */}

                  <Box
                    bgColor="grey"
                    width="173px"
                    height="173px"
                    boxShadow="dard-lg"
                    borderRadius="5px"
                  ></Box>

                  <Heading color="white" fontSize="17px" mt="10px">
                    Today's Top Hits
                  </Heading>
                  <Text fontSize="15px" color="#A0A0A0" mt="5px">
                    Arijit Singh in top of the hottest 50!
                  </Text>
                </Flex>
              </GridItem>
            ))}
          </Grid>

          <Flex width="100%" justifyContent="space-between" mt="30px">
            <Button
              bg="none"
              fontSize="25px"
              fontWeight="700"
              letterSpacing="-1px"
              color="white"
              width="70px"
              _hover={{ textDecoration: "underline" }}
              _focus={{ textDecoration: "underline" }}
            >
              Sleep
            </Button>
            <Button
              bg="none"
              fontSize="15px"
              fontWeight="700"
              color="#A0A0A0"
              width="60px"
              _hover={{ textDecoration: "underline" }}
              _focus={{ textDecoration: "underline" }}
            >
              Show all
            </Button>
          </Flex>

          <Grid templateColumns="repeat(5, 1fr)" gap="5" mt="10px">
            {[1, 1, 1, 1, 1].map(() => (
              <GridItem
                w="205px"
                h="285px"
                bgColor="#181818"
                borderRadius="10px"
                _hover={{ bgColor: "#242424" }}
                transition="transform 0.2s ease-in-out"
                position="relative"
              >
                <motion.div
                  initial={{
                    opacity: 0,
                    scale: 1,
                    width: "100%",
                    height: "100%",
                    position: "absolute",
                    zIndex: 1,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  whileHover={{ opacity: 1, scale: 1, y: "-20px" }}
                  transition={{ duration: 0.5 }}
                >
                  <IconButton
                    icon={<FaPlay />}
                    size="lg"
                    bgColor="#1ed760"
                    isRound={true}
                    ml="115px"
                    mt="64px"
                  />
                </motion.div>

                <Flex
                  width="100%"
                  height="100%"
                  direction="column"
                  px="15px"
                  py="15px"
                  position="absolute"
                >
                  {/* <Image src={playlistImage} /> */}

                  <Box
                    bgColor="grey"
                    width="173px"
                    height="173px"
                    boxShadow="dard-lg"
                    borderRadius="5px"
                  ></Box>

                  <Heading color="white" fontSize="17px" mt="10px">
                    Today's Top Hits
                  </Heading>
                  <Text fontSize="15px" color="#A0A0A0" mt="5px">
                    Arijit Singh in top of the hottest 50!
                  </Text>
                </Flex>
              </GridItem>
            ))}
          </Grid>

          <Flex width="100%" height="350px" mt="120px">
            <Grid templateColumns="repeat(5, 1fr)" gap="5" mt="10px">
              <GridItem width="205px" height="200px">
                <Flex direction="column">
                  <Heading fontSize="20px" color="white">
                    Company
                  </Heading>
                  <Link
                    as={RouterLink}
                    color="#A0A0A0"
                    fontSize="15px"
                    fontWeight="700"
                    mt="5px"
                  >
                    About
                  </Link>
                  <Link
                    as={RouterLink}
                    color="#A0A0A0"
                    fontSize="15px"
                    fontWeight="700"
                    mt="5px"
                  >
                    Jobs
                  </Link>
                  <Link
                    as={RouterLink}
                    color="#A0A0A0"
                    fontSize="15px"
                    fontWeight="700"
                    mt="5px"
                  >
                    For the Record
                  </Link>
                </Flex>
              </GridItem>

              <GridItem width="205px" height="200px">
                <Flex direction="column">
                  <Heading fontSize="20px" color="white">
                    Communities
                  </Heading>
                  <Link
                    as={RouterLink}
                    color="#A0A0A0"
                    fontSize="15px"
                    fontWeight="700"
                    mt="5px"
                  >
                    For Artists
                  </Link>
                  <Link
                    as={RouterLink}
                    color="#A0A0A0"
                    fontSize="15px"
                    fontWeight="700"
                    mt="5px"
                  >
                    Developers
                  </Link>
                  <Link
                    as={RouterLink}
                    color="#A0A0A0"
                    fontSize="15px"
                    fontWeight="700"
                    mt="5px"
                  >
                    Adverising
                  </Link>
                  <Link
                    as={RouterLink}
                    color="#A0A0A0"
                    fontSize="15px"
                    fontWeight="700"
                    mt="5px"
                  >
                    Investors
                  </Link>
                  <Link
                    as={RouterLink}
                    color="#A0A0A0"
                    fontSize="15px"
                    fontWeight="700"
                    mt="5px"
                  >
                    Vendors
                  </Link>
                </Flex>
              </GridItem>

              <GridItem width="205px" height="200px">
                <Flex direction="column">
                  <Heading fontSize="20px" color="white">
                    Useful links
                  </Heading>
                  <Link
                    as={RouterLink}
                    color="#A0A0A0"
                    fontSize="15px"
                    fontWeight="700"
                    mt="5px"
                  >
                    Support
                  </Link>
                  <Link
                    as={RouterLink}
                    color="#A0A0A0"
                    fontSize="15px"
                    fontWeight="700"
                    mt="5px"
                  >
                    Free Mobile App
                  </Link>
                  <Link
                    as={RouterLink}
                    color="#A0A0A0"
                    fontSize="15px"
                    fontWeight="700"
                    mt="5px"
                  >
                    For the Record
                  </Link>
                </Flex>
              </GridItem>
            </Grid>

            <Flex justifyContent="space-between" width="170px">
              <Icon
                as={FaInstagram}
                color="white"
                bgColor="#292929"
                width="40px"
                height="40px"
                borderRadius="20px"
                px="12px"
              />
              <Icon
                as={FaTwitter}
                color="white"
                bgColor="#292929"
                width="40px"
                height="40px"
                borderRadius="20px"
                px="12px"
              />
              <Icon
                as={FaFacebook}
                color="white"
                bgColor="#292929"
                width="40px"
                height="40px"
                borderRadius="20px"
                px="12px"
              />
            </Flex>
          </Flex>

          <hr />

          <Flex my="30px">
            <Icon as={FaRegCopyright} color="#A0A0A0" mt="2px" mr="5px" />
            <Heading fontSize="15px" color="#A0A0A0">
              2024 Spotify AB
            </Heading>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};

export default MainElememt;
