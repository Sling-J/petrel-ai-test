import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { RootState } from 'store/rootReducer'

import { moduleName as showsModule } from 'src/modules/shows/reducers'
import { getShows } from 'src/modules/shows/actions/shows'

import { Shows } from 'src/modules/shows/pages'

const mapStateToProps = (state: RootState) => ({
  shows: state[showsModule].shows.list,
  loadingOfShows: state[showsModule].shows.loadingOfShows,
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
  getShows: () => dispatch(getShows())
})

export default connect(mapStateToProps, mapDispatchToProps)(Shows)
