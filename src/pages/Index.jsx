import { Container, VStack, Heading, Text, Box, Image, SimpleGrid } from "@chakra-ui/react";

const boatData = [
  {
    name: "Sailboat",
    image: "/images/sailboat.jpg",
    history: "Sailboats have been used for thousands of years, originally developed for trade and transportation. They harness the power of the wind to move across the water.",
    info: "Modern sailboats are used for recreation, sport, and racing. They come in various sizes and designs, from small dinghies to large yachts."
  },
  {
    name: "Motorboat",
    image: "/images/motorboat.jpg",
    history: "Motorboats emerged in the late 19th century with the advent of the internal combustion engine. They revolutionized water travel by providing faster and more reliable transportation.",
    info: "Today, motorboats are popular for leisure activities, fishing, and water sports. They range from small speedboats to large cruisers."
  },
  {
    name: "Kayak",
    image: "/images/kayak.jpg",
    history: "Kayaks were originally developed by indigenous peoples of the Arctic for hunting and transportation. They are known for their lightweight and maneuverability.",
    info: "Modern kayaks are used for recreation, touring, and competitive sports. They are available in various designs, including sit-on-top and inflatable models."
  }
];

const Index = () => {
  return (
    <Container maxW="container.xl" py={10}>
      <VStack spacing={8}>
        <Heading as="h1" size="2xl">Welcome to the Boat Enthusiast's Haven</Heading>
        <Text fontSize="xl" textAlign="center">Explore different types of boats, their history, and interesting facts.</Text>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
          {boatData.map((boat, index) => (
            <Box key={index} borderWidth="1px" borderRadius="lg" overflow="hidden">
              <Image src={boat.image} alt={boat.name} />
              <Box p={6}>
                <Heading as="h3" size="lg" mb={4}>{boat.name}</Heading>
                <Text fontSize="md" mb={4}><strong>History:</strong> {boat.history}</Text>
                <Text fontSize="md"><strong>Info:</strong> {boat.info}</Text>
              </Box>
            </Box>
          ))}
        </SimpleGrid>
      </VStack>
    </Container>
  );
};

export default Index;