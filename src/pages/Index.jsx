import { Box, Container, Flex, Heading, Image, Text, VStack, HStack, Link, IconButton } from "@chakra-ui/react";
import { FaInstagram, FaFacebook, FaTiktok, FaYoutube } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      {/* Header */}
      <Flex as="header" w="100%" h="10vh" align="center" justify="space-between" px={4} bg="gray.100">
        <Box>
          <Heading size="md">Logo</Heading>
        </Box>
        <HStack spacing={8}>
          <Link href="#">Hitta butik</Link>
          <Link href="#">Digitala kuponger</Link>
          <Link href="#">Köp en tidning</Link>
          <Link href="#">Företag</Link>
        </HStack>
        <HStack spacing={4}>
          <IconButton aria-label="Instagram" icon={<FaInstagram />} />
          <IconButton aria-label="Facebook" icon={<FaFacebook />} />
          <IconButton aria-label="TikTok" icon={<FaTiktok />} />
          <IconButton aria-label="YouTube" icon={<FaYoutube />} />
        </HStack>
      </Flex>

      {/* Main Banner */}
      <Box as="section" w="100%" h="40vh" bgImage="url('/path/to/beverages-image.jpg')" bgSize="cover" bgPosition="center" position="relative">
        <Flex h="100%" align="center" justify="center">
          <Heading size="2xl" color="white">Psssscht... Aaaaaaah!</Heading>
        </Flex>
        <Box position="absolute" top="10%" left="5%" bg="white" p={4} borderRadius="md" boxShadow="md">
          <Text fontSize="lg">Blanda fritt!</Text>
          <Text fontSize="2xl">2 för 39:-</Text>
        </Box>
      </Box>

      {/* Promotional Section */}
      <Flex as="section" w="100%" h="30vh">
        <Box w="50%" position="relative">
          <Image src="/path/to/person-holding-cup.jpg" w="100%" h="100%" objectFit="cover" />
          <Box position="absolute" bottom="10%" left="5%" bg="white" p={4} borderRadius="md" boxShadow="md">
            <Text fontSize="lg">Ge bort digitala kuponger</Text>
          </Box>
        </Box>
        <Box w="50%" position="relative">
          <Image src="/path/to/hand-holding-hotdog.jpg" w="100%" h="100%" objectFit="cover" />
          <Box position="absolute" top="10%" right="5%" bg="white" p={4} borderRadius="md" boxShadow="md">
            <Text fontSize="lg">Catering till kontoret?</Text>
          </Box>
        </Box>
      </Flex>

      {/* Footer */}
      <Flex as="footer" w="100%" h="10vh" align="center" justify="center" bg="gray.100">
        <Text>Legal and promotional information</Text>
      </Flex>
    </Container>
  );
};

export default Index;