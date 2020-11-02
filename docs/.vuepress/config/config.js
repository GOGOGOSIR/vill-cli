const ENV = process.env.NODE_ENV;

const OUTPUT_DIR = 'docs-dist';

const IFRAME_SRC = ENV === 'development' ? 'http://127.0.0.1:9527/' : 'http://vill-ui-demo.harohouse.com/#/'
const BASE = ENV === 'development' ? '/' : `/${OUTPUT_DIR}/`

module.exports = {
  IFRAME_SRC,
  BASE,
  OUTPUT_DIR
}
