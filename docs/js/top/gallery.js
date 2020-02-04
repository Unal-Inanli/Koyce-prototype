export function gallery() {
    var $grid = $('.gallery div').masonry({
        columnWidth: '.grid-item',
        itemSelector: '.grid-item',
        gutter: 10,
        percentPosition: true,
        horizontalOrder: true,
        initLayout: false,
    
    });

    document.onreadystatechange = function() {
      
        if(document.readyState === 'complete'){
            
    document.querySelector('.gallery').classList.remove('loading');
            $grid.masonry();
        }
    }
  

    }