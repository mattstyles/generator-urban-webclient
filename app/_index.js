
import { Base } from 'yeoman-generator'
import chalk from 'chalk'
import yosay from 'yosay'
import osenv from 'osenv'

export default class TestGenerator extends Base {
    constructor( ...args ) {
        super( ...args )

        this.pkg = require( '../package.json' )
    }

    static prompts = {
        return [{
            name: 'taskName',
            message: 'What is the name of your task?',
            validate: str => {
                return !/\s/.test( str )
            }
        }]
    }

    hello() {
        this.log( yosay([
            chalk.cyan( 'Urban Web Client' ),
            'Feed me information...'
        ].join( '\n' )))
    }

    app() {
        this.prompt( this.prompts, props => {
            this.props = props

            console.log( 'all done' )
        })
    }
}
