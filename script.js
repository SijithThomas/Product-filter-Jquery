$(document).ready(function(){
    $('.item-box').show();
    $('.btn-primary').click(function(){
        const value=$(this).attr('data-filter');
        if(value == 'all'){
            $('.item-box').show();
        }
        else{
            $('.item-box').not('.'+value).hide();
            $('.item-box').filter('.'+value).show();
        }
    })
})
