class CounterApp extends React.Component {
    state = {
        count: 0
    }
    componentDidMount() {
        this.intervalId = setInterval(() => {
            const count = this.state.count + 1
            this.setState({
                count,
            })
        }, 1000)
    }
    componentWillUnmount() {
        clearInterval(this.intervalId)
    }
    render() {
        return (
            <div>
                {this.state.count}
            </div>
        ) 
    }
}

export default CounterApp