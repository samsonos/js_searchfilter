/**
 * Created by omelchenko on 01.09.14.
 */

var SamsonJSSearchFilter =
{
    /**
     * This function searches for common elements while typing.
     * @param itemSelector Elements list selector
     * @param minLetterCount Minimal count of letters to start search
     * @param renderedHandler Function that is called after list formation
     * @returns {SamsonJSSearchFilter}
     */
    searchFilter : function(itemSelector, minLetterCount, renderedHandler){

        minLetterCount = minLetterCount ? minLetterCount : 2;
        var searchFilter = this;

        if (searchFilter.length) {
            searchFilter.keyup(function(){
                var value = searchFilter.val().toUpperCase();
                var items = itemSelector ? s(itemSelector) : s('.search-element');
                // no filtering for small input
                if (value.length > minLetterCount) {

                    items.each(function(item){
                        if(item.html().toUpperCase().indexOf(value) === -1) {
                            item.hide();
                        } else {
                            item.show();
                        }
                    });
                } else {
                    // show all items
                    items.show();
                }
                if (renderedHandler) renderedHandler(searchFilter, items);
            });
        }
        // Вернем указатель на себя
        return this;
    }
};

// Добавим плагин к SamsonJS
SamsonJS.extend( SamsonJSSearchFilter );