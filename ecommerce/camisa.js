function make_camisa_page_disappear()
{
  $("#div_camisa").hide();
}

function display_camisa_page()
{
  make_home_disappear();
  make_carrinho_page_disappear();
  make_short_page_disappear();
  make_sapato_page_disappear();
  $("#div_camisa").show();
}


//add_product_to_cart(page_number, product_number);
function camisa_buy_button1()
{
  add_product_to_cart(0, 0);
}

function camisa_buy_button2()
{
  add_product_to_cart(0, 1);
}

function camisa_buy_button3()
{
  add_product_to_cart(0, 2);
}
