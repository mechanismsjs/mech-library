# mech-project

Mechanisms are plugins for open source.

This project is here to get you started in making new mechanism libraries.

    $ git clone git@github.com:mechanismsjs/mech-library.git library

Where 'mech-library' will be the name of the new mechanism library you are creating.

If you want to add mechanisms to one of the existing libraries please fork that library (see [Mechanisms Home][mech-home-link] for existing libraries).

## What to do?

Anywhere you see the word 'library' replace it with your library name.

Anywhere you see mechanism01 ... mechanismnn replace the code with your own mechanisms.

Be sure to update your information in the package.json: Your github organization and your personal information.

Use the Example Documentation below to describe your mechanism.

[mech-home-link]: https://github.com/mechanisms/mech "Home repository for mechanisms"

# mech-library

ABOUT YOUR library

See [Mechanisms Home][mech-home-link] for more information and other libraries.

Supported Mechanisms:

* *[mechanism01](#mechanism01-mechanism)* - description

# Supported Mechanisms

## <a name="mechanism01-mechanism"></a> Mechanism01 mechanism

description

and examples

# Setup

## Using In Your Projects

Change directory to your node project.

    $ npm install --save mech-library

## Development

### Setup

    $ npm install
    
### Continuous Rebuild and Testing

See ./dist for files we build.

    $ gulp

#### Test

    $ gulp webtests

#### Test Server

Read documentation in gulpfile.js to see how to setup automated web testing.

    $ gulp webserver
