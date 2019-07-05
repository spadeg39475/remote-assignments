class Header extends React.Component{
    
    state = {
        title: "Welcome Message",
        hamClass: "fixed"
    }

    changeHeadText = () => {
        this.setState({ title: "Have a Good Time!"})
    }

    openMenu = () =>{
        this.setState({
            hamClass: "fixed Open"
        })
    }

    exitMenu = () =>{
        this.setState({
            hamClass: "fixed"
        })
    }

    render(){
        return(
            <React.Fragment>
            <nav>
                <p className = "logo">Website Title / Logo</p>
                <ul className = "menu">
                    <img src="./iconfinder_misc-_humburger_menu_bar__1276857.png" className ="hamburger" onClick={this.openMenu} />
                    <li>Item 1</li>
                    <li>Item 2</li>
                    <li>Item 3</li>
                    <li>Item 4</li>
                </ul>
                <ul className = {this.state.hamClass}>
                    <li>Item 1  <span className = "exit" onClick={this.exitMenu}>X</span></li>
                    <li>Item 2</li>
                    <li>Item 3</li>
                    <li>Item 4</li>
                </ul>
            </nav>

            <div className="header">
                <h1 onClick={ this.changeHeadText }>{this.state.title}</h1>
            </div>
            </React.Fragment>
        )
    }
}

class Main extends React.Component{

    state = {
        moreBoxClass: "content more"
    }

    callMore =() =>{
        this.setState({moreBoxClass:"content"})
    }


    render(){
        return(
            <div className="main">
                    <h2 className="title">Section Title</h2>
                <div className="content">
                    <h4 className="box">Content Box 1</h4>
                    <h4 className="box">Content Box 2</h4>
                    <h4 className="box">Content Box 3</h4>
                    <h4 className="box">Content Box 4</h4>
                </div>
        
                <div className="call" onClick={this.callMore}>
                    <p>Call to Action</p>
                </div>

                <div className={this.state.moreBoxClass}>
                    <h4 className="box">Content Box 5</h4>
                    <h4 className="box">Content Box 6</h4>
                    <h4 className="box">Content Box 7</h4>
                    <h4 className="box">Content Box 8</h4>
                </div>
            </div>
        );
    }
}


class App extends React.Component{
    render(){
        return(
            <React.Fragment>
                <Header />
                <Main />
            </React.Fragment>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);