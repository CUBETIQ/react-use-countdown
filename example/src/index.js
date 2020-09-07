import React from "react"
import ReactDOM from "react-dom"
import { useCountdown} from "cubetiq-react-use-countdown"

const App = () => {
    const { timeleft , start } = useCountdown()
	return (
	<div>

        <button onClick={() => start(10000)}>Start Count down </button>
		<h1>Hellos Ciybt  {timeleft}</h1>
	</div>
)
}

ReactDOM.render(<App /> , document.querySelector("#root"))
