const { spawn } = require('child-process-promise');

export default plugin => async (...filters) => {

    if( filters.length === 0 ) {
        filters = ( await plugin.nvim.eval( 'input( "filter: ", ".[]" )' ) );
    }

    let job = spawn('jq', [ filters.join(' | ') ], { capture: [ 'stdout', 'stderr' ] });

    let proc = job.childProcess;

    const buffer = await ( await plugin.nvim.buffer );

    let lines = await buffer.lines;

    lines.forEach( l => proc.stdin.write( l ) );
    proc.stdin.end();

    let result = await job;

    buffer.setLines( result.stdout.split("\n"), {
        start: 0, end: -1
    });

}
