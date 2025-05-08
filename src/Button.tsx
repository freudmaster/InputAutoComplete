import { Button as ChakraButton } from "@chakra-ui/react";

interface Props {
  label: string;
  onClick?: () => void;
}

export const Button = ({ label, onClick }: Props) => (
  <ChakraButton onClick={onClick}>
    {label}
  </ChakraButton>
);
