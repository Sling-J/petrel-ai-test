import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { RootState } from 'store/rootReducer'

import { moduleName as searchModule } from 'src/modules/search/reducers'
import { searchShow } from 'src/modules/search/actions/search'

import { Search } from 'src/modules/search/pages'

const mapStateToProps = (state: RootState) => ({
  list: state[searchModule].search.list,
  loadingOfSearch: state[searchModule].search.loadingOfSearch,
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
  searchShow: params => dispatch(searchShow(params))
})

export default connect(mapStateToProps, mapDispatchToProps)(Search)
