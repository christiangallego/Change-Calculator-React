import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      changeToCustomer: 0,
      amountReceived: 0,
      amountDue: 0,
      twenties: 0,
      tens: 0,
      fives: 0,
      ones: 0,
      quarters: 0,
      dimes: 0,
      nickels: 0,
      pennies: 0,
      status: null
    };
    this.getAmountDue = this.getAmountDue.bind(this);
    this.getAmountReceived = this.getAmountReceived.bind(this);
    this.calculate = this.calculate.bind(this);
  }

  getAmountDue(event) {
    //   console.log(event);
    //   console.log(event.target);
    //   console.log(event.target.value);
    this.setState({
      amountDue: parseFloat(event.target.value)
    });
  }

  getAmountReceived(event) {
    this.setState({
      amountReceived: parseFloat(event.target.value)
    });
  }

  calculate() {
    console.log("test");

  let moneyDue = parseFloat(
    this.state.amountReceived - this.state.amountDue).toFixed(2);
    console.log(moneyDue);
    //console.log(moneyDue /.01);

    let twent;
    let ten;
    let five;
    let one;
    let quart;
    let dim;
    let nick;
    let pen = 0;

      // Twenties
      if (moneyDue >= 20) {
        twent = Math.floor(moneyDue / 20);
        moneyDue %= 20;
      }

      // Tens
      if (moneyDue >= 10 && moneyDue < 20) {
        ten = Math.floor(moneyDue / 10);
        moneyDue %= 10;
      }

      // Fives
      if (moneyDue >= 5 && moneyDue < 10) {
        five = Math.floor(moneyDue / 5);
        moneyDue %= 5;
      }

      // Ones
      if (moneyDue >= 1 && moneyDue < 5) {
        one = Math.floor(moneyDue / 1);
        moneyDue %= 1;
      }

      // Quarters
      if (moneyDue >= 0.25 && moneyDue < 1) {
        quart = Math.floor(moneyDue / 0.25);
        moneyDue %= 0.25;
      }

      // Dimes
      if (moneyDue >= 0.1 && moneyDue < 0.25) {
        dim = Math.floor(moneyDue / 0.1);
        moneyDue %= 0.1;
      }

      // Nickels
      if (moneyDue >= 0.05 && moneyDue < 0.1) {
        nick = Math.floor(moneyDue / 0.05);
        moneyDue %= 0.05;
      }

      // Pennies
      if (moneyDue >= 0.01 && moneyDue < 0.05) {
        pen = Math.round(moneyDue / 0.01);
      }

      this.setState({
        twenties: twent,
        tens: ten,
        fives: five,
        ones: one,
        quarters: quart,
        dimes: dim,
        nickels: nick,
        pennies: pen,
        changeToCustomer: moneyDue
      });
    }

    render() {
      return (
        <div className="container">
          <h2 className="text-white">Change Calculator</h2>
          <hr />
          <div className="row">
            <div className="col-4">
              <div className="card" className="card text-left">
                <h6 className="card-header">Enter Information</h6>
                <div className="card-block">
                  <h6 className="card-title">How much is due?</h6>
                  <input
                    onChange={this.getAmountDue}
                    type="text"
                    id="amount-due"
                    name="amountDue"
                    placeholder="0"
                  />
                  <h6 className="card-title-1"> How much was received?</h6>
                  <input
                    onChange={this.getAmountReceived}
                    type="text"
                    id="amount-received"
                    name="amountReceived"
                    placeholder="0"
                  />
                  <div className="card-footer">
                    <button
                      onClick={this.calculate}
                      className="btn btn-primary btn-block"
                    >
                      Calculate
                  </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-8">
              <div className="card">
                <div className="card-block">
                  <div className="alert alert-success text-center" name="status">
                    The total change due is ${(this.state.amountReceived - this.state.amountDue).toFixed(2)}
                  </div>
                  {/* <div className="alert alert-danger" name = "status">
                  The total money owed to customer is
                </div> */}

                  <div className="row">
                    <div className="well col-3 text-center card">
                      <h4>Twenties</h4>
                      <p className="lead">{this.state.twenties}</p>
                    </div>

                    <div className="well col-3 text-center card">
                      <h4>Tens</h4>
                      <p className="lead">{this.state.tens}</p>
                    </div>

                    <div className="well col-3 text-center card">
                      <h4>Fives</h4>
                      <p className="lead">{this.state.fives}</p>
                    </div>

                    <div className="well col-3 text-center card">
                      <h4>Ones</h4>
                      <p className="lead">{this.state.ones}</p>
                    </div>

                    <div className="well col-3 text-center card">
                      <h4>Quarters</h4>
                      <p className="lead">{this.state.quarters}</p>
                    </div>

                    <div className="well col-3 text-center card">
                      <h4>Dimes</h4>
                      <p className="lead">{this.state.dimes}</p>
                    </div>

                    <div className="well col-3 text-center card">
                      <h4>Nickels</h4>
                      <p className="lead">{this.state.nickels}</p>
                    </div>

                    <div className="well col-3 text-center card">
                      <h4>Pennies</h4>
                      <p className="lead">{this.state.pennies}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }

export default App;