import React from 'react';
import { getFunName } from "../helpers";

class StorePicker extends React.Component {
    // constructor(){
    //     super();
    //     this.goToStore = this.goToStore.bind(this);
    // }


    goToStore(evt){
        evt.preventDefault();

        //Grab text from box
        console.log(this.storeInput.value);

        //Go to store url

    }

    render(){
        return (
            <form className="store-selector" onSubmit={this.goToStore.bind(this)}>
                <h2>Please enter a store</h2>
                <input type="text" required
                       placeholder="Store Name"
                       defaultValue={getFunName()}
                       ref={(input) => {this.storeInput = input}}
                />
                <button type="submit">Visitor Store</button>
            </form>
        );
    }
}

export default StorePicker;
