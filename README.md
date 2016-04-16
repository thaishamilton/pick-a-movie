# pick-a-movie

[![Stories in Ready](https://badge.waffle.io/thaishamilton/pick-a-movie.svg?label=ready&title=Ready)](http://waffle.io/thaishamilton/pick-a-movie)

## Using Vagrant

* Install VirtualBox and Vagrant
* Run `vagrant up` in the project root folder (where the Vagrantfile is located)
* Run `vagrant ssh` to access the VM :boar:
* Run `make install-vm` to install dependencies inside the VM
* Run `make test-vm` to run the tests inside the VM

## Local dev

* Install node and npm (if you don't have it already)
* Run `make install` or `npm install` to install dependencies
* Run `make test` or `npm test` to run the tests
* Run `npm run dev` to start webpack watcher
* Run `npm start` to run the server
