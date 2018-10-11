const { spawn } = require('child-process-promise');

export default plugin => async (...filters) => {

    if( filters.length === 0 ) {
        filters = ( await this.nvim.eval( 'input( "filter: ", ".[]" )' ) );
    }

    let result = await spawn('jq', filters.join(' | |'), { capture: [ 'stdout', 'stderr' ] });

    
    await ( await plugin.nvim.buffer ).setLines( result.stdout.split("\n"), {
        start: 0, end: -1
    });

}
