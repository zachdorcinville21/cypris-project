import { useState } from "react";
import {
  Input,
  FormControl,
  NumberInput,
  FormLabel,
  NumberInputField,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInputStepper,
  VStack,
} from "@chakra-ui/react";

interface ResultsFiltersProps {
  setLimit: (limit: number) => void;
}

export function ResultsFilters({ setLimit }: ResultsFiltersProps) {
  const onLimitChange = (_: string, valueAsNumber: number) => {
    setLimit(valueAsNumber);
  };
  return (
    <VStack w="full">
      <FormControl w="200px">
        <FormLabel color="#fff">Results limit</FormLabel>
        <NumberInput min={1} max={100} color="#fff" onChange={onLimitChange}>
          <NumberInputField />
          <NumberInputStepper>
            <NumberIncrementStepper color="#fff" />
            <NumberDecrementStepper color="#fff" />
          </NumberInputStepper>
        </NumberInput>
      </FormControl>
    </VStack>
  );
}
