import App from '../ui/App'
import { connect } from 'react-redux'
const mapStateToProps = state => {
    console.log(state)
    return ({
        notes: state.notes
    })

}
   

export default connect(mapStateToProps, null)(App)	