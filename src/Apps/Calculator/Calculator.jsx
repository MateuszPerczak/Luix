import StyledCalculator, { Diplay, KeyPad, Key } from "./Calculator.style";

const Calculator = () => {
  return (
    <StyledCalculator>
      <Diplay>0</Diplay>
      <KeyPad>
        <Key style={{ gridColumn: "span 3" }}>C</Key>
        <Key>&#247;</Key>
        <Key>7</Key>
        <Key>8</Key>
        <Key>9</Key>
        <Key>&#215;</Key>
        <Key>4</Key>
        <Key>5</Key>
        <Key>6</Key>
        <Key>-</Key>
        <Key>1</Key>
        <Key>2</Key>
        <Key>3</Key>
        <Key>&#43;</Key>
        <Key style={{ gridColumn: "span 3" }}>0</Key>
        <Key>&#61;</Key>
      </KeyPad>
    </StyledCalculator>
  );
};

export default Calculator;
