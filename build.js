import fs from 'fs'
import path from 'path'

import chalk from 'chalk'
import glob from 'glob'
import hrtime from 'pretty-hrtime'

import * as babel from 'babel-core'

var startTime = process.hrtime()
glob( './**/_index.js', ( err, files ) => {
    if ( err ) throw new Error( err )

    Promise.all(
        files.map( file => {
            return new Promise( ( resolve, reject ) => {
                console.log( chalk.grey( '[build]' ), 'Transpiling:', chalk.yellow( file ) )
                babel.transformFile( file, { ast: false }, ( err, res ) => {
                    if ( err ) reject( err )

                    var outPath = path.join( path.dirname( file ), path.basename( file ).replace( /^_/, '' ) )

                    console.log( chalk.grey( '[build]' ), 'Writing:', chalk.green( outPath ) )
                    fs.writeFile( path.resolve( outPath ), res.code , {
                        encoding: 'utf8'
                    }, err => {
                        if ( err ) reject( err )
                        resolve()
                    })
                })
            })
        })
    ).then( res => {
        var endTime = process.hrtime( startTime )
        console.log( chalk.grey( '[build]' ),'done', chalk.magenta( hrtime( endTime ).replace( /\s/, '' )))
    }).catch( console.error )
})
