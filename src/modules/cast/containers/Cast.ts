import { Dispatch } from 'redux'
import { connect } from 'react-redux'
import { RootState } from 'store/rootReducer'

import { moduleName as showsModule } from 'src/modules/shows/reducers'
import { getShowCast, getShowDetails } from 'src/modules/shows/actions/shows'

import { Cast } from 'src/modules/cast/pages'

const mapStateToProps = (state: RootState) => ({
  cast: state[showsModule].shows.cast,
  details: state[showsModule].shows.details,
  loadingOfCast: state[showsModule].shows.loadingOfCast,
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
  getShowCast: id => dispatch(getShowCast(id)),
  getShowDetails: id => dispatch(getShowDetails(id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Cast)
