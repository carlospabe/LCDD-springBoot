function showMoreMerch() {
    var new_item = $('<div class="row"><div class="col-lg-4 col-sm-6"><div class="l_product_item"><div class="l_p_img"><img src="assets/img/products/lcdd_shirt.png" width="300" height="300" alt="lcdd shirt 1"><h5 class="sale">Sale:</h5></div><div class="l_p_text"><ul><li class="p_icon"><a href="#">See Details</a></li><li><a class="add_cart" href="#">Add To Cart</a></li><li class="p_icon"><a href="#">Wish List</a></li></ul><h4>Shirt LCDD</h4><h5><del>69.00€</del> 40.00€</h5></div></div></div><div class="col-lg-4 col-sm-6"><div class="l_product_item"><div class="l_p_img"><img src="assets/img/products/lcdd_shirt.png" width="300" height="300"  alt="lcdd shirt 2"><h5 class="sale">Sale:</h5></div><div class="l_p_text"><ul><li class="p_icon"><a href="#">See Details</a></li><li><a class="add_cart" href="#">Add To Cart</a></li><li class="p_icon"><a href="#">Wish List</a></li></ul><h4>Shirt LCDD</h4><h5><del>69.00€</del> 40.00€</h5></div></div></div><div class="col-lg-4 col-sm-6"><div class="l_product_item"><div class="l_p_img"><img src="assets/img/products/lcdd_shirt.png" width="300" height="300" alt="lcdd shirt 3"><h5 class="sale">Sale:</h5></div><div class="l_p_text"><ul><li class="p_icon"><a href="#">See Details</a></li><li><a class="add_cart" href="#">Add To Cart</a></li><li class="p_icon"><a href="#">Wish List</a></li></ul><h4>Shirt LCDD</h4><h5><del>69.00€</del> 40.00€</h5></div></div></div></div><br><br>').hide();
    $('#original').append(new_item);
    scrollToButton(new_item.slideDown(400));
}
function scrollToButton() {
    var elmnt = document.getElementById("show_more_button");
    elmnt.scrollIntoView({
        behavior: "smooth"
    });
}