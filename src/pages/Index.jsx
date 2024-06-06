import { Box, Container, Flex, Heading, HStack, IconButton, Input, Link, Stack, Text, VStack } from "@chakra-ui/react";
import { FaSearch, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      {/* Header */}
      <Box bg="gray.900" color="white" py={4}>
        <Flex justify="space-between" align="center" px={4}>
          <Heading as="h1" size="lg">
            Financial Times
          </Heading>
          <HStack spacing={4}>
            <Link href="#">Home</Link>
            <Link href="#">World</Link>
            <Link href="#">Politics</Link>
            <Link href="#">Business</Link>
            <Link href="#">Tech</Link>
          </HStack>
          <HStack spacing={2}>
            <Input placeholder="Search" size="sm" />
            <IconButton aria-label="Search" icon={<FaSearch />} size="sm" />
          </HStack>
        </Flex>
      </Box>

      {/* Main Content Area */}
      <Stack direction={{ base: "column", md: "row" }} spacing={4} my={4}>
        <Box flex={3}>
          {/* Featured Article */}
          <Box bg="gray.100" p={4} mb={4}>
            <Heading as="h2" size="md" mb={2}>
              Featured Article
            </Heading>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
            </Text>
          </Box>

          {/* Grid of Articles */}
          <Box>
            <Heading as="h3" size="sm" mb={2}>
              More Articles
            </Heading>
            <Flex wrap="wrap" spacing={4}>
              {[...Array(6)].map((_, index) => (
                <Box key={index} bg="gray.100" p={4} m={2} flexBasis={{ base: "100%", md: "30%" }}>
                  <Heading as="h4" size="sm" mb={2}>
                    Article {index + 1}
                  </Heading>
                  <Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
                  </Text>
                </Box>
              ))}
            </Flex>
          </Box>
        </Box>

        {/* Sidebar */}
        <Box flex={1} bg="gray.50" p={4}>
          <Heading as="h3" size="sm" mb={2}>
            Trending
          </Heading>
          <VStack spacing={2}>
            {[...Array(5)].map((_, index) => (
              <Text key={index}>Trending Article {index + 1}</Text>
            ))}
          </VStack>
        </Box>
      </Stack>

      {/* Footer */}
      <Box bg="gray.900" color="white" py={4} mt={4}>
        <Flex justify="space-between" align="center" px={4}>
          <HStack spacing={4}>
            <Link href="#">About</Link>
            <Link href="#">Contact</Link>
            <Link href="#">Privacy Policy</Link>
            <Link href="#">Terms of Service</Link>
          </HStack>
          <HStack spacing={4}>
            <IconButton aria-label="Facebook" icon={<FaFacebook />} />
            <IconButton aria-label="Twitter" icon={<FaTwitter />} />
            <IconButton aria-label="Instagram" icon={<FaInstagram />} />
          </HStack>
        </Flex>
      </Box>
    </Container>
  );
};

export default Index;