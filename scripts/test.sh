#!/bin/sh
yarn lint
yarn tsc
yarn test --coverage
