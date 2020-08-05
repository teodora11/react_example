import React, { Component } from 'react';

export default class Counter extends Component {

    styles = {
        fontSize: 15,
        fontWeight: "bold"
    };

    render() {
        return (
            <React.Fragment>
                <span style={this.styles} className={this.getBadgeClass()}>{this.formatCount()}</span>
                <button
                    onClick={() => this.props.onIncrement(this.props.counter)}
                    className="btn btn-secondary btn-sm">Increment</button>
                {/*  {this.state.tags.length === 0 && "Please add new tags"}
                {this.renderTags()} */}
                <button
                    onClick={() => this.props.onDelete(this.props.counter.id)}
                    className="btn btn-danger btn-sm m-2">
                    Delete
                </button>
                <br></br>
            </React.Fragment>
        );
    }

    /*   renderTags() {
           if (this.state.tags.length === 0) {
               return <p>There are no tags</p>
           }
           return (
               <ul>
                   {this.state.tags.map(tag => <li key={tag}>{tag}</li>)}
               </ul>
           );
       }  */

    formatCount() {
        return this.props.counter.value === 0 ? "Zero" : this.props.counter.value;
    }

    getBadgeClass() {
        let classes = "badge m-2 badge-";
        if (this.props.counter.value === 0) {
            classes += "warning";
        }
        else {
            classes += "primary";
        }
        return classes;
    }
}
