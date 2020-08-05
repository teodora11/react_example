import React, { Component } from 'react';
import Counter from "./counterComponent";

class Counters extends Component {

    render() {
        //argument destructuring - da ne moramo svuda da pisemo this.props.
        const { onDelete, onIncrement, onReset, counters } = this.props;

        return (
            <div>
                <button
                    className="btn btn-primary btn-sm m-2"
                    onClick={onReset}>
                    Reset
                </button><br />
                {counters.map(counter =>
                    <Counter
                        key={counter.id}
                        onDelete={onDelete}
                        onIncrement={onIncrement}
                        counter={counter} //odnosi se na onaj objekat gore koji ima svoj id i value
                    />)}
            </div>
        );
    }
}

export default Counters;