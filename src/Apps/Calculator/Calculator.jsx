import StyledCalculator, {
  StyledCalculatorDiplay,
  StyledCalculatorKeyPad,
  StyledCalculatorKey,
} from "./Calculator.style";

const Calculator = () => {
  return (
    <StyledCalculator>
      <StyledCalculatorDiplay>12+11</StyledCalculatorDiplay>
      <StyledCalculatorKeyPad>
        <StyledCalculatorKey>7</StyledCalculatorKey>
        <StyledCalculatorKey>8</StyledCalculatorKey>
        <StyledCalculatorKey>9</StyledCalculatorKey>
        <StyledCalculatorKey>X</StyledCalculatorKey>
        <StyledCalculatorKey>4</StyledCalculatorKey>
        <StyledCalculatorKey>5</StyledCalculatorKey>
        <StyledCalculatorKey>6</StyledCalculatorKey>
        <StyledCalculatorKey>-</StyledCalculatorKey>
        <StyledCalculatorKey>1</StyledCalculatorKey>
        <StyledCalculatorKey>2</StyledCalculatorKey>
        <StyledCalculatorKey>3</StyledCalculatorKey>
        <StyledCalculatorKey>+</StyledCalculatorKey>
        <StyledCalculatorKey></StyledCalculatorKey>
        <StyledCalculatorKey>0</StyledCalculatorKey>
        <StyledCalculatorKey></StyledCalculatorKey>
        <StyledCalculatorKey>=</StyledCalculatorKey>
      </StyledCalculatorKeyPad>
    </StyledCalculator>
  );
};

export default Calculator;
