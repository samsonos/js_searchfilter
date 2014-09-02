# Filter(searchfilter) SamsonJS module for [SamsonPHP](http://samsonphp.com) framework

> Module gives tou an opportunity to filter specified list by value typed in input.
It has 3 parameters:
* First is to specify all elements which will be in search list.
That means you can use any selector you want, by default class ```'.search-element'``` is used.
* Second parameter is minimal typed text length to start search.
Starting from this number function starts to filter, by default **2** is set.
* And the last one is to perform your own code while searching.
You can set your own function, which will be called on each ```keyup``` action.
This function can take 2 parameters: input field object and list of filtered objects.

Developed by [SamsonOS](http://samsonos.com/)