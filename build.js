import fs from 'fs'
import path from 'path'

import chalk from 'chalk'
import glob from 'glob'
import hrtime from 'pretty-hrtime'
import minimist from 'minimist'
import { watch } from 'chokidar'

import * as babel from 'babel-core'

let argv = minimist( process.argv.slice( 2 ) )
let globPath = './**/_index.js'
let mode = 'build'

function log( ...args ) {
    console.log( chalk.grey( '[' + mode + ']' ), ...args )
}

var startTime = process.hrtime()
glob( globPath, ( err, files ) => {
    if ( err ) throw new Error( err )

    Promise.all( files.map( transpile ) )
        .then( res => {
            var endTime = process.hrtime( startTime )
            log( 'done', chalk.magenta( hrtime( endTime ).replace( /\s/, '' )))

            if ( argv.watch ) watcher()
        })
        .catch( console.error )
})

function transpile( file ) {
    return new Promise( ( resolve, reject ) => {
        log( 'Transpiling:', chalk.yellow( file ) )
        babel.transformFile( file, { ast: false }, ( err, res ) => {
            if ( err ) reject( err )

            var outPath = path.join( path.dirname( file ), path.basename( file ).replace( /^_/, '' ) )

            log( 'Writing:', chalk.green( outPath ) )
            fs.writeFile( path.resolve( outPath ), res.code , {
                encoding: 'utf8'
            }, err => {
                if ( err ) reject( err )
                resolve()
            })
        })
    })
}

function watcher() {
    mode = 'watch'
    watch( globPath )
        .on( 'change', transpile )
}
