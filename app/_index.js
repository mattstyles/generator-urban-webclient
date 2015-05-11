
import { Base } from 'yeoman-generator'
import chalk from 'chalk'
import yosay from 'yosay'
import osenv from 'osenv'

export default class TestGenerator extends Base {
    constructor( ...args ) {
        super( ...args )
        this.argument( 'TaskGenerator' )
        console.log( 'constructing test generator' )
    }

    get prompting() {
        this.log( yosay(
            'Scaffolding...'
        ))

        this.prompt([{
            name: 'taskName',
            message: 'What is the name of your task?',
            validate: str => {
                return !/\s/.test( str )
            }
        }], props => {
            this.props = props

            console.log( 'all done' )
        })
    }
}
