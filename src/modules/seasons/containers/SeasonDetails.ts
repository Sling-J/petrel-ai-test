import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { RootState } from 'store/rootReducer'

import { moduleName as seasonsModule } from 'src/modules/seasons/reducers'
import { getSeasonDetails } from 'src/modules/seasons/actions/seasons'

import { SeasonDetails } from 'src/modules/seasons/pages'

const mapStateToProps = (state: RootState) => ({
  details: state[seasonsModule].seasons.details,
  loadingOfDetails: state[seasonsModule].seasons.loadingOfDetails,
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
  getSeasonDetails: id => dispatch(getSeasonDetails(id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(SeasonDetails)
