function make_short_page_disappear()
{
  $("#div_short").hide();
}

function display_short_page()
{
  make_home_disappear();
  make_carrinho_page_disappear();
  make_camisa_page_disappear();
  make_sapato_page_disappear();
  $("#div_short").show();
}

//add_product_to_cart(page_number, product_number);
function short_buy_button1()
{
  add_product_to_cart(1, 0);
}

function short_buy_button2()
{
  add_product_to_cart(1, 1);
}

function short_buy_button3()
{
  add_product_to_cart(1, 2);
}
