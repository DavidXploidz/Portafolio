import {PortafolioProvider} from './context/PortafolioProvider'
import AppPortafolio from './components/AppPortafolio'

	function App() {

  	return (
    	<PortafolioProvider>
      		<AppPortafolio />   
    	</PortafolioProvider>
    
 	 )
	}

	export default App