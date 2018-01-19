import { connect } from 'react-redux';
import Warning from '../components/Warning';

function mapStateToProps(state) {
  return { positive: state.positive };
}

function mapDispatchToProps() {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(Warning);
