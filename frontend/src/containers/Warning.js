import { connect } from 'react-redux';
// import { hideBlockInspector, showMediaPicker } from '../../actions/ui';
// import { updateBlock } from '../../actions/actions';
import Warning from '../components/Warning';

function mapStateToProps(state) {
  return state.positive;
}

function mapDispatchToProps() {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(Warning);
