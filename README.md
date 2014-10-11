# mech-project

Mechanisms are plugins for open source.

This project is here to get you started in making new mechanism libraries.

    $ git clone git@github.com:mechanismsjs/mech-library.git LIBRARY

Where LIBRARY will be the name of the new mechanism library.

If you want to add mechanisms to one of the existing libraries please fork that library.

## What to do?

Anywhere you see LIBRARY replace it with your library name.

Anywhere you see mechanism01, mechanism02 ... mechanismnn replace the code with your own mechanisms.

Be sure to update your information in the package.json: Your github organization and your personal information.

Use the Example Documentation below to describe your mechanism.

# mech-LIBRARY

Mechanisms are plugins for open source.

ABOUT YOUR LIBRARY

Supported Mechanisms:

* MECHANISM01 - description
* MECHANISM01 - description

See [Mechanisms Home](https://github.com/mechanisms/mech) for more information.

# Documentation

* [Git mech-core](https://github.com/mechanismsjs/mech-core) latest version.
* [Git mech-web](https://github.com/mechanismsjs/mech-web) latest version.
* [Git mech-LIBRARY](https://github.com/mechanismsjs/mech-LIBRARY) latest version.

## MECH-NAME01

description

### Examples

MECH-NAME01 examples

## MECH-NAME02

description

### Examples

MECH-NAME02 examples

# Setup

## Using In Your Projects

Change directory to your node project.

    $ npm install --save mech-LIBRARY

## Development

### Setup

    $ npm install
    
### Continuous Rebuild and Testing

See ./dist for files we build.

    $ gulp

#### Test

    $ gulp webtests

OR

Right mouse click on /testsweb/index.html and open in browser.