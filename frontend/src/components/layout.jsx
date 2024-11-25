import PropTypes from 'prop-types';
import {
    Navbar,
    Footer,
} from './';


const Layout = ({ children }) => {
  return (
    <div style={styles.container}>
      <Navbar />
      <main style={styles.mainContent}>{children}</main>
      <Footer />
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  mainContent: {
    flex: 1,
  },
};
Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;

