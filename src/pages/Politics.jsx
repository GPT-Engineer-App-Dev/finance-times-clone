import { Box, Container, Heading, Image } from "@chakra-ui/react";

const Politics = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <Heading as="h1" size="xl" mb={4}>
        Politics
      </Heading>
      <Box display="flex" justifyContent="center" alignItems="center">
        <Image
          src="/images/donald_trump.jpg"
          alt="Donald Trump"
          maxW="100%"
          height="auto"
        />
      </Box>
    </Container>
  );
};

export default Politics;