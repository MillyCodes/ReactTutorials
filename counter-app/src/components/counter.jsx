import React, { Component } from "react";

class Counter extends Component {
    state = {
        count: 0
    };

    // constructor() {
    //     super();
    //     this.handleIncrement = this.handleIncrement.bind(this);
    // }

    handleIncrement = () => {
        // console.log("Increment Clicked", this);
        //object.method() --returns reference to the specific object.
        //function() ---stand alone func refers to specific state, since no specific reference, but if strict mode on it will return undefined
        // use BIND! or best use ARROW function to implicitly bind!
        this.setState({ count: this.state.count + 1 });
    };

    render() {
        return (
            <div>
                <span className={this.getBadgeClasses()}>
                    {this.formatCount()}
                </span>
                <button
                    onClick={this.handleIncrement}
                    className="btn btn-secondary btn-sm"
                >
                    Increment
                </button>
            </div>
        );
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.state.count === 0 ? "warning" : "primary";
        return classes;
    }

    formatCount() {
        const { count } = this.state;
        return count === 0 ? "Zero" : count;
    }
}

export default Counter;
