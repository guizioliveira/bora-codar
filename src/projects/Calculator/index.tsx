import React, { useEffect, useState } from "react"
import {
  Equals,
  Divide,
  X,
  Plus,
  Minus,
  Percent,
  PlusMinus,
} from "phosphor-react"
import Button from "./Button"

export default function Calculator() {
  const [currentNumber, setCurrentNumber] = useState<string>("")
  const [calculationResult, setCalculationResult] = useState<number>(0)

  function handleCurrentNumber(newValue: number | string) {
    setCurrentNumber((state) => state + newValue.toString())
  }

  function handleCalculation() {
    setCalculationResult(eval(currentNumber))
  }

  function handleOperators(operator: string) {
    handleCalculation()
    setCurrentNumber(eval(currentNumber))
    handleCurrentNumber(operator)
  }

  function resetCalculation() {
    setCalculationResult(0)
    setCurrentNumber("")
  }

  return (
    <div className="flex h-[calc(100vh-80px)] w-screen items-center justify-center bg-gradient-to-b from-[#807ECE] to-[#8E7ECE]">
      <div className="flex h-[566px] w-[358px] flex-col gap-[26px] rounded-[48px] bg-[#2D2A37] p-8 pt-[54px] shadow-calculator-box">
        <div className="w-full pl-[18px] pr-[22px]">
          <span className="block h-7 w-full text-right font-rubik text-[20px] text-[#686868]">
            {currentNumber}
          </span>
          <div className="flex items-center justify-between">
            <Equals weight="bold" size={20} color={"#6B6B6B"} />
            <span className="text-right font-rubik text-[36px] text-[#EBEBEB]">
              {calculationResult.toLocaleString("pt-BR", )}
            </span>
          </div>
        </div>
        <div className="grid grid-flow-row grid-cols-4 gap-3">
          <Button variant="operator-highlight" label={"CE"} />
          <Button variant="number" label={"C"} onClick={resetCalculation} />
          <Button
            variant="number"
            label={<Percent size={28} />}
            onClick={() => handleCurrentNumber(" % ")}
          />
          <Button
            variant="operator"
            label={<Divide size={28} />}
            onClick={() => handleOperators(" / ")}
          />
          <Button
            variant="number"
            label={7}
            onClick={() => handleCurrentNumber(7)}
          />
          <Button
            variant="number"
            label={8}
            onClick={() => handleCurrentNumber(8)}
          />
          <Button
            variant="number"
            label={9}
            onClick={() => handleCurrentNumber(9)}
          />
          <Button
            variant="operator"
            label={<X size={28} />}
            onClick={() => handleOperators(" * ")}
          />
          <Button
            variant="number"
            label={4}
            onClick={() => handleCurrentNumber(4)}
          />
          <Button
            variant="number"
            label={5}
            onClick={() => handleCurrentNumber(5)}
          />
          <Button
            variant="number"
            label={6}
            onClick={() => handleCurrentNumber(6)}
          />
          <Button
            variant="operator"
            label={<Minus size={28} />}
            onClick={() => handleOperators(" - ")}
          />
          <Button
            variant="number"
            label={1}
            onClick={() => handleCurrentNumber(1)}
          />
          <Button
            variant="number"
            label={2}
            onClick={() => handleCurrentNumber(2)}
          />
          <Button
            variant="number"
            label={3}
            onClick={() => handleCurrentNumber(3)}
          />
          <Button
            variant="operator"
            label={<Plus size={28} />}
            onClick={() => handleOperators(" + ")}
          />
          <Button variant="number" label={<PlusMinus size={28} />} />
          <Button label={0} variant="number" />
          <Button
            label={","}
            variant="number"
            onClick={() => handleCurrentNumber(".")}
          />
          <Button
            variant="operator"
            label={<Equals size={28} />}
            onClick={handleCalculation}
          />
        </div>
      </div>
    </div>
  )
}
