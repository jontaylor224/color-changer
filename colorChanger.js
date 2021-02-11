
class ColorChanger extends React.Component  {
    state = {
        color: "rgb(100, 100, 100)"
    }

    changeColor = () => {
        const red = Math.floor(Math.random()*256)
        const green = Math.floor(Math.random()*256)
        const blue = Math.floor(Math.random()*256)
        this.setState(
            {color: `rgb(${red}, ${green}, ${blue})`}
        )
    }

    render = () => {
        return (
            <div className="colorChanger">
                <button onClick={this.changeColor}>Change Color</button>
                <div className="box" style={{backgroundColor:`${this.state.color}`}}></div>
            </div>
        )
    }
}


