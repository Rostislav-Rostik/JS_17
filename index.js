import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

class Text extends React.Component {
    render() {
        return (
            <div>
                text
            </div>
        );
    }
}

class Text2 extends React.Component {
    render() {
        let Text = 'Text'
        return (
            < div >
                {Text}
            </div>
        );
    }
}

class Text3 extends React.Component {
    render() {
        let Text = (<p>Text</p>);
        return (
            < div >
                {Text}
            </div>
        );
    }
}

class Text4 extends React.Component {
    render() {
        let Text1 = (<p>Text1</p>);
        let Text2 = (<p>Text2</p>);
        return (
            < div >
                {Text1}
                <p>!!!</p>
                {Text2}
            </div>
        );
    }
}

class Text5 extends React.Component {
    render() {
        let attr = 'block';
        return (
            <div id="attr">
                Text
            </div>
        );
    }
}

class Text6 extends React.Component {
    render() {
        let str = 'block';
        return (
            <div class="str">
                Text
            </div>
        );
    }
}

class Text7 extends React.Component {
    render() {
        return (
            <div style={ { 
                        background: 'green' ,
                        border: '3px solid green',
                        borderRadius: '30px'
                    } }>
            </div>
        );
    }
}

class Text8 extends React.Component {
    render() {

        let show = true;
        let content;

        if (show) {
            content = 'text 1'
        }
        else {
            content = 'text 2'
        }

        return (
            <div>
                {content}
            </div>
        );
    }
}

class Text9 extends React.Component {
    render() {
        const arr = ['a', 'b', 'c', 'd', 'e'];

        const listItems = arr.map((item) =>
            <li>{item}</li>
        );

        return (
            <ul>
                {listItems}
            </ul>
        );
    }
}

class Text10 extends React.Component {
    getText() {
        return <p>Text</p>
    }
    render() {
        return (
            <div>
                {this.getText()}
            </div>
        );
    }
}

class Text11 extends React.Component {
    getNum1() {
        return 1
    }
    getNum2() {
        return 2
    }

    render() {
        return (
            <div>
                Result: {this.getNum1() + this.getNum2()}
            </div>
        );
    }
}


const root = ReactDOM.createRoot(document.getElementById("root")).render(
    <div>
        <Text />
        <br></br>
        <Text2 />
        <Text3 />
        <Text4 />
        <Text5 />
        <br></br>
        <Text6 />
        <br></br>
        <Text7 />
        <br></br>
        <Text8 />
        <Text9 />
        <Text10 />
        <Text11 />

    </div>
    
);
