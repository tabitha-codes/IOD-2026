import { useState } from 'react'

function Calculator() {
  const [num1, setNum1] = useState('')
  const [num2, setNum2] = useState('')
  const [operator, setOperator] = useState('+')
  const [result, setResult] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault()

    const a = parseFloat(num1)
    const b = parseFloat(num2)
    let answer

    if (operator === '+') answer = a + b
    else if (operator === '-') answer = a - b
    else if (operator === '*') answer = a * b
    else if (operator === '/') answer = a / b

    setResult(answer)
  }

  return (
    <div className="Calculator componentBox">
      <form onSubmit={handleSubmit}>
        <label>Number 1:
          <input type="number" name="num1" value={num1}
            onChange={(e) => setNum1(e.target.value)} />
        </label>
        <label>Operator:
          <select name="operator" value={operator}
            onChange={(e) => setOperator(e.target.value)}>
            <option value="+">+</option>
            <option value="-">-</option>
            <option value="*">×</option>
            <option value="/">÷</option>
          </select>
        </label>
        <label>Number 2:
          <input type="number" name="num2" value={num2}
            onChange={(e) => setNum2(e.target.value)} />
        </label>
        <button>Calculate</button>
      </form>
      {result !== null && <p>Result: {result}</p>}
    </div>
  )
}

export default Calculator