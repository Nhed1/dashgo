import { Box, Flex, Text, Avatar } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Leonardo Garreto</Text>
          <Text color="gray.300" fontSize="small">
            leonardogarreto@gmail.com
          </Text>
        </Box>
      )}
      <Avatar size="md" name="Leonardo " src="https://github.com/Nhed1.png" />
    </Flex>
  );
}
