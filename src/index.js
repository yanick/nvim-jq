import JQquery from './JQquery';

module.exports = plugin => {

    plugin.registerCommand( 'JQquery', JQquery(plugin) );

};
