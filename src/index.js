import JQquery from './JQquery/JQquery';
import JQfilter from './JQfilter';

module.exports = plugin => {

    plugin.registerFunction( 'JQquery', JQquery(plugin), {} );

    plugin.registerFunction( 'JQfilter', JQfilter(plugin), {} );

};
