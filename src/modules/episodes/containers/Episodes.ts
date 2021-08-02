import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { RootState } from 'store/rootReducer'

import { moduleName as showsModule } from 'src/modules/shows/reducers'
import { getShowDetails, getShowEpisodes } from 'src/modules/shows/actions/shows'

import { Episodes } from 'src/modules/episodes/pages'

const mapStateToProps = (state: RootState) => ({
  details: state[showsModule].shows.details,
  episodes: state[showsModule].shows.episodes,
  loadingOfEpisodes: state[showsModule].shows.loadingOfEpisodes,
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
  getShowDetails: id => dispatch(getShowDetails(id)),
  getShowEpisodes: id => dispatch(getShowEpisodes(id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Episodes)
