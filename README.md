# Todo list API

Simple todo list api made with Ruby on Rails for a technical test for Javry.

## Requirements

* Ruby >= 2.5.1
* Rails >= 5.2.1
* Running MySql server

## Installation

* Clone the github repository

``` 
$ git clone https://github.com/AdrienNini/RoR-Todo-list-API-Javry.git 
```
* __Warning !__ You may need to change to database configuration depending on your install. In the file `config/database.yml` :

```YAML
default: &default   
    ...
    username: root
    password: password
    ...
```

* Build and migrate the database

```
$ rake db:setup
```

* Start the server

```
$ rails s
```

* Open `localhost:3000` on your web browser

## References used

* [Ruby formation](https://openclassrooms.com/fr/courses/2913686-lancez-vous-dans-la-programmation-avec-ruby)
* [Ruby on Rails formation](https://openclassrooms.com/fr/courses/3149156-initiez-vous-a-ruby-on-rails)
* [Ruby on Rails](https://rubyonrails.org)
* [Ruby on Rails doc](https://api.rubyonrails.org)
* [MySQL 8.0](https://dev.mysql.com/doc/relnotes/mysql/8.0/en/)