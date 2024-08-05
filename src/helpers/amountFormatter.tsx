import React from "react";

export const formatAmount = (value: string) => {
  const numericValue = parseFloat(value);
  if (isNaN(numericValue)) {
    return "0.00";
  }
  return numericValue.toFixed(2);
};

