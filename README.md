# my_first_app

## `rvm` setup
```shell
$ source /home/ryan/.rvm/scripts/rvm
$ rvm list known
$ rvm get stable

$ source /home/ryan/.rvm/scripts/rvm
$ rvm install 3.2.0
$ rvm gemset create my_project_gems
$ rvm use 3.2.0@my_project_gems
$ rvm gemset list

$ gem install rails
$ rails -v

$ rails new my_first_app
$ cd my_first_app/
$ vi .rvmrc
$ rails server -p 4000
```

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...
