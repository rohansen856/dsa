export default class Calculator {
    value: number;
    
	constructor(value: number) {
        this.value = value
		
    }
    
	add(value: number): Calculator {
		this.value += value
        return new Calculator(this.value)
	}
    
	subtract(value: number): Calculator {
		this.value -= value
        return new Calculator(this.value)
	}
    
	multiply(value: number): Calculator {
		this.value *= value
        return new Calculator(this.value)
	}

	divide(value: number): Calculator {
		this.value /= value
        return new Calculator(this.value)
	}
    
	power(value: number): Calculator {
		this.value += value
        return new Calculator(this.value)
	}

	getResult(): number {
        return (this.value)
	}
}