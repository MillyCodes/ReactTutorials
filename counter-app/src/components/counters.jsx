import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
    render() {
        console.log("Rendered - Counters");

        const {
            onReset,
            counters,
            onDelete,
            onIncrement,
            onDecrement //can this be one with the delete button?
            // how can i modify this in a smart way?
        } = this.props;

        return (
            <div>
                <button
                    onClick={onReset}
                    className="btn btn-primary btn-sm m-2"
                >
                    Reset
                </button>
                {counters.map(counter => (
                    <Counter
                        key={counter.id}
                        onDelete={onDelete}
                        onIncrement={onIncrement}
                        onDecrement={onDecrement}
                        counter={counter}
                    />
                ))}
            </div>
        );
    }
}

export default Counters;
