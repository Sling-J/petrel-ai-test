import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { RootState } from 'store/rootReducer'

import { moduleName as showsModule } from 'src/modules/shows/reducers'
import { getShowDetails, getShowSeasons } from 'src/modules/shows/actions/shows'

import { Seasons } from 'src/modules/seasons/pages'

const mapStateToProps = (state: RootState) => ({
  seasons: state[showsModule].shows.seasons,
  details: state[showsModule].shows.details,
  loadingOfSeasons: state[showsModule].shows.loadingOfSeasons,
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
  getShowSeasons: id => dispatch(getShowSeasons(id)),
  getShowDetails: id => dispatch(getShowDetails(id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Seasons)
