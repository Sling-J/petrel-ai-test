import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { RootState } from 'store/rootReducer'

import { moduleName as episodesModule } from 'src/modules/episodes/reducers'
import { getEpisodeDetails } from 'src/modules/episodes/actions/episodes'

import { EpisodeDetails } from 'src/modules/episodes/pages'

const mapStateToProps = (state: RootState) => ({
  details: state[episodesModule].episodes.details,
  loadingOfDetails: state[episodesModule].episodes.loadingOfDetails,
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
  getEpisodeDetails: id => dispatch(getEpisodeDetails(id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(EpisodeDetails)
