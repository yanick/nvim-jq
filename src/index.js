import JQquery from './JQquery/JQquery';

module.exports = plugin => {

    plugin.registerFunction( 'JQquery', JQquery(plugin), {} );

};
