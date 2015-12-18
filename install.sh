#!/bin/bash

command -v bundle >/dev/null 2>&1 || {
    echo -e >&2 "To install the software needed to build this website, you" \
        "must have Bundler installed on your system. Please install Bundler" \
        "to continue.\n\nIn its turn, Bundler requires Ruby and RubyGems to" \
        "be installed. Please install them if you haven't done that yet.";
    exit 1;
}

bundle install
