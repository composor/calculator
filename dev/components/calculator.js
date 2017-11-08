import {h, Component} from 'composi'

function ContentEditable({number}) {
  return (
    <div class="editable-field" contentEditable="false" spellcheck='false' >{number}</div>
  )
}

function Button(props) {
  return (
    <button class={props.class}>
      {props.text}
    </button>
  )
}

function MainPanel() {
  return (
    <div class='button-set--numbers'>
      <Button text="7" class="7" />
      <Button text="8" class="8" />
      <Button text="9" class="9" />
      <Button text="4" class="4" />
      <Button text="5" class="5" />
      <Button text="6" class="6" />
      <Button text="1" class="1" />
      <Button text="2" class="2" />
      <Button text="3" class="3" />
      <Button text="." class="decimal" />
      <Button text="0" class="0" />
      <Button text="=" class="equals" />
    </div>
  )
}

function ButtonSetEquations() {
  return (
    <section class="button-set--equations">
      <Button text="DEL" class='delete' />
      <Button text="÷" class='divide' />
      <Button text="×" class='multiply'/>
      <Button text="-" class='subtract'/>
      <Button text="+" class='add'/>
    </section>
  )
}
export class Calculator extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currNum: '',
      total: 0,
      memory: ''
    }
    this.operation = ''
  }
  delete() {
    this.setState({
      currNum: '',
      total: 0,
      memory: ''
    })
  }
  add(amount) {
    let state = this.state
    state += amount
    this.setState(state)
  }
  subtract(amount) {
    let state = this.state
    state -= amount
    this.setState(state)
  }
  multiply(amount) {
    let state = this.state
    state *= amount
    this.setState(state)
  }
  divide(amount) {
    let state = this.state
    state /= amount
    this.setState(state)
  }
  useNumber(e) {
    let name = e.target.className;
    if (name === 'decimal') name = '.'
    if (this.state.total === '0') this.state.total = ''
    this.setState({currNum: name})
    if (this.state.total != 0) {
      this.setState({total: this.state.total  + this.state.currNum})
    } else {
      this.setState({total: this.state.currNum})
    }
  }
  render() {
    return (
      <main class="composi-calculator">
        <ContentEditable number={this.state.total} />
        <div class='calculator-body'>
          <MainPanel />
          <ButtonSetEquations />
        </div>
      </main>
    )
  }
  handleEvent(e) {
    if (e.target.nodeName === 'BUTTON') {
      const name = e.target.className
      if (name != 'equals' 
        && name !== 'delete'
        && name !== 'divide'
        && name !== 'multiply'
        && name !== 'add'
        && name !== 'subtract'
      ) {
        this.useNumber(e)
      }

      if (name === 'delete') {
        this.delete()
      }

      // Math operations:
      if (name === 'add') {
        this.setState({memory: this.state.total})
        this.setState({total: '', oldNum: '', currNum: ''})
        this.operation = '+'
      }
      if (name === 'subtract') {
        this.setState({memory: this.state.total})
        this.setState({total: '', oldNum: '', currNum: ''})
        this.operation = '-'
      }
      if (name === 'divide') {
        this.setState({memory: this.state.total})
        this.setState({total: '', oldNum: '', currNum: ''})
        this.operation = '/'
      }
      if (name === 'multiply') {
        this.setState({memory: this.state.total})
        this.setState({total: '', oldNum: '', currNum: ''})
        this.operation = "*"
      }

      // Get total from math operation:s
      if (name === 'equals') {
        const operation = this.operation
        let total;
        switch (operation) {
          case "+":
            total = parseFloat(this.state.memory) + parseFloat(this.state.total)
            this.setState({total: total})
            break
          case "*":
            total = parseFloat(this.state.memory) * parseFloat(this.state.total)
            this.setState({total: total})
            break
          case "/":
            total = parseFloat(this.state.memory) / parseFloat(this.state.total)
            this.setState({total: total})
            break
          case "-":
            total = parseFloat(this.state.memory) - parseFloat(this.state.total)
            this.setState({total: total})
            break
        }
      }
    }
  }
  componentWasCreated() {
    this.element.addEventListener('click', this)
  }
}
